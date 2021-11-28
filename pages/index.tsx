import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

import type { NextPage } from 'next';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'uui-global-variables-theme': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'uui-default-theme': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'uui-inverse-theme': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      'uui-base-theme': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <Main t={t} />
      <Footer t={t} />

      <script
        type="module"
        src="https://assets.aoncyberplatform.com/uui/0.21.0/uui.js"
      ></script>
    </>
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
