import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Header />
      <Main t={t} />
      <Footer t={t} />
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
