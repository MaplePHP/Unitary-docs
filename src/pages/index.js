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
        <div className="container">
          <h1 className={"hero__title"}>{siteConfig.title}</h1>
          <p className="hero__subtitle"><strong>PHP Unitary</strong> is a <strong>user-friendly</strong> and robust unit testing <strong>framework</strong> designed to make writing and running tests for your PHP code easy. With an intuitive CLI interface that works on all platforms and robust validation options, Unitary makes it easy for you as a developer to ensure your code is reliable and functions as intended.</p>
          <div className={styles.buttons}>
            <button className={"inp-button inp-button--invert"} onClick={() => setOpen(true)}>
              <span>Search docs</span>
              <SearchShortcutKeys className={"ml-auto"}/>
            </button>
          </div>
        </div>
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
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={"container"}>
          <div className={"row"}>
            <div className={"col col--6 flex align-items-center bg-code-block overflow-auto"}>
              <CodeBlock language="php">
{`$unit->group("Has a about page", function(TestCase $case) {

    $response = $this->get("/about");
    $stausCode = $response->getStatusCode();
    
    $case->validate($stausCode, function(Expect $valid) {
        $valid->isHttpSuccess();
    });
});
`}
              </CodeBlock>
            </div>
            <div className={"col col--6 padding--xl"}>
              <Heading as="h2">Lorem ipsum dolor</Heading>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam incidunt inventore iste necessitatibus, quibusdam quos repellendus rerum vitae voluptate voluptatum. Aut consectetur deserunt dignissimos ducimus est expedita magni officiis possimus, provident quibusdam, quod rem repellendus saepe tenetur vel veniam voluptate. A animi beatae cupiditate debitis, dolorum eaque, eveniet ex expedita, explicabo fugiat illum iste molestias nemo quam reiciendis repudiandae unde.
              </p>
            </div>
          </div>
        </section>
        <section className={"container"}>
          <div className={"row"}>
            <div className={"col col--6 padding--xl"}>
              <Heading as="h2">Mocking is Purely Magical</Heading>
              <p><strong>Mocking should never feel like a necessary evil. With Unitary, it doesn’t.
                It feels like a superpower.</strong></p>
              <p>
                Mocking in PHP has never felt this smooth. With Unitary, you can mock classes in a single line, control methods with fluent syntax, and get intelligent defaults that just work. No boilerplate. No config hell. Just clean, expressive, powerful testing that makes you wonder how you ever did it the old way.
              </p>
              <a className={"c-button"} href={"/Unitary/docs/Mocker/mocker-intro"}>Read more</a>
            </div>
            <div className={"col col--6 flex align-items-center bg-code-block"}>
              <CodeBlock language="php">
                {`$unit->group("Mocking is now fun", function(TestCase $case) {

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
          </div>
        </section>
      </main>
    </Layout>
  );
}
