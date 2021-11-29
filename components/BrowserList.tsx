import BrowserCard, { IBrowserCard } from './BrowserCard';

const browsers: ReadonlyArray<IBrowserCard> = [
  {
    id: 'chrome',
    href: 'https://www.google.com/chrome/',
    imgSrc: '/chrome-logo.svg',
    imgAlt: 'Chrome Logo',
    label: 'Google Chrome'
  },
  {
    id: 'firefox',
    href: 'https://www.mozilla.org/firefox/new/',
    imgSrc: '/firefox-logo.svg',
    imgAlt: 'Firefox Logo',
    label: 'Mozilla Firefox'
  },
  {
    id: 'edge',
    href: 'https://www.microsoft.com/edge',
    imgSrc: '/edge-logo.svg',
    imgAlt: 'Microsoft Edge Logo',
    label: 'Microsoft Edge'
  }
];

const BrowserList: React.FC = () => {
  return (
    <div className="browser-list">
      {browsers.map(browser => {
        return (
          <BrowserCard
            key={browser.id}
            href={browser.href}
            imgSrc={browser.imgSrc}
            imgAlt={browser.imgAlt}
            label={browser.label}
          />
        );
      })}
    </div>
  );
};

export default BrowserList;
