import cb from 'classnames/bind';
import styles from './Footer.module.scss';

const cn = cb.bind(styles);

const Footer = () => {
  return <div className={cn('container')}>© 2021 A-Frame Tutorial</div>;
};

export default Footer;
