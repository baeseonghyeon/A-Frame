import cb from 'classnames/bind';
import Head from 'next/head';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.scss';

const cn = cb.bind(styles);

const Layout = (props) => {
  const { children, title } = props;

  return (
    <>
      <Head>
        <title>
          A-Frame Tutorial
          {title && ` | ${title}`}
        </title>
      </Head>
      <div className={cn('container')}>
        <Header />
        <div className={cn('body')}>
          <h2 className={cn('page-title', 'page-title-primary')}>{title}</h2>
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
