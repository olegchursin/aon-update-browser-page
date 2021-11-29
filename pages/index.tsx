import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

import type { NextPage } from 'next';

type UUIElement = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'uui-global-variables-theme': UUIElement;
      'uui-default-theme': UUIElement;
      'uui-inverse-theme': UUIElement;
      'uui-base-theme': UUIElement;
      'uui-card': UUIElement;
    }
  }
}

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <div className="app">
      <Header />
      <Main t={t} />
      <Footer t={t} />

      <script
        type="module"
        src="https://assets.aoncyberplatform.com/uui/0.21.0/uui.js"
      ></script>
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
