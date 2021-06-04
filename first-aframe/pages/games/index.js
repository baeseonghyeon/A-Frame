import cb from 'classnames/bind';
import Link from 'next/link';
import Layout from '../../components/Layout';
import styles from './Games.module.scss';

const cn = cb.bind(styles);

const Games = (props) => {
  const { data } = props;

  return (
    <Layout title="GAMES">
      <h2>STAGE LIST</h2>

      <div className={cn('row')}>
        {data &&
          data.map((game) => {
            return (
              <Link
                href="/game/[detail]"
                as={`/game/${game.id}`}
                key={`${game.id}-${game.title}`}
              >
                <div className={cn('stage-item__container', 'col-md-6')}>
                  <div className={cn('stage-item__wrapper')}>{game.title}</div>
                </div>
              </Link>
            );
          })}
      </div>
    </Layout>
  );
};

export default Games;
