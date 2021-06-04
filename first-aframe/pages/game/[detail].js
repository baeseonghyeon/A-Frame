// import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getGameDetail } from '../../api/games';
import Layout from '../../components/Layout';
// import styles from './About.module.scss';

const Detail = () => {
  const router = useRouter();

  const [data, setData] = useState(null);

  useEffect(() => {
    if (router) {
      getGameDetail(router.query.detail).then((response) => {
        if (typeof response.message === 'string') {
          console.log(response.message);
        } else {
          setData(response);
        }
      });
    }
  }, [router]);

  if (data) {
    return (
      <Layout title={data.title}>
        {data && (
          <div>
            <a-scene physics="debug: true">
              <a-assets>
                <span style={{ display: 'none' }}>
                  <img
                    id="groundTexture"
                    src="https://cdn.aframe.io/a-painter/images/floor.jpg"
                    alt="groundTexture"
                  />
                </span>
              </a-assets>

              <a-entity camera look-controls />

              <a-plane static-body />

              <a-box
                static-body
                position="0 0.5 -5"
                width="3"
                height="1"
                depth="1"
              />

              <a-box
                dynamic-body
                position="5 0.5 0"
                width="1"
                height="1"
                depth="1"
              />

              <a-box
                dynamic-body
                position="5 5 0"
                width="20"
                height="10"
                depth="20"
                color="gray"
              />

              <a-plane
                rotation="-90 0 0"
                width="30"
                height="30"
                color="black"
              />
            </a-scene>
          </div>
        )}
      </Layout>
    );
  }
  return false;
};

export default Detail;
