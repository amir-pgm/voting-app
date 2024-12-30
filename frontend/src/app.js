import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [vote, setVote] = useState('');

  const handleVote = (party) => {
    setVote(party);
    axios.post('http://localhost:5000/vote', { party })
      .then(response => {
        alert('Vote recorded successfully!');
      })
      .catch(error => {
        alert('Error recording vote.');
      });
  };

  return (
    <div className="App">
      <h1>Vote for Your Party</h1>
      <button onClick={() => handleVote('BJP')}>Vote for BJP</button>
      <button onClick={() => handleVote('Congress')}>Vote for Congress</button>
      <p>You voted for: {vote}</p>
    </div>
  );
}

export default App;