import { ChangeEvent, useEffect, useState } from "react";
import { css, Theme } from "@emotion/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "src/utils/firebase";
import { LoadingSpinner } from "../shared/loading-spinner";
import { useMediaQuery } from "react-responsive";
import { isSelectedViewValue } from "../../utils/type-guards";
import { LARGE_CARD, SMALL_CARD } from "src/styles";
import { SelectedView } from "src/shared/interfaces";
import { CardContainer } from "./CardContainer";

const gridContainer = (itemCount: number) => css`
  display: grid;
  grid-template-columns: repeat(${itemCount}, ${SMALL_CARD}px);
  grid-template-rows: ${SMALL_CARD}px;
  overflow-x: scroll;
  margin-left: 1rem;
  grid-gap: 1rem;
  @media all and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(${Math.ceil(itemCount / 2)}, ${LARGE_CARD}px);
    overflow: auto;
    margin: 0;
  }
  @media all and (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(${Math.ceil(itemCount / 3)}, ${LARGE_CARD}px);
    overflow: auto;
    margin: 0;
  }
`;

const listContainer = (itemCount: number) => css`
  display: grid;
  grid-template-rows: repeat(${itemCount}, 142px);
  grid-gap: 1rem;
  margin: 0 1rem;
  @media all and (min-width: 1100px) {
    grid-template-rows: repeat(${itemCount}, 170px);
  }
`;

const containerHeader = (theme: Theme) => css`
  display: flex;
  margin: 0 1rem;
  justify-content: space-between;
  align-items: center;
  > select {
    height: 28px;
    width: 131px;
    border-radius: 0;
    border: 2px solid #333333;
    text-align: center;
    background-color: ${theme.colors.white};
  }
  @media all and (min-width: 1100px) {
    > select {
      height: 36px;
      width: 173px;
    }
  }
`;

const containerTitle = css`
  margin-left: 1rem;
  font-size: 24px;
  font-weight: 300;
  @media all and (min-width: 1100px) {
    font-size: 45px;
  }
`;

const loadingStyle = css`
  display: flex;
  flex-direction: column;
  height: ${SMALL_CARD}px;
`;

export function CardsLayoutContainer() {
  const [selectedView, setSelectedView] = useState<SelectedView>("list");
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [value, loading, error] = useCollection(collection(db, "celebrities"));

  useEffect(() => {
    if (isMobile) {
      setSelectedView("grid");
    }
  }, [isMobile]);

  const handleSelectView = (event: ChangeEvent<HTMLSelectElement>) => {
    if (isSelectedViewValue(event.target.value)) {
      setSelectedView(event.target.value);
    }
  };

  if (error) {
    return <main>something went wrong</main>;
  }

  if (loading) {
    return (
      <main css={loadingStyle}>
        <h2 css={containerTitle}>Previous Rulings</h2>
        <LoadingSpinner />
      </main>
    );
  }

  const itemCount = value?.docs.length ?? 1;

  return (
    <main>
      <div css={containerHeader}>
        <h2 css={containerTitle}>Previous Rulings</h2>
        {!isMobile && (
          <select name="view" value={selectedView} onChange={handleSelectView}>
            <option value="grid">Grid</option>
            <option value="list">List</option>
          </select>
        )}
      </div>
      <div
        css={[
          isMobile || selectedView === "grid"
            ? gridContainer(itemCount)
            : listContainer(itemCount),
        ]}
      >
        {loading && <LoadingSpinner />}
        {value &&
          value.docs.map((doc) => (
            <CardContainer
              key={doc.id}
              firebaseDoc={doc}
              selectedView={selectedView}
            />
          ))}
      </div>
    </main>
  );
}
