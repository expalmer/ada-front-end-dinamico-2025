import { NotionLink } from "../ui/NotionLink";
import type { SectionProps } from "../ui/Sections";

export const aula1: SectionProps = {
  active: true,
  subtitle: ["Aula 1", "Como alterar o HTML utilizando Javascript?"],
  items: [
    {
      title: "Document Object Model (DOM)",
      children: [
        "Veremos que DOM é uma interface que representa um documento HTML e que permite a manipulação do conteúdo e da estrutura do documento.",
        "Relação entre o navegador, a página (DOM) e o JavaScript.",
        "Introdução aos objetos window e document.",
        "Seletores getElementById, getElementsByClassname e querySelectors (diferenças, vantagens e desvantagens)",
        "Eventos em Javascript (addEventListener)",
      ],
    },
    {
      title: "[ arquivos da aula ]",
      children: [
        <NotionLink
          lesson={1}
          href="https://expalmer.notion.site/Aula-1-Introdu-o-ao-DOM-Document-Object-Model-23d6ac493b4580ed9bd5d5b3b583ed28"
        />,
      ],
    },
  ],
};

export const aula2: SectionProps = {
  active: true,
  subtitle: ["Aula 2", "Callbacks e formulário reativo com JS"],
  items: [
    {
      title: "Callback Functions",
      children: ["Vamos entender o que são callbacks"],
    },
    {
      title: "Criando um contador",
      children: ["Criando um contador que incrementa ou decrementa um valor"],
    },
    {
      title: "Criando um formulário",
      children: ["Criando um formulário com campos de texto, botões e eventos"],
    },
    {
      title: "Reatividade em formulários",
      children: [
        "O que é reatividade?",
        "Como criar um formulário reativo?",
        "Validação de formulários",
      ],
    },
    {
      title: "[ arquivos da aula ]",
      children: [
        <NotionLink
          lesson={2}
          href="https://expalmer.notion.site/Aula-2-Callbacks-e-formul-rio-reativo-com-JS-23d6ac493b458021a7e0d66a97b00d97"
        />,
      ],
    },
  ],
};

export const aula3: SectionProps = {
  active: true,
  subtitle: ["Aula 3", "Começo do Task Manager"],
  items: [
    {
      title: "Criando um Task Manager",
      children: [
        "Adicionar item na lista",
        "Criar um `estado` para controlar a lista",
        "Remover um item",
        "Marcar como `concluído`",
      ],
    },
    {
      title: "[ arquivos da aula ]",
      children: [
        <NotionLink
          href="https://expalmer.notion.site/Aula-3-Come-o-do-Task-Manager-23d6ac493b4580dd9222f6a602b59140"
          lesson={3}
        />,
      ],
    },
  ],
};

export const aula4: SectionProps = {
  active: true,
  subtitle: ["Aula 4", "LocalStorage e SessionStorage"],
  items: [
    {
      title: "Entendo LocalStorage",
      children: [
        "O que é LocalStorage?",
        "Como salvar e recuperar dados no LocalStorage?",
        "Fazendo o mesmo com o SessionStorage",
      ],
    },
    {
      title: "Persistindo o Task Manager",
      children: ["Salvando o Task Manager no LocalStorage"],
    },
    {
      title: "[ arquivos da aula ]",
      children: [
        <NotionLink
          href="https://expalmer.notion.site/Aula-4-LocalStorage-e-SessionStorage-23d6ac493b4580c594b5c9d7eeab247e"
          lesson={4}
        />,
      ],
    },
  ],
};

export const aula5: SectionProps = {
  active: true,
  subtitle: ["Aula 5", "Callback, Promises, Async/Await e consumo de APIs"],
  items: [
    {
      title: "Callback",
      children: [
        "Reforçar o entendimento do que é um callback?",
        "Exemplos de callbacks",
        "SetTimeout e SetInterval",
        "Problemas com callbacks (Callback Hell)",
      ],
    },
    {
      title: "Promises",
      children: [
        "O que é uma Promise?",
        "Como criar uma Promise?",
        "Como consumir uma Promise?",
        "Promise.all e Promise.race",
        "Problemas com Promises (Promise Hell)",
      ],
    },
    {
      title: "Async/Await",
      children: [
        "O que é o Async/Await?",
        "Como criar uma função assíncrona?",
        "Como consumir uma função assíncrona?",
      ],
    },
    {
      title: "API do Rick and Morty",
      children: ["O que é uma API e como consumir?"],
    },
    {
      title: "[ arquivos da aula ]",
      children: [
        <NotionLink
          href="https://expalmer.notion.site/Aula-5-Callback-Promises-Async-Await-e-consumo-de-APIs-23d6ac493b458061afd1e27cedc771dc"
          lesson={5}
        />,
      ],
    },
  ],
};

export const aula6: SectionProps = {
  active: true,
  subtitle: [
    "Aula 6",
    "Consumindo um CRUD API com Javascript para o Task Manager",
  ],
  items: [
    {
      title: "CRUD API",
      children: ["O que é um CRUD?", "Como consumir uma API com Javascript?"],
    },
    {
      title: "Integrando com o Task Manager",
      children: [
        "Create para adicionar um item",
        "Read para listar os itens",
        "Update para editar um item",
        "Delete para excluir um item",
        "Patch para marcar como concluído",
      ],
    },
    {
      title: "[ arquivos da aula ]",
      children: [
        <NotionLink
          href="https://expalmer.notion.site/Aula-6-Consumindo-um-CRUD-API-com-Javascript-para-o-Task-Manager-23d6ac493b458030b544e9f1b6c53b1c"
          lesson={6}
        />,
      ],
    },
  ],
};

export const aula7: SectionProps = {
  subtitle: ["Aula 7", "Configurando o projeto final e filtrando os cards"],
  items: [
    {
      title: "Como filtrar os cards",
      children: ["Iremos aprender a filtrar os cards por usuário e tag"],
    },
    {
      title: "Como configurar o projeto final usando Vite",
      children: ["Vamos configurar o projeto final usando Vite com typescript"],
    },
    {
      title: "[ arquivos da aula ]",
      children: [<NotionLink href="" lesson={7} soon />],
    },
  ],
};

export const aula8: SectionProps = {
  subtitle: ["Aula 8", "Trabalho Final"],
  items: [
    {
      title: "Aula reservada para o trabalho.",
      children: [
        "Os grupos devem se reunir para trabalhar no projeto final. Esse é o momento de tirar dúvidas!",
      ],
    },
  ],
};

export const aula9: SectionProps = {
  subtitle: ["Aula 9", "Avaliação por Rubrica"],
  items: [
    {
      title: "Auto Avaliação",
      children: [
        "Você precisa fazer a auto avaliação no painél do aluno na ADA",
      ],
    },
    {
      title: "Quiz",
      children: ["Vamos nos diverti com um quiz para avaliar o que aprendemos"],
    },
    {
      title: "Sua participação é muito importante",
      children: [
        "Eu vou avaliar sua participação, então espero que tenha enviado feedbacks, perguntas e comentários lá no formulário",
      ],
    },
  ],
};
