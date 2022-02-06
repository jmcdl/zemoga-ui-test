import styled from "@emotion/styled";

export const MaxContentContainer = styled.div`
  display: contents;
  @media all and (min-width: 1100px) {
    position: relative;
    display: block;
    width: 100vw;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
  }

  //> *,
  //> hr[role="separator"] {
  //  margin-right: 0;
  //  margin-left: 0;
  //}
  //
  //& > main {
  //  padding: 0;
  //}
`;

export const IconButton = styled.button`
  padding: 0;
  border: 0;
  background-color: transparent;
`;

export const Banner = styled.aside`
  position: relative;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.lightGray};
    @media all and (min-width: 1100px) {
    margin: 1rem 0;
  }
`;
