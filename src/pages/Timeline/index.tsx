import { FormEvent, useState } from 'react';

import { Header } from '../../components/Header';
import { Separator } from '../../components/Separator';
import { Tweet } from '../../components/Tweet';
import './styles.css';

export function Timeline() {
  const [newTweet, setNewTweet] = useState('');
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu cert tweetar',
  ]);

  function createNewTweet(event: FormEvent) {
    event.preventDefault();

    setTweets([newTweet, ...tweets]);
    setNewTweet('');
  }

  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form" onSubmit={createNewTweet}>
        <label htmlFor="tweet">
          <img src="https://github.com/pedromakengo.png" alt="Pedro Makengo" />
          <textarea
            id="tweet"
            value={newTweet}
            onChange={event => setNewTweet(event.target.value)}
            placeholder="What's happening?"
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map((tweet, index) => {
        return <Tweet content={tweet} key={index} />;
      })}
    </main>
  );
}
