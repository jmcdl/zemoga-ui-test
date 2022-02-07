import { useState } from "react";
import { css } from "@emotion/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { Card } from "./Card";
import { db } from "src/utils/firebase";
import { LoadingSpinner } from "../shared/loading-spinner";

export type View = "grid" | "list";

const MOBILE_CARD_HEIGHT = 300;
const MOBILE_CARD_WIDTH = 300;

const listContainer = (itemCount: number) => css`
  display: grid;
  grid-template-columns: repeat(${itemCount}, ${MOBILE_CARD_WIDTH}px);
  grid-template-rows: ${MOBILE_CARD_HEIGHT}px;
  overflow-x: scroll;
  margin-left: 1rem;
  grid-gap: 1rem;
`;

const gridContainer = (itemCount: number) => css`
  display: grid;
  grid-template-rows: repeat(${itemCount}, 100px);
`;

export function VotingCardsContainer() {
  const [selectedView, setSelectedView] = useState<View>("list");
  const [value, loading, error] = useCollection(collection(db, "celebrities"));

  if (error) {
    return <main>something went wrong</main>;
  }

  if (loading) {
    return (
      <main
        css={[selectedView === "list" ? listContainer(1) : gridContainer(1)]}
      >
        <LoadingSpinner />
      </main>
    );
  }

  const itemCount = value?.docs.length ?? 0;

  return (
    <main
      css={[
        selectedView === "list"
          ? listContainer(itemCount)
          : gridContainer(itemCount),
      ]}
    >
      {value &&
        value.docs.map((doc) => <Card key={doc.id} firebaseDoc={doc} />)}
    </main>
  );
}
