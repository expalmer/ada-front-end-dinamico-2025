import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <header className="pt-3 top-0 left-0 sticky">
      <div className="m-auto max-w-4xl px-8 flex flex-col gap-10">
        <nav
          className="relative flex flex-col gap-6 border border-gray-800 rounded-full items-center p-4 bg-black"
          id="js-nav"
        >
          <Link to="/" className="absolute left-2 top-1/2 -translate-y-1/2">
            <h1 className="text-ada-primary flex gap-2 items-end">
              <img src="/ada.svg" alt="Vite Logo" className="w-12" />
            </h1>
          </Link>
          <ul
            className="flex gap-4 justify-center items-center flex-wrap px-10"
            id="nav"
          >
            <li>
              <Link to="/" className="nav">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/aulas" className="nav">
                Aulas
              </Link>
            </li>
            <li>
              <Link to="/trabalho" className="nav">
                Trabalho
              </Link>
            </li>
          </ul>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdg221Qsa9ufSCbcf4EAmdhg5g3HV4ysXfP9YvciPcb62oVow/viewform?usp=dialog"
            target="_blank"
            title="Formulário de Dúvidas"
            className="text-white font-semibold hover:text-gray-400 absolute right-2 top-1/2 -translate-y-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 9h8" />
              <path d="M8 13h6" />
              <path d="M14 18h-1l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
              <path d="M19 22v.01" />
              <path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
};
