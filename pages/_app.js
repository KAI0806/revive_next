import '../styles/globals.css'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

function MyApp({ Component, pageProps, router }) {
  React.useEffect(() => {
    function hamburger(){
      document.getElementById('line1').classList.toggle('line_1');
      document.getElementById('line2').classList.toggle('line_2');
      document.getElementById('line3').classList.toggle('line_3');
      document.getElementById('nav').classList.toggle('in');
      };
      document.getElementById('hamburger').addEventListener('click',function(){
        hamburger();
      });
      document.getElementById('nav').addEventListener('click',function(){
        hamburger();
    });
  },[])
  
  return (
    <ChakraProvider>
      <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp
