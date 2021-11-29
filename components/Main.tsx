import { TFunction } from 'next-i18next';
import Image from 'next/image';

const Main: React.FC<{ t: TFunction }> = ({ t }) => {
  return (
    <main>
      <div>
        <Image src="/aon-logo.svg" alt="Aon Logo" width={60} height={23} />
        <h1>{t('pleaseUpdate')}</h1>
      </div>

      <h4>{t('pleaseUpdateLongVersion')}</h4>

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
  );
};

export default Main;
