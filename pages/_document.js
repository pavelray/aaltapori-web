import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+Da+2&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0&display=swap"
          />
          <meta property="og:site_name" content="nextjsconf-pics.vercel.app" />
          <meta
            property="og:description"
            content="Experience the comfort of a home away from home at our charming homestay located in the heart of Jayanti, West Bengal. Enjoy modern amenities, personalized service, and easy access to popular attractions. Book now!"
          />
          <meta
            property="og:title"
            content="Aaltapori | Cozy Homestay in the Heart of Jayanti"
          />
          <meta name="twitter:card" content="homestay_at_jayanti" />
          <meta
            name="twitter:title"
            content="Aaltapori | Cozy Homestay in the Heart of Jayanti "
          />
          <meta
            name="twitter:description"
            content="Experience the comfort of a home away from home at our charming homestay located in the heart of Jayanti, West Bengal. Enjoy modern amenities, personalized service, and easy access to popular attractions. Book now!"
          />
          <meta name="robots" content="index, follow" />
          <meta name="revisit-after" content="7 days" />
          <meta name="author" content="#Ray, www.pavelray.in" />
          <meta name="language" content="EN" />
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
