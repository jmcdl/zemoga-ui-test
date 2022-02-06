import { css } from "@emotion/react";

const card = css`
  height: 300px;
  width: 300px;
`

interface CardProps {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: { positive: number; negative: number };
}
export function Card({
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes,
}: CardProps) {
  return <div css={card}>hello</div>;
}
