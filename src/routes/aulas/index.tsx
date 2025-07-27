import { createFileRoute } from "@tanstack/react-router";
import {
  aula1,
  aula2,
  aula3,
  aula4,
  aula5,
  aula6,
  aula7,
  aula8,
  aula9,
} from "../../contents/aulas";
import { Sections } from "../../ui/Sections";
import { H1 } from "../../ui/Typography";

export const Route = createFileRoute("/aulas/")({
  component: Lessons,
});

function Lessons() {
  return (
    <>
      <H1>Aulas</H1>

      <Sections
        sections={[
          aula1,
          aula2,
          aula3,
          aula4,
          aula5,
          aula6,
          aula7,
          aula8,
          aula9,
        ]}
      />
    </>
  );
}
