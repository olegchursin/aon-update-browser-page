import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className={styles.container}>
      <Head>
        <title>Aon | Update Browser</title>
        <meta name="description" content="Aon's Update Browser Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image src="/aon-logo.svg" alt="Aon Logo" width={60} height={23} />
          <h1>{t('pleaseUpdate')}</h1>
        </div>

        <div>
          <h4>{t('pleaseUpdateLongVersion')}</h4>
        </div>

        <div>
          <article>
            <a
              href="https://www.google.com/chrome/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/chrome-logo.svg"
                alt="Chrome Logo"
                width={50}
                height={50}
              />
              Google Chrome
            </a>
          </article>
          <article>
            <a
              href="https://www.mozilla.org/firefox/new/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/firefox-logo.svg"
                alt="Firefox Logo"
                width={50}
                height={50}
              />
              Mozilla Firefox
            </a>
          </article>
          <article>
            <a
              href="https://www.microsoft.com/edge"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/edge-logo.svg"
                alt="Microsoft Edge Logo"
                width={50}
                height={50}
              />
              Microsoft Edge
            </a>
          </article>
        </div>

        <div>
          <h3>{t('threeReasons')}</h3>
          <p>
            <strong>{t('security')}</strong>
            {t('securityDescription')}
          </p>

          <p>
            <strong>{t('performance')}</strong>
            {t('performanceDescription')}
          </p>

          <p>
            <strong>{t('UX')}</strong>
            {t('UXDescription')}
          </p>
        </div>

        <div>
          <h3>{t('notAbleToUpdate')}</h3>
          <p>{t('notAbletoUpdateDescription')}</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <span>&copy;{new Date().getFullYear()}</span>
          <span>{t('copyright')}</span>
        </p>

        <div>
          <Link href="/" locale={'de'}>
            <p className="link">De</p>
          </Link>

          <Link href="/" locale={'en'}>
            <p className="link">En</p>
          </Link>

          <Link href="/" locale={'it'}>
            <p className="link">It</p>
          </Link>

          <Link href="/" locale={'es'}>
            <p className="link">Es</p>
          </Link>

          <Link href="/" locale={'fr'}>
            <p className="link">Fr</p>
          </Link>

          <Link href="/" locale={'nl'}>
            <p className="link">Nl</p>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
      // Will be passed to the page component as props
    }
  };
}

export default Home;
