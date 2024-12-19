import React, { useState } from 'react';
import './App.css';

function CatFact({ fact, index, removeFact }) {
  return (
    <li>
      {fact} 
      <button onClick={() => removeFact(index)}>Удалить</button>
    </li>
  );
}

function App() {
  const [facts, setFacts] = useState([
    'Коты спят около 16 часов в день.',
    'Они могут слышать ультразвуковые звуки, недоступные человеку.',
    'Кошачьи усы помогают им ориентироваться в пространстве.',
    'Самый старый кот в мире прожил 38 лет!',
  ]);

  const [newFact, setNewFact] = useState('');

  const addFact = () => {
    if (newFact.trim()) {
      setFacts([...facts, newFact]);
      setNewFact('');
    }
  };

  const removeFact = (index) => {
    const updatedFacts = facts.filter((_, i) => i !== index);
    setFacts(updatedFacts);
  };

  return (
    <div className="container">
      <h1 className="title">Котики: лучшие компаньоны человека</h1>
      <img
        src="https://i.pinimg.com/736x/2b/04/47/2b04471c36079c90b9c3999d81d0f161.jpg" 
        alt="китик" 
        className="cat-image"
      />
      <p>
        Кошки — это не просто домашние питомцы, но и спутники, которые могут приносить радость, уют и гармонию в дом. 
        Известно, что кошки живут рядом с людьми уже несколько тысяч лет, и за это время они стали неотъемлемой частью человеческой жизни.
      </p>

      <h2 className="subtitle">Психология и поведение кошек</h2>
      <img
        src="https://i.pinimg.com/736x/7d/8b/29/7d8b29fdefc11bc8f5b5bef59859f84a.jpg" 
        alt="еще китик" 
        className="micro-cat-image"
      />
      <p>
        Кошки известны своей независимостью, но это не означает, что они не нуждаются в общении с владельцами. Мурлыканье кошки часто ассоциируется с состоянием покоя и удовлетворения, и это помогает уменьшить стресс у человека. Иногда кошки могут проявлять свою привязанность, тереться о ноги хозяев или даже приносить маленькие "подарки" — например, пойманных мышей или птиц.
      </p>

      <h2 className="subtitle">История одомашнивания кошек</h2>
      <img
        src="https://i.pinimg.com/736x/94/b2/39/94b23901001e2becdd8775e660612399.jpg" 
        alt="еще китик" 
        className="micro-cat-image"
      />
      <p>
        Древние египтяне были одними из первых, кто одомашнил кошек. Они считали этих животных священными и даже богиней Бастет, которая олицетворяла защиту и заботу о доме. С тех пор кошки распространились по всему миру и стали неотъемлемой частью человеческой жизни.
      </p>

      <h2 className="subtitle">Удивительные способности кошек</h2>
      <img
        src="https://i.pinimg.com/474x/cd/a1/af/cda1af70234f6e2ee53d46c174ff3b8d.jpg" 
        alt="еще китик" 
        className="micro-cat-image"
      />
      <p>
        Кошки могут прыгать на высоту до шести раз больше длины своего тела. Они также обладают отличным ночным зрением, что помогает им быть мастерами охоты в темное время суток. Интересно, что кошки могут развивать скорость до 50 км/ч, что помогает им быстро ловить добычу.
      </p>

      <h2 className="subtitle">Забота о кошке</h2>
      <img
        src="https://i.pinimg.com/236x/f9/3f/e3/f93fe31cd94e88070ef79a4884f1fe70.jpg" 
        alt="еще китик" 
        className="micro-cat-image"
      />
      <p>
        Забота о кошке включает в себя не только кормление и предоставление комфортного места для сна. Важно регулярно чистить кошачью шерсть, особенно если у вашей кошки длинная шерсть. Также не забывайте о регулярных визитах к ветеринару для профилактических осмотров и вакцинации.
      </p>

      <h2 className="subtitle">Мифы о кошках</h2>
      <img
        src="https://i.pinimg.com/736x/b3/3d/24/b33d2476f8fec98fe1ec48a29fa81ce8.jpg" 
        alt="еще китик" 
        className="micro-cat-image"
      />
      <p>
        Один из распространенных мифов — это то, что кошки не могут быть привязаны к своим хозяевам. На самом деле, кошки могут проявлять сильную привязанность и часто выбирают одного человека, которому они доверяют. Еще один миф — что кошки не любят воду. На самом деле, многие кошки любят играть с водой и даже могут научиться плавать!
      </p>

      <h2 className="subtitle">Заключение</h2>
      <img
        src="https://i.pinimg.com/736x/c1/1d/b6/c11db6dc69cf97238fcb646958aac64a.jpg" 
        alt="веста<3" 
        className="micro-cat-image"
      />
      <p>
        Кошки — это не просто питомцы, это настоящие друзья, которые могут быть источником радости и умиротворения. Их независимость, игривость и привязанность делают их отличными спутниками. Независимо от того, сколько фактов мы узнаем о кошках, они всегда будут оставаться загадочными и удивительными существами.
      </p>

      <h2 className="subtitle">Интересные факты о кошках</h2>
      <div className="fact-container">
        <ul>
          {facts.map((fact, index) => (
            <CatFact key={index} fact={fact} index={index} removeFact={removeFact} />
          ))}
        </ul>

        <div className="fact-input-container">
          <h3 className="add-fact-title">Добавьте свой факт:</h3>
          <input 
            type="text" 
            value={newFact} 
            onChange={(e) => setNewFact(e.target.value)} 
            placeholder="Введите интересный факт" 
            className="fact-input"
          />
          <button onClick={addFact} className="add-fact-button">
            Добавить факт
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
