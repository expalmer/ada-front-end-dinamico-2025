import SyntaxHighlighter from "react-syntax-highlighter";

export function code({ className, ...properties }: any) {
  const match = /language-(\w+)/.exec(className || "");
  return match ? (
    <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} />
  ) : (
    <code className={className} {...properties} />
  );
}

export const withCode = (Component: any) => {
  return (props: any) => {
    return <Component {...props} components={{ code }} />;
  };
};
