import type { PropsWithChildren } from "react";

export const Badge = ({ children }: PropsWithChildren) => {
  return (
    <span className="inline-flex items-center rounded-md border border-ada-primary text-white  px-2 py-1 text-xs font-medium ring-1 ring-red-600/10 ring-inset">
      {children}
    </span>
  );
};
