import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  const title = 'Learning React - All the pieces!';
  const [showMain, setShowMain] = useState(true); // [0, function() {}]

  return (
    <div>
      <Header title={title} />

      {showMain && <Main />}

      <button onClick={() => setShowMain(!showMain)}>{showMain ? 'Hide' : 'Show'} Main</button>

      <Footer title={title} />
    </div>
  );
}

export default App;
