import { Button } from "./Button";

type GithubLinkProps = {
  lesson: number;
  soon?: boolean;
};

export const GithubLink = ({ lesson, soon }: GithubLinkProps) => {
  if (soon) {
    return <span>breve</span>;
  }
  return (
    <a
      href={`https://github.com/expalmer/ada-front-end-dinamico-2025/tree/master/aulas/aula${lesson}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button>github com os arquivos</Button>
    </a>
  );
};
