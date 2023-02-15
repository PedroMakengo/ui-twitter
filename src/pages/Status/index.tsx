import { Header } from '../../components/Header';
import { Separator } from '../../components/Separator';
import { Tweet } from '../../components/Tweet';

import './styles.css';

const answers = ['Concordo', 'Faz sentido', 'Parabéns pelo o progresso'];
export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus, laborum officiis sed nesciunt culpa aliquid tenetur sequi, numquam impedit facilis non asperiores excepturi maxime. Quibusdam ipsam totam nihil commodi." />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/pedromakengo.png" alt="Pedro Makengo" />
          <textarea id="tweet" placeholder="Tweet you answer" />
        </label>
        <button type="submit">Tweet</button>
      </form>

      {answers.map((answer, index) => {
        return <Tweet content={answer} key={index} />;
      })}
    </main>
  );
}
