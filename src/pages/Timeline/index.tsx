import { Header } from '../../components/Header';
import { Separator } from '../../components/Separator';
import { Tweet } from '../../components/Tweet';
import './styles.css';

const tweets = ['Meu primeiro tweet', 'Teste', 'Deu cert tweetar'];

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/pedromakengo.png" alt="Pedro Makengo" />
          <textarea id="tweet" placeholder="What's happening?" />
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
