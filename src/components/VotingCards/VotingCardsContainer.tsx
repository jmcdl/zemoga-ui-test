import { css, Theme } from "@emotion/react";
import { useState } from "react";
import data from "../../__mocks__/data.json";
import { Card } from "./Card";

export type View = "grid" | "list";

const listContainer = (itemCount: number) => css`
  display: grid;
  grid-template-rows: repeat(${itemCount}, 100px);
`;

const gridContainer = (itemCount: number) => css`
  display: grid;
  grid-template-columns: repeat(${itemCount}, 100px);
  overflow-x: scroll;
`;

export function VotingCardsContainer() {
  const [selectedView, setSelectedView] = useState<View>("list");

  const itemCount = data.data.length;
  console.log("itemCount", itemCount);
  return (
    <main
      css={[
        selectedView === "grid"
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
