import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setquestions] = useState(data);
  return (
    <main>
      
      <div className="container">
        <h3>Some Questions and Answers</h3>
        <section className="info">
          {
            questions.map((question) => {
              return <SingleQuestion key={question.key} {...question} />
            })
          }

        </section>
      </div>

    </main>
  );
}

export default App;
