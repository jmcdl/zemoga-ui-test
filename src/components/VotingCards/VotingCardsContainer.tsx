import { useState } from "react";
import { css } from "@emotion/react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import data from "src/__mocks__/data.json";
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

  const [value, loading, error] = useCollectionData(collection(db, "celebrities"));
  console.log({ value, loading, error });
  if (loading) {
    return (
      <main
        css={[
          selectedView === "list"
            ? listContainer(1)
            : gridContainer(1),
        ]}
      >
        <LoadingSpinner />
      </main>
    );
  }

  const itemCount = data.data.length;
  console.log("itemCount", itemCount);
  return (
    <main
      css={[
        selectedView === "list"
          ? listContainer(itemCount)
          : gridContainer(itemCount),
      ]}
    >
      {data.data.map(
        ({ name, description, category, picture, lastUpdated, votes }) => (
          <Card
            key={name}
            name={name}
            description={description}
            category={category}
            picture={picture}
            lastUpdated={lastUpdated}
            votes={votes}
          />
        )
      )}
    </main>
  );
}
