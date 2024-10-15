import Document, { Head, Html, Main, NextScript } from 'next/document';

class TheDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="es">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default TheDocument;
