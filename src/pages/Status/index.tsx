import { FormEvent, useState } from 'react';

import { Header } from '../../components/Header';
import { Separator } from '../../components/Separator';
import { Tweet } from '../../components/Tweet';

import './styles.css';

export function Status() {
  const [newAnswer, setNewAnswer] = useState('');
  const [answers, setAnswers] = useState([
    'Concordo',
    'Faz sentido',
    'Parabéns pelo o progresso',
  ]);

  function createNewAnswers(event: FormEvent) {
    event.preventDefault();

    setAnswers([newAnswer, ...answers]);
    setNewAnswer('');
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers]);
      setNewAnswer('');
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis possimus, laborum officiis sed nesciunt culpa aliquid tenetur sequi, numquam impedit facilis non asperiores excepturi maxime. Quibusdam ipsam totam nihil commodi." />

      <Separator />

      <form className="answer-tweet-form" onSubmit={createNewAnswers}>
        <label htmlFor="tweet">
          <img src="https://github.com/pedromakengo.png" alt="Pedro Makengo" />
          <textarea
            id="tweet"
            value={newAnswer}
            onChange={event => setNewAnswer(event.target.value)}
            onKeyDown={handleHotkeySubmit}
            placeholder="Tweet you answer"
          />
        </label>
        <button type="submit">Tweet</button>
      </form>

      {answers.map((answer, index) => {
        return <Tweet content={answer} key={index} />;
      })}
    </main>
  );
}
