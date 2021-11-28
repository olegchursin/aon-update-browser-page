import Head from 'next/head';

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

const Header: React.FC = () => (
  <Head>
    <title>Aon | Update Browser</title>
    <meta name="description" content="Aon's Update Browser Page" />
    <link rel="icon" href="/favicon.ico" />

    <uui-global-variables-theme></uui-global-variables-theme>
    <uui-default-theme></uui-default-theme>
    <uui-inverse-theme></uui-inverse-theme>
    <uui-base-theme></uui-base-theme>
  </Head>
);

export default Header;
