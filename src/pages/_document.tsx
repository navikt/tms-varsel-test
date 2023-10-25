import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { Components, fetchDecoratorReact, Props } from '@navikt/nav-dekoratoren-moduler/ssr';
import { getDecoratorEnvironment } from "../lib/utils/environment.server";

const decoratorParams: Props = {
  env: getDecoratorEnvironment(),
  context: 'privatperson',
  chatbot: false,
  feedback: false,
  breadcrumbs: [
    { url: `https://www.intern.dev.nav.no/minside/`, title: "Min side" },
    { url: `https://www.intern.dev.nav.no/tms-varsel-test`, title: `Test av varsler` },
  ],
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
