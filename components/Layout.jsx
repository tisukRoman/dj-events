import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

export default function Layout(props) {
  const { title, description, keywords, children } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <div className={styles.container}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </div>
    </Head>
  );
}

Layout.defaultProps = {
  title: 'DJ EVENTS 💥',
  description: 'Find the events of your dream',
  keywords: 'music, dj, event, party',
};
