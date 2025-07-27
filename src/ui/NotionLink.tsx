import { Button } from "./Button";

type Props = {
  lesson: number;
  href: string;
  soon?: boolean;
};

const Notion = () => (
  <svg
    width="16px"
    height="16px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17H9V9.5L14.2182 17.3273C14.687 18.0305 15.5474 18.3632 16.3674 18.1582L16.6213 18.0947C16.8439 18.039 17 17.839 17 17.6096V7C17 7 18 7 18 6H15C14 6 14 7 14 7H15V13L10.1496 6.20938C10.0557 6.07798 9.90425 6 9.74277 6H7C6 6 6 7 6 7H7V17C7 17 6 17 6 18H9C10 18 10 17 10 17Z"
      fill="#fff"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 4C1 2.34315 2.34315 1 4 1H20C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"
      fill="#fff"
    />
  </svg>
);

export const NotionLink = ({ href, lesson, soon }: Props) => {
  if (soon) {
    return <span>breve</span>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button icon={<Notion />}>Acessar aula {lesson}</Button>
    </a>
  );
};
