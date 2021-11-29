import Link from 'next/link';

export interface ILanguageLink {
  readonly id?: string;
  readonly href: string;
  readonly locale: string;
  readonly label: string;
}

const LanguageLink: React.FC<ILanguageLink> = ({ href, locale, label }) => {
  return (
    <Link href={href} locale={locale}>
      <a>{label}</a>
    </Link>
  );
};

export default LanguageLink;
