import React from "react";
import CodeBlock from "@theme/CodeBlock";
import ReactMarkdown from "react-markdown"; // Use react-markdown

export default function DynamicSections({sections}) {
  const [sortedSections] = React.useState(sections);
  /*
  // Sort by name
  const sortedSections = React.useMemo(() => [...sections].sort((a, b) =>
      a.title.localeCompare(b.title)
  ));
   */

  const ArgumentComponent = ({ argData }) => (
    <>
      {argData.map((row) => (
        <div key={row.name} className="pre w-1/2">
          <h2 className="mb-0 headline-5">{row.name}</h2>
          <p className="mb-0 text-sm">{row.description}</p>
        </div>
      ))}
    </>
  );

  const extractParenthesesValues = (str) => {
    const matches = [];
    const regex = /\(([^()]*)\)/g;
    let match;

    while ((match = regex.exec(str)) !== null) {
      matches.push(match[1]);
    }

    return matches;
  }

  const CodeExample = ({ code, title }) => {
    const args = extractParenthesesValues(code);
    return `$case->expect(${args[0] ?? ""})
     ->${title}(${args[1] ?? ""})
     ->validate();`;
  }

  return (
    <div>
      <nav>
        <ul className={"column-list mb-2 column-gap"}>
          {sortedSections.map((section) => (
            <li key={section.title}>
              <a href={`#${section.title.toLowerCase().replace(/\s+/g, "-")}`}>
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sortedSections.map((section) => (
        <div className={"item pb-20 border-bottom"} key={section.title} id={section.title.toLowerCase().replace(/\s+/g, "-")}>
          <section className="mb-1">
            <h2 className={"headline-3"}>{section.title}</h2>
            <ReactMarkdown>{section.description}</ReactMarkdown>
          </section>
          {(section?.args && section.args.length > 0) && (
            <>
              <aside className="mb-1">
                <h3 className={"headline-5"}>Parameters</h3>
                <div className="flex flex-wrap column-gap">
                  <ArgumentComponent argData={section.args}></ArgumentComponent>
                </div>
              </aside>
            </>
          )}
          <aside className="mb-1">
            <h3 className={"headline-5"}>Example</h3>
            <CodeBlock language="php">{`${CodeExample(section)}`}</CodeBlock>
          </aside>
        </div>
      ))}
    </div>


  );
}
