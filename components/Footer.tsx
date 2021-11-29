import { TFunction } from 'next-i18next';
import Image from 'next/image';

import LanguageLink, { ILanguageLink } from './LanguageLink';

const languageLinks: ILanguageLink[] = [
  {
    id: 'en',
    href: '/',
    locale: 'en',
    label: 'English'
  },
  {
    id: 'de',
    href: '/',
    locale: 'de',
    label: 'Deutsch'
  },
  {
    id: 'es',
    href: '/',
    locale: 'es',
    label: 'Español'
  },
  {
    id: 'it',
    href: '/',
    locale: 'it',
    label: 'Italiano'
  },
  {
    id: 'nl',
    href: '/',
    locale: 'nl',
    label: 'Nederlands'
  },
  {
    id: 'fr',
    href: '/',
    locale: 'fr',
    label: 'Français'
  }
];

const Footer: React.FC<{ t: TFunction }> = ({ t }) => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__logo">
          <Image src="/aon-logo.svg" alt="Aon Logo" width={60} height={23} />

          <div>
            <span>&copy;{new Date().getFullYear()}</span>
            <span>{t('copyright')}</span>
          </div>
        </div>

        <div className="footer__language-links">
          {languageLinks.map(link => {
            return (
              <LanguageLink
                id={link.id}
                href={link.href}
                locale={link.locale}
                label={link.label}
              ></LanguageLink>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
