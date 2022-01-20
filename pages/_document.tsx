import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pl">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Najlepsza aplikacja szkolna dla uczniów do poznawania innych osób, komunikacji i dbania o siebie!" />
          <meta property="og:title" content="Schoola - leczymy szkolnictwo" />
          <meta
            property="og:description"
            content="Schoola powstała z myślą o uczniach. Umożliwia zbudowanie zaangażowanej społeczności i zżycie się uczniów ze szkołą. To wszystko sprawia, że coraz chętniej będziesz chodził do szkoły!"
          />
          <meta property="og:image:alt" content="Schoola's image" />
          <meta property="og:locale" content="pl_PL" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:url" content="https://www.schoola.pl/" />
          <link rel="canonical" href="https://www.schoola.pl/" />
          <meta name="theme-color" content="#55ab67" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="favicon.png" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-YSBMD4QED3"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YSBMD4QED3');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
