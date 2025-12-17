import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchModal from '../components/SearchModal';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, {useState} from "react";
import CodeBlock from "@theme/CodeBlock";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={clsx('hero', styles.heroBanner)}>

        <div className={"wrapper w-md flex column-gap-xxl"}>
          <figure className={"unitary-shield"}>
            <img width={"253"} height={"315"} src="img/unitary-shield.svg" alt="Unitary shield"/>
          </figure>
          <article className={""}>
            <figure className={"unitary-gradient-logo mb-10"}>
              <img className={"block"} width={"214"} height={"57"} src="img/unitary-gradient-logo.svg" alt="Unitary shield"/>
            </figure>
            <div className={"mb-30"}>
              <h1 className={"headline-2 hero__title mb-10"}>Evidence-Driven testing framework</h1>
              <h2 className={"text-base font-normal text-warning pb-5 mb-0"}>A lightning-fast <strong>PHP testing framework</strong> by MaplePHP</h2>
            </div>
            <div className={"flex flex-wrap gap-sm"}>
              <a className={"button bg-primary"} href="#">Get started</a>
              <a className={"button bg-secondary"} href="#">Features</a>
              <a className={"button bg-secondary"} href="#">Why Unitary</a>
              <a className={"button bg-secondary"} href="#">Github</a>
            </div>
          </article>
        </div>
      </div>


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
          <div className={"row"}>
            <div className={"col col--6 md:p-0 flex align-items-center bg-code-block overflow-auto"}>
              <img src="img/index/unitary-cli-showcase-passed.png" alt="Unitary shield"/>
            </div>
            <div className={"col col--6"}>
              <h2 className={"headline-3"}>User-friendly CLI</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque  mattis rhoncus euismod. Vivamus faucibus dictum neque at faucibus.  Integer egestas pellentesque ligula, et tristique nisl ultricies at.  Vestibulum scelerisque venenatis mi id auctor. Nulla facilisi.  Vestibulum ante ipsum primis in.</p>
            </div>
          </div>
        </section>

        <section className={"container box-text"}>
          <div className={"row reverse"}>
            <div className={"col col--6 md:p-0 flex align-items-center bg-code-block overflow-auto"}>
              <img src="img/index/unitary-cli-showcase-passed.png" alt="Unitary shield"/>
            </div>
            <div className={"col col--6"}>
              <h2 className={"headline-3"}>User-friendly CLI</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque  mattis rhoncus euismod. Vivamus faucibus dictum neque at faucibus.  Integer egestas pellentesque ligula, et tristique nisl ultricies at.  Vestibulum scelerisque venenatis mi id auctor. Nulla facilisi.  Vestibulum ante ipsum primis in.</p>
            </div>
          </div>
        </section>
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
              <a className={"button bg-primary"} href={"/Unitary/docs/getting-started"}>Get started</a>
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
              <a className={"button bg-primary"} href={"/Unitary/docs/unit-testing#assertions"}>Read more</a>
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
              <a className={"button bg-primary"} href={"/Unitary/docs/Mocker/mocker-intro"}>Read more</a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
