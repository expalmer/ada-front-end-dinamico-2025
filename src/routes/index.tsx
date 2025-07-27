import { createFileRoute } from "@tanstack/react-router";
import { H1 } from "../ui/Typography";
import { Sections } from "../ui/Sections";
import { combinados, instructor, intro } from "../contents";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <H1>Front End Dinâmico</H1>
      <Sections sections={[intro, instructor, combinados]} />
    </>
  );
}
