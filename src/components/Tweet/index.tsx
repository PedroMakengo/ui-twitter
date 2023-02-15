import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import './styles.css';

export interface TweetProps {
  content: string;
}

export function Tweet({ content }: TweetProps) {
  return (
    <a href="#" className="tweet">
      <img src="https://github.com/pedromakengo.png" alt="Pedro Makengo" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Pedro Makengo</strong>
          <span>@pedromakengo</span>
        </div>

        <p>{content}</p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            20
          </button>
          <button type="button">
            <ArrowsClockwise />
            20
          </button>
          <button type="button">
            <Heart />
            20
          </button>
        </div>
      </div>
    </a>
  );
}
