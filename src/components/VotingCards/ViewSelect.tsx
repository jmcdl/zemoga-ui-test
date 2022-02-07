import { css, Theme } from "@emotion/react";
import { ALL_VIEWS, SelectedView } from "../../shared/interfaces";
import { Dispatch, SetStateAction, useState } from "react";

const select__container = css`
  display: flex;
  flex-direction: column;
  //position: absolute;
  //top: 680px;
  //right: 16px;
  //@media all and (min-width: 1100px) {
  //  top: 165px;
  //  right: 20px;
  //}
`;

const select = (theme: Theme) => css`
  height: 28px;
  width: 131px;
  border-radius: 0;
  outline: 2px solid #333333;
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  align-items: center;
  background-color: ${theme.colors.white};
  font-size: 10.5px;
  z-index: 1;
  @media all and (min-width: 1100px) {
    height: 36px;
    width: 173px;
    font-size: 13.5px;
  }
`;

const triangleUp = css`
  background: #333333;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
  position: relative;
  width: 10.5px;
  height: 8px;
  left: 35px;
  top: 0;
  @media all and (min-width: 1100px) {
    width: 13.5px;
    height: 10px;
    left: 45px;
    top: 0;
  }
`;

const triangleDown = css`
  background: #333333;
  clip-path: polygon(0% 0%, 50% 50%, 100% 0%);
  position: relative;
  width: 11.5px;
  height: 15px;
  left: 35px;
  top: 5px;
  @media all and (min-width: 1100px) {
    width: 13.5px;
    height: 18px;
    left: 45px;
    top: 5px;
  }
`;

// I used a custom view select so that it can be more easily styled
interface Props {
  selectedView: SelectedView;
  setSelectedView: Dispatch<SetStateAction<SelectedView>>;
}
export function ViewSelect({ selectedView, setSelectedView }: Props) {
  const [showingList, setShowingList] = useState(false);

  const onChangeView = (view: SelectedView) => {
    setSelectedView(view);
    setShowingList(false);
  };

  return (
    <div css={select__container}>
      <div css={select} onClick={() => setShowingList((prev) => !prev)}>
        {selectedView}
        {showingList ? <span css={triangleUp} /> : <span css={triangleDown} />}
      </div>
      {showingList &&
        ALL_VIEWS.map((view: SelectedView) => (
          <div key={view} css={select} onClick={() => onChangeView(view)}>
            {view}
          </div>
        ))}
    </div>
  );
}
