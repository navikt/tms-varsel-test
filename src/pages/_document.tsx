import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { Components, fetchDecoratorReact, Props } from '@navikt/nav-dekoratoren-moduler/ssr';

const decoratorParams: Props = {
  env: 'dev',
  context: 'privatperson',
  chatbot: false,
  feedback: false,
};

class _Document extends Document<{ decorator: Components }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const decorator = await fetchDecoratorReact(decoratorParams);
    return { ...initialProps, decorator };
  }

  render() {
    const { Styles, Scripts, Header, Footer } = this.props.decorator;
    return (
      <Html>
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <Styles />
        <Scripts />

        <body>
          <Header />
          <div id="app" className="app">
            <Main />
          </div>
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
