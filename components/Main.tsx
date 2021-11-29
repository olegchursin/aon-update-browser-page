import { TFunction } from 'next-i18next';

import BrowserList from './BrowserList';
import Navbar from './Navbar';

const Main: React.FC<{ t: TFunction }> = ({ t }) => {
  return (
    <div>
      <Navbar title={t('pleaseUpdate')} />

      <main>
        <div className="main__container">
          <div className="text">
            <h2>{t('pleaseUpdateLongVersion')}</h2>
          </div>

          <BrowserList />

          <div className="text content">
            <div>
              <h4>{t('threeReasons')}</h4>
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
              <h4>{t('notAbleToUpdate')}</h4>
              <p>{t('notAbletoUpdateDescription')}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
