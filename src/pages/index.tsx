import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import About from '../components/Sections/About';
import Hero from '../components/Sections/Hero';
import Page from '../components/Layout/Page';
import Footer from '../components/Sections/Footer';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <Header />
      <Hero />
      <About />
      <Footer />

    </Page>
  );
});

export default Home;
