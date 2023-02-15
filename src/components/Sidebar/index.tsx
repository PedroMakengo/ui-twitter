import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  User,
} from 'phosphor-react';

import logoTwitter from '../../assets/logo-twitter.svg';

import './styles.css';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={logoTwitter} alt="" className="logo" />

      <nav className="main-navigation">
        <a href="" className="active">
          <House weight="fill" />
          Home
        </a>
        <a href="">
          <Hash weight="fill" />
          Explore
        </a>
        <a href="">
          <Bell />
          Notifications
        </a>
        <a href="">
          <Envelope />
          Messages
        </a>
        <a href="">
          <BookmarkSimple />
          Bookmarks
        </a>
        <a href="">
          <FileText />
          Lists
        </a>
        <a href="">
          <User />
          Profile
        </a>
        <a href="">
          <DotsThreeCircle />
          More
        </a>
      </nav>
      <button className="new-tweet" type="button">
        Tweet
      </button>
    </aside>
  );
}
