import Head from 'next/head';

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
