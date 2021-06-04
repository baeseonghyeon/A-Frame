import Link from 'next/link';
import cb from 'classnames/bind';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';

const cn = cb.bind(styles);

const Header = () => {
  const router = useRouter();

  const navItems = [
    {
      path: '/main',
      name: 'MAIN',
      isIndex: true
    },
    {
      path: '/games',
      name: 'GAMES'
    }
  ];

  return (
    <div className={cn('container', 'flex-row', 'd-flex')}>
      {navItems.map((item) => {
        return (
          <Link href={item.path}>
            <a
              href={item.path}
              className={cn(
                'link__label',
                (item.isIndex
                  ? router.pathname === item.path || router.pathname === '/'
                  : router.pathname === item.path) && 'link__label-active'
              )}
            >
              {item.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Header;
