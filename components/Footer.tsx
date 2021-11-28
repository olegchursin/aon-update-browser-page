import { TFunction } from 'next-i18next';
import Link from 'next/link';

const Footer: React.FC<{ t: TFunction }> = ({ t }) => {
  return (
    <footer>
      <p>
        <span>&copy;{new Date().getFullYear()}</span>
        <span>{t('copyright')}</span>
      </p>

      <div>
        <Link href="/" locale={'de'}>
          <a>De</a>
        </Link>

        <Link href="/" locale={'en'}>
          <a>En</a>
        </Link>

        <Link href="/" locale={'it'}>
          <a>It</a>
        </Link>

        <Link href="/" locale={'es'}>
          <a>Es</a>
        </Link>

        <Link href="/" locale={'fr'}>
          <a>Fr</a>
        </Link>

        <Link href="/" locale={'nl'}>
          <a>Nl</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
