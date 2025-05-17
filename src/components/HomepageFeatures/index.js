import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comprehensive Validation',
    image: require('@site/static/img/puff-01.png').default,
    description: (
      <>
        MaplePHP - Validation covers everything from basic input checks like email, phone numbers, and zip codes to advanced validations for dates, domains, DNS, and HTTP status codes. One library — endless possibilities.
      </>
    ),
  },
  {
    title: 'Simple and Powerful',
    image: require('@site/static/img/puff-02.png').default,
    description: (
      <>
        Designed for both simplicity and power, MaplePHP - Validation uses a clean, intuitive syntax to make validation tasks effortless. Whether you prefer instance-based or static methods, it fits your workflow perfectly.
      </>
    ),
  },
  {
    title: 'User-friendly and Reliable',
    image: require('@site/static/img/puff-03.png').default,
    description: (
      <>
        Built for performance without unnecessary overhead, MaplePHP - Validation ensures your data is accurate and your code stays clean. With just one installation, you gain access to a full suite of professional-grade validators.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
