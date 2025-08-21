export const H1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className="text-5xl font-semibold text-center">
    <span className="active">{children}</span>
  </h1>
);

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-semibold text-center">{children}</h2>
);
