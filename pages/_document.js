import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document{
    render(){
        return(
            <Html lang="ja" prefix="og:http://ogp.me/ns# fb:http://ogp.me/ns/fb# website:http://ogp.me/ns/website#">
                <Head>
                    <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
                        __html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-M6BMHD8');`,}}
                    />

                    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

                    <meta name="description" content="「あなたの力で世界を変えろ」Reviveは人材事業のプロフェッショナルとして、あなたの挑戦を全力でサポートします。" />
                    <meta property="og:locale" content="ja_JP" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="合同会社リバイブ(Revive.llc)|誰もが粋がる心躍る世界へ" />
                    <meta property="og:description" content="「あなたの力で世界を変えろ」Reviveは人材事業のプロフェッショナルとして、あなたの挑戦を全力でサポートします。" />
                    <meta property="og:url" content="index.html" />
                    <meta property="og:site_name" content="合同会社リバイブ(Revive.llc)|誰もが粋がる心躍る世界へ" />
                    <meta property="og:image" content="/common/OGP/jpg" />
                    <meta property="og:image:secure_url" content="/common/OGP/jpg" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:description" content="「あなたの力で世界を変えろ」Reviveは人材事業のプロフェッショナルとして、あなたの挑戦を全力でサポートします。" />
                    <meta name="twitter:title" content="合同会社リバイブ(Revive.llc)|誰もが粋がる心躍る世界へ" />
                    <meta name="twitter:image" content="/common/OGP/jpg" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"/>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
                    <link rel="manifest" href="/favicon/site.webmanifest"/>
                    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="msapplication-TileColor" content="#f5f6ff"/>
                    <meta name="theme-color" content="#f5f6ff"></meta>

                    <Script id="form" src="https://sdk.form.run/js/v2/formrun.js" async/>
                </Head>
                
                <body onClick="">
                    <Main/>
                    <NextScript/>
                    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M6BMHD8"
                    height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
                </body>
            </Html>
        );
    }
}
export default MyDocument;