import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const loader = css`
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: auto;
  animation: ${spin} 2s linear infinite;
`;

export function LoadingSpinner() {
  return <div css={loader} />;
}
