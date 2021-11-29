import Image from 'next/image';

export interface IBrowserCard {
  readonly id?: string;
  readonly href: string;
  readonly imgSrc: string;
  readonly imgAlt: string;
  readonly label: string;
}

const BrowserCard: React.FC<IBrowserCard> = ({
  href,
  imgSrc,
  imgAlt,
  label
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <uui-card>
        <div className="browser-card">
          <Image src={imgSrc} alt={imgAlt} width={50} height={50} />
          {label}
        </div>
      </uui-card>
    </a>
  );
};

export default BrowserCard;
