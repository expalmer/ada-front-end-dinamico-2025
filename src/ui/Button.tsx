import type { JSX } from "react";

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  icon?: JSX.Element;
};

export const Button = ({ icon, children, to }: ButtonProps) => {
  return (
    <button
      type="button"
      className="inline-flex items-center justify-center p-0.5 mb-0.5 me-0.5 cursor-pointer overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-ada-primary to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200"
      onClick={() => {
        if (to) {
          window.open(to, "_blank");
        }
      }}
    >
      <span className="px-5 py-1.5 transition-all ease-in duration-75 bg-black rounded-md hover:bg-transparent flex items-center gap-1">
        {icon && <span>{icon}</span>}
        {children}
      </span>
    </button>
  );
};
