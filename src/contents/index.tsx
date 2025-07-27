import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import type { SectionProps } from "../ui/Sections";

export const intro: SectionProps = {
  active: true,
  title: "Intro",
  subtitle: "O que iremos aprender?",
  items: [
    {
      title: "Ter o DOM",
      children: [
        "Manipular o DOM de uma página HTML usando diferentes tipos de seletores",
        "Adicionar e remover elementos HTML",
        "Usar eventos para interagir com o usuário",
        "Adição e remoção de classes e estilização",
      ],
    },
    {
      title: "Usar o LocalStorage e SessionStorage",
      children: [
        "Salvar e recuperar dados do LocalStorage",
        "Salvar e recuperar dados do SessionStorage",
      ],
    },
    {
      title: "Usar APIs externas e consumir dados",
      children: [
        "Consumir dados de uma API externa",
        "Integrar os dados consumidos com o DOM",
      ],
    },
    {
      title: "Entender a natureza assíncrona do Javascript",
      children: ["Entender callbacks, promises e async/await"],
    },
  ],
};

export const instructor: SectionProps = {
  active: true,
  title: "Instrutor",
  subtitle: "Palmer Silva de Oliveira",
  items: [
    {
      title: (
        <span className="flex gap-1">
          Software Engineer no{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={40}
            height={23}
            viewBox="0 0 60 33"
          >
            <g fill="#EA1D2C" fillRule="evenodd">
              {" "}
              <path d="M.12 18.792h4.53L7.2 5.806H2.67zM3.06 3.758h4.53L8.34.031H3.78zM6.45 22.458h4.53l2.76-14.055h3.3l.51-2.597h-3.33l.12-.612c.21-1.1.57-2.383 2.28-2.383 1.02 0 1.98.122 2.94.52l.51-2.72c-1.02-.397-2.16-.58-3.27-.58-3.66 0-6.15 2.26-7.08 5.775H8.13l-.48 2.597h1.56L6.45 22.458z" />{" "}
              <path d="M20.85 19.097c5.37 0 9.09-5.072 9.09-9.228 0-3.025-2.76-4.338-5.37-4.338-5.88 0-9.09 5.469-9.09 9.227 0 2.995 2.76 4.34 5.37 4.34M35.16 19.097c5.37 0 9.09-5.072 9.09-9.228 0-3.025-2.76-4.338-5.37-4.338-5.88 0-9.09 5.469-9.09 9.227 0 2.995 2.79 4.34 5.37 4.34M51.63 18.792h4.5L59.88.03h-4.53l-1.2 5.775c-.6-.123-1.2-.214-1.83-.214-4.44 0-8.49 5.866-8.49 10.052 0 1.712 1.08 3.423 2.91 3.423 2.61 0 4.41-1.314 5.16-2.567h.27l-.54 2.292zM37.65 28.57c-3.33 2.933-7.77 4.43-12.57 4.124-6.09-.397-10.29-5.286-11.16-10.236h.3c1.38 3.178 4.71 6.08 8.88 6.57 4.08.458 9.09-1.436 11.82-4.186l-3.09-2.414 9.15.03L39 32.511l-1.35-3.942z" />{" "}
            </g>{" "}
          </svg>
        </span>
      ),
      children: ["Lá eu pinto botões e faço eles funcionarem 😅"],
    },
    {
      title: "Bacharel em Ciência da Computação",
      children: ["Comecei na Ulbra em 2006 e terminei em 2019 🫠"],
    },
    {
      title: "Pós-Graduação em Sistemas Distribuídos",
      children: [
        <span>
          Na PUC Minas, dessa vez comecei em 2023 e terminei em 2024 📚
        </span>,
        <span>
          Já mexi com photoshop, mongodb, mysql, postgres, nodejs, react, vue,
          angular, <span className="text-red-500">infernojs</span>,{" "}
          <span className="text-purple-500">moonjs</span>, jquery, html, css,
          sass, less, bootstrap, tailwind, materialize, bulma, foundation,
          etc... webpack, gulp, grunt, babel, typescript, PHP, aaaaaaahhhhhhh
          ... e <span className="text-yellow-600">javascript</span> 😅
        </span>,
        "Sou especialista em tudo isso? NÃO",
      ],
    },
    {
      title: "Links",
      children: [
        <span>
          <Button to="https://www.linkedin.com/in/palmer-oliveira/">
            Linkedin
          </Button>
        </span>,
        <span>
          <Button to="https://github.com/expalmer">Github</Button>
        </span>,
        <span>
          <Badge>expalmer@gmail.com</Badge>
        </span>,
      ],
    },
  ],
};

export const combinados: SectionProps = {
  active: true,
  title: "Combinados",
  subtitle: "Contratinho nada escrito em pedra",
  items: [
    {
      title: <span>Início 19h/19h05 🚀</span>,
      children: [
        "Para dar tempo de todo mundo chegar",
        "Antes disso, quem quiser falar sobre carreira, vida, etc... fica a vontade",
      ],
    },
    {
      title: <span>Intervalo 15 min 🕰️</span>,
      children: ["Tome água, se alimente bem e vá ao banheiro"],
    },
    {
      title: <span>Conversem comigo 🗣️</span>,
      children: ["Pergunte, comente e até critique... mas participe"],
    },
    {
      title: <span>Foco 👀</span>,
      children: ["Fique atento, tudo é muito importante"],
    },
    {
      title: <span>Feedback 🔂</span>,
      children: [
        "Está lento? está rápido? não entendeu?",
        "Lembra que pode sempre chamar anonimamente pelo formulário",
      ],
    },
    {
      title: <span>Colaboração 🧑🏿‍🤝‍🧑🏻</span>,
      children: ["Compartilhe, peça ajuda e ajude o colega"],
    },
    {
      title: <span>Fique com a câmera ligada 🎥</span>,
      children: [
        "Mas claro... sempre que possível. Pois isso melhora nossa experiência em grupo",
      ],
    },
  ],
};
