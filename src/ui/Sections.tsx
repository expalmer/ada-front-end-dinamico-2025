import type { PropsWithChildren } from "react";

export type SectionItem = {
  title: React.ReactNode;
  children: React.ReactNode[];
};

export type SectionProps = {
  active?: boolean;
  title?: string;
  subtitle: string | [string, string];
  items: SectionItem[];
};

export const Section = ({
  title,
  subtitle,
  items,
  active = false,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section className={`flex flex-col gap-8${!active ? " opacity-50" : ""}`}>
      {title && (
        <h2 className="text-white text-4xl font-semibold text-center">
          {title}
        </h2>
      )}
      <div className="flex flex-col gap-10">
        <div className="p-8 border border-gray-700/40 bg-gray-700/30 text-white rounded-3xl">
          <h3 className="text-2xl font-bold uppercase">
            {Array.isArray(subtitle) ? (
              <>
                <span className="w-4 min-h-1 bg-gradient-to-r from-blue-500 to-blue-200 inline-flex "></span>
                <span className="text-ada-primary ">{subtitle[0]}</span>
                <span className=" text-gray-600"> // </span>
                <span className="text-lg">{subtitle[1]}</span>
              </>
            ) : (
              subtitle
            )}
          </h3>
          <ul>
            {items.map((item) => (
              <li
                className="mt-6 pt-6 border-t border-t-gray-800 flex flex-col gap-2 sm:flex-row sm:gap-6"
                key={item.title?.toString()}
              >
                <h4 className="flex-1 font-semibold text-lg">{item.title}</h4>
                <div className="flex-1 text-sm text-gray-500">
                  <ul className="flex flex-col gap-2 list-disc pl-3 sm:pl-0">
                    {item.children.map((child, index) => (
                      <li key={index}>{child}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export const Sections = ({ sections }: { sections: SectionProps[] }) => {
  return (
    <>
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          subtitle={section.subtitle}
          items={section.items}
          active={section.active}
        />
      ))}
    </>
  );
};
