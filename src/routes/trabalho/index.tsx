import { createFileRoute } from "@tanstack/react-router";
import { H1 } from "../../ui/Typography";

export const Route = createFileRoute("/trabalho/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <H1>Trabalho</H1>
      <h4 className="text-center">Breve</h4>
    </>
  );
}
