import { useState } from "react";
import { SelectedView, SelectedVote } from "../../shared/interfaces";
import { isCelebrityDocument } from "../../utils/type-guards";
import { formatDistanceToNow } from "date-fns";
import { QueryDocumentSnapshot, setDoc } from "firebase/firestore";
import { getCelebrityDocRef } from "../../utils/firebase";
import { GridCard } from "./GridCard";

interface CardProps {
  firebaseDoc: QueryDocumentSnapshot;
  selectedView: SelectedView;
}
export function CardContainer({ firebaseDoc, selectedView }: CardProps) {
  const [selectedVote, setSelectedVote] = useState<SelectedVote>(null);
  const [hasVoted, setHasVoted] = useState(false);

  const data = firebaseDoc.data();
  if (!isCelebrityDocument(data)) {
    return null;
  }
  const { name, description, category, imgUrls, lastUpdated, votes } = data;

  const { positive, negative } = votes;
  const totalVotes = positive + negative;

  // use Math.round to get a number with a single decimal place, but only if
  // it's not zero
  const percentPositive =
    totalVotes > 0 ? Math.round((positive / totalVotes) * 1000) / 10 : 0;
  const percentNegative = Math.round((100 - percentPositive) * 10) / 10;
  const winningCard: SelectedVote =
    percentPositive > percentNegative ? "thumbs up" : "thumbs down";

  const timeSinceLastVote = lastUpdated
    ? formatDistanceToNow(new Date(lastUpdated))
    : null;

  const lastUpdateMsg = timeSinceLastVote
    ? `${timeSinceLastVote} in ${category}`
    : "Be the first to vote!";

  const truncatedDescription =
    description.length > 60 ? `${description.slice(0, 60)}...` : description;

  const submitVote = async (selectedVote: SelectedVote) => {
    const todayAsISOString = new Date().toISOString();
    const newDoc = { ...data, lastUpdated: todayAsISOString };
    if (selectedVote === "thumbs up") {
      newDoc.votes.positive = newDoc.votes.positive + 1;
    }
    if (selectedVote === "thumbs down") {
      newDoc.votes.negative += 1;
    }
    try {
      await setDoc(getCelebrityDocRef(firebaseDoc.id), newDoc);
    } catch (error) {
      console.error("error submitting vote", error);
    }
  };
  if (selectedView === "grid") {
    return (
      <GridCard
        imgUrls={imgUrls}
        winningCard={winningCard}
        truncatedDescription={truncatedDescription}
        hasVoted={hasVoted}
        lastUpdateMsg={lastUpdateMsg}
        selectedView={selectedView}
        selectedVote={selectedVote}
        setSelectedVote={setSelectedVote}
        setHasVoted={setHasVoted}
        submitVote={submitVote}
        totalVotes={totalVotes}
        percentPositive={percentPositive}
        percentNegative={percentNegative}
        name={name}
      />
    );
  }
  return null;
}
