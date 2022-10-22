/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/*  CSS Style */}
          <link
            rel="stylesheet"
            href="assets/css/bootstrap.min.css"
            type="text/css"
          />
          {/*Animate Style */}
          <link
            rel="stylesheet"
            href="assets/css/animate.css"
            type="text/css"
          />
          {/*Custome Style */}
          <link rel="stylesheet" href="assets/css/style.css" type="text/css" />
          <link rel="stylesheet" href="assets/css/custom.css" type="text/css" />
          {/*OWL Carousel slider*/}
          <link
            rel="stylesheet"
            href="assets/css/owl.carousel.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="assets/css/magnific-popup.css"
            type="text/css"
          />
          {/* SWITCHER */}
          <link
            rel="stylesheet"
            id="switcher-css"
            type="text/css"
            href="assets/switcher/css/switcher.css"
            media="all"
          />
          <link
            rel="alternate stylesheet"
            type="text/css"
            href="assets/switcher/css/blue.css"
            title="blue"
            media="all"
            data-default-color="true"
          />
          <link
            rel="alternate stylesheet"
            type="text/css"
            href="assets/switcher/css/pink.css"
            title="pink"
            media="all"
          />
          <link
            rel="alternate stylesheet"
            type="text/css"
            href="assets/switcher/css/orange.css"
            title="orange"
            media="all"
          />
          <link
            rel="alternate stylesheet"
            type="text/css"
            href="assets/switcher/css/green.css"
            title="green"
            media="all"
          />
          <link
            rel="alternate stylesheet"
            type="text/css"
            href="assets/switcher/css/red.css"
            title="red"
            media="all"
          />
          <link
            rel="alternate stylesheet"
            type="text/css"
            href="assets/switcher/css/purple.css"
            title="purple"
            media="all"
          />
          {/*FontAwesome Font Style */}
          <link href="assets/css/font-awesome.min.css" rel="stylesheet" />
          {/* Fav and touch icons */}
          <link
            rel="shortcut icon"
            sizes="144x144"
            href="assets/images/favicon-icon/apple-touch-icon-144-precomposed.png"
          />
          <link
            rel="shortcut icon"
            sizes="72x72"
            href="assets/images/favicon-icon/apple-touch-icon-72-precomposed.png"
          />
          <link
            rel="shortcut icon"
            sizes="57x57"
            href="assets/images/favicon-icon/apple-touch-icon-57-precomposed.png"
          />
          <link
            rel="shortcut icon"
            sizes="24x24"
            href="assets/images/favicon-icon/favicon.png"
          />
          {/* Google-Font*/}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
            rel="stylesheet"
          />
        </Head>
        <body className="home">
          <Main />
          <NextScript />

          <script src="assets/js/jquery.min.js"></script>
          <script src="assets/js/bootstrap.min.js"></script>
          <script src="assets/js/interface.js"></script>

          <script src="assets/js/owl.carousel.min.js"></script>
          <script src="assets/js/isotope-docs.min.js"></script>
          <script src="assets/js/jquery.magnific-popup.min.js"></script>

          <script src="assets/switcher/js/switcher.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
