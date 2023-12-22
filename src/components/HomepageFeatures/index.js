import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Description',
    Svg: require('@site/static/img/undraw_documentation.svg').default,
    description: (
      <>
        A place to store technical documentation for Silentmode Engineering team.
      </>
    ),
  },
  {
    title: 'Empowering Enterprises',
    Svg: require('@site/static/img/undraw_business.svg').default,
    description: (
      <>
        Futureproofing businesses, enabling innovations
      </>
    ),
  },
  {
    title: 'Holistic Products & Services',
    Svg: require('@site/static/img/undraw_engineering.svg').default,
    description: (
      <>
       Builders of tech innovations for retailers to streamline business operations
      </>
    ),
  },
];

function Feature({Svg, title, description,second}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
