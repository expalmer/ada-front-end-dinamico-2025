import { createFileRoute } from "@tanstack/react-router";
import { H1, H2 } from "../../ui/Typography";
import { Button } from "../../ui/Button";

export const Route = createFileRoute("/links/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <H1>Links</H1>
      <main className="flex flex-col gap-4">
        <H2>Secretaria Virtual</H2>
        <p>
          Acesse a Secretaria Virtual para obter informações sobre atestados e
          outros serviços como:
        </p>
        <ul>
          <li>Abono de falta</li>
          <li>Cancelamento</li>
          <li>Comprovante de Matrícula</li>
          <li>Histórico</li>
          <li>Alteração de e-mail p/ acesso a aula/gravações</li>
          <li>Comprovante de conclusão do curso</li>
          <li>Exclusão da conta</li>
          <li>Kit onboarding</li>
        </ul>

        <div className="flex">
          <Button to="https://form.typeform.com/to/EXiQ0Z08?utm_source=guialetscode&typeform-source=letscode.typeform.com">
            Acessar a Secretaria Virtual
          </Button>
        </div>
        <div className="flex justify-center"></div>
        <div className="flex justify-center"></div>
      </main>
    </>
  );
}
