import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SearchModal from '../components/SearchModal';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, {useState} from "react";
import SearchShortcutKeys from "../components/SearchShortcutKeys";
import CodeBlock from "@theme/CodeBlock";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={clsx('hero', styles.heroBanner)}>

        <section className={"container"}>
          <div className={"row"}>
            <div className={"col col--6 flex align-items-center overflow-auto"}>
              <img className={"unitary-shield ml-auto"} width={"253"} height={"315"} src="img/unitary-shield.svg" alt="Unitary shield"/>
            </div>
            <div className={"col col--6 padding--lg"}>
              <figure>
                <img width={"214"} height={"57"} src="img/unitary-gradient-logo.svg" alt="Unitary shield"/>
              </figure>
              <h1 className={"headline-2 hero__title"}>Evidence-Driven testing framework</h1>
              <h2 className={"text-base font-normal text-warning"}>A lightning-fast <strong>PHP testing framework</strong> by MaplePHP</h2>

              <div className={"flex column-gap-sm"}>
                <a className={"button bg-primary"} href="#">Get started</a>
                <a className={"button bg-secondary"} href="#">Features</a>
                <a className={"button bg-secondary"} href="#">Why Unitary</a>
                <a className={"button bg-secondary"} href="#">Github</a>
              </div>

            </div>
          </div>
        </section>
      </header>


      <SearchModal isOpen={open} onClose={() => setOpen(false)}/>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader/>
      <main>

        <section className={"container box-text"}>
          <div className={"row reverse"}>
            <div className={"col col--6 flex align-items-center bg-code-block overflow-auto"}>
              <CodeBlock language="php">
                {`group("About API page", function(TestCase $case) {

    $response = $this->get("/about");

    // Validate that the request was successful
    $case->validate($response->getStatusCode(), function(Expect $expect) {
         $expect->isHttpSuccess();
     });

    // Validate that the response returns valid JSON
    $case->validate($response->getBody()->getContents(), function(Expect $expect) {
         $expect->isJson();
         $expect->hasJsonValueAt("data.slug", "about");
         
    })->describe("Check json response");
});

`}
              </CodeBlock>
            </div>
            <div className={"col col--6"}>
              <Heading as="h2">Validation-First Testing</Heading>
              <p>Unitary is a modern PHP testing framework that reimagines what unit testing can be — simple, intuitive, and enjoyable. It feels natural and obvious, giving you powerful validation tools without forcing you to over-describe or over-structure your tests. With over 100 built-in validations, the ability to mix unit and integration-style testing, and built-in mocking capabilities, Unitary lets you test real-world behavior, from isolated logic to complex interactions and all within one consistent framework.</p>
              <a className={"c-button"} href={"/Unitary/docs/getting-started"}>Get started</a>
            </div>
          </div>
        </section>
        <section className={"container box-text"}>
          <div className={"row"}>
            <div className={"col col--6 flex align-items-center bg-code-block overflow-auto"}>
              <CodeBlock language="php">
                {`group("Example API Request", function(TestCase $case) {
                  
  $case->describe("Equal check")
       ->assert(1 === 2, "Strict equal check failed");
});
`}
              </CodeBlock>
            </div>
            <div className={"col col--6"}>
              <Heading as="h2">Custom validation</Heading>
              <p>
                You do not need to rely on the built-in validation methods. With Unitary, you can create your own
                custom validation or methods and use them in your tests very easily.
                Assert are not just a simple way to validate data but Unitary actually also handles them so that
                if test fails it will show you what have failed so assert is recommended to use on custom validations.
              </p>
              <a className={"c-button"} href={"/Unitary/docs/unit-testing#assertions"}>Read more</a>
            </div>
          </div>
        </section>
        <section className={"container box-text"}>
          <div className={"row reverse"}>
            <div className={"col col--6 flex align-items-center bg-code-block overflow-auto"}>
              <CodeBlock language="php">
                {`group("Mocking is now fun", function(TestCase $case) {

    // Mocked!
    $stream = $case->mock(Stream::class);
    
    // Works! (Passed a valid mocked instance of Stream)
    $response = new Response($stream);
    $content = $response->getBody()->getContents();    

    $case->validate($content, function(Expect $valid) {
        $valid->hasResponse();
    });
});
`}
              </CodeBlock>
            </div>
            <div className={"col col--6"}>
              <Heading as="h2">Mocking is Purely Magical</Heading>
              <p><strong>Mocking should never feel like a necessary evil. With Unitary, it doesn’t.
                It feels like a superpower.</strong></p>
              <p>
                Mocking in PHP has never felt this smooth. With Unitary, you can mock classes in a single line, control
                methods with fluent syntax, and get intelligent defaults that just work. No boilerplate. No config hell.
                Just clean, expressive, powerful testing that makes you wonder how you ever did it the old way.
              </p>
              <a className={"c-button"} href={"/Unitary/docs/Mocker/mocker-intro"}>Read more</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
