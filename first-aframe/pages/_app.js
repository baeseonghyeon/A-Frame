import Head from 'next/head';
import '../styles/globals.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import { getGames } from '../api/games';

const app = (props) => {
  const { Component } = props;

  const [games, setGames] = useState(null);

  useEffect(() => {
    getGames().then((response) => {
      if (typeof response.message === 'string') {
        alert(response.message);
      } else {
        setGames(response);
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener('deviceready', function () {
      // After the 'deviceready' event, Cordova is ready for you to render your A-Frame scene.
      document.getElementById('scene-root').innerHTML =
        document.getElementById('my-scene').innerHTML;
    });
  });

  const title = 'A-Frame Tutorial';

  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css"
          rel="stylesheet"
          type="text/css"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossOrigin="anonymous"
        />

        {/* A-Frame */}
        <meta
          // httpEquiv="Content-Security-Policy"
          content="
          default-src 
            'self' 
            data: 
            gap: 
            https://ssl.gstatic.com 
            'unsafe-eval' 
            https://cdn.aframe.io         <-- required
            https://dpdb.webvr.rocks      <-- required
            https://fonts.googleapis.com  <-- required
            ; 
          style-src 
            'self' 
            'unsafe-inline'
            ; 
          media-src *; 
          img-src 
            'self' 
            data:                         <-- required
            content:                      <-- required
            blob:                         <-- required
            ;
        "
        />

        <script src="https://aframe.io/releases/1.2.0/aframe.min.js" />
        <script src="https://unpkg.com/aframe-environment-component/dist/aframe-environment-component.min.js" />
        <script src="https://unpkg.com/aframe-physics-system@1.4.0/dist/aframe-physics-system.min.js" />
        <script src="https://cdn.jsdelivr.net/gh/n5ro/aframe-physics-system@v$npm_package_version/dist/aframe-physics-system.min.js" />
      </Head>
      <div id="scene-root">
        <Component data={games} headerTitle={title} id="scene-root" />
      </div>
    </>
  );
};

export default app;
