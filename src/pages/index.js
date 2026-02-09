import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import SearchModal from '../components/SearchModal';
import styles from './index.module.css';
import React, {useState} from "react";

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
              <a className={"button bg-primary"} href="/Unitary/docs/get-started">Get started</a>
              <a className={"button bg-secondary"} href="#top-features">Features</a>
              <a className={"button bg-secondary"} href="/Unitary/why-unitary">Why Unitary</a>
              <a className={"button bg-secondary"} href="https://github.com/MaplePHP/unitary" target={"_blank"}>Github</a>
            </div>
          </article>
        </div>
      </div>
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

        <div className={"article pt-0 pb-40"}>
          <article className={"container box-text"}>
            <div className={"row"}>
              <figure className={"col col--6 md:p-0 flex align-items-center overflow-auto"}>
                <img src="img/index/unitary-cli-showcase-passed.png" alt="Unitary shield"/>
              </figure>
              <section className={"col col--6"}>
                <h2 className={"headline-3"}>Next-Gen PHP Testing Framework</h2>
                <p>Unitary is a blazing-fast, developer-first testing framework for PHP, built from the ground up with zero third-party dependencies and a highly optimized core, not just a wrapper around legacy tools. It’s simple to get started, lightning-fast to run, and powerful enough to test everything from units to mocks.</p>
              </section>
            </div>
          </article>

          <article className={"container box-text"}>
            <div className={"row reverse"}>
              <figure className={"col col--6 md:p-0 flex align-items-center overflow-auto"}>
                <img src="img/index/unitary-cli-showcase-failed.png" alt="Unitary shield"/>
              </figure>
              <section className={"col col--6"}>
                <h2 className={"headline-3"}>Developer-Friendly Testing</h2>
                <p>Unitary is built to be easy to use without ever feeling limited. You can start writing meaningful tests immediately, no setup, no configuration, no hidden rules. Mocking, expectations and controlled execution are built in and work naturally together, so tests stay readable and intentional. Failures produce clear, actionable evidence instead of noise. As your test suite grows, Unitary remains predictable and comfortable to work with, letting you focus on your code instead of the testing framework.</p>
              </section>
            </div>
          </article>

        </div>

        <article className={"article bg-surface"}>
          <div className={"wrapper w-base"}>
            <h2 id={"top-features"} className={"headline-2 mb-30"}>Top features</h2>
            <ul className={"columns-3 custom md:columns-2 sm:columns-2"}>
              <li>Evidence-Driven testing</li>
              <li>Standalone test runner (no legacy dependencies)</li>
              <li>Deterministic sequential execution</li>
              <li>Zero boilerplate setup</li>
              <li>Lightning-fast execution with low overhead</li>
              <li>Built-in mock engine</li>
              <li>Per-group strict-halt assertions</li>
              <li>Colorized, structured CLI output</li>
              <li>Configurable test paths</li>
              <li>Works with any PHP project</li>
              <li>Input-bound validations</li>
              <li>Built-in Dependency & Supply-Chain Inspector</li>
              <li>Clean, minimal DSL</li>
              <li>Optional descriptions</li>
              <li>Detailed failure messages</li>
              <li>Central config file support</li>
              <li>Identical execution model for local and CI runs</li>
              <li>Full Test Isolation</li>
              <li>Built-in Vulnerability Scanner</li>
              <li>Human-readable errors with input visibility</li>
              <li>Automatic test discovery</li>
              <li>Run individual files or directories</li>
              <li>JUnit XML output</li>
              <li>Debug mode</li>
            </ul>
          </div>
        </article>
      </main>
    </Layout>
  );
}
