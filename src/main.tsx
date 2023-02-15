import React from 'react';
import ReactDOM from 'react-dom/client';

import logoTwitter from './assets/logo-twitter.svg';

import './global.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <aside className="sidebar">
        <img src={logoTwitter} alt="" className="logo" />

        <nav className="main-navigation">
          <a href="">Home</a>
          <a href="">Explore</a>
          <a href="">Notifications</a>
          <a href="">Messages</a>
          <a href="">Lists</a>
          <a href="">Profile</a>
          <a href="">More</a>
        </nav>
        <button className="new-tweet" type="button">
          Tweet
        </button>
      </aside>
      <div className="content">Content</div>
    </div>
  </React.StrictMode>
);
