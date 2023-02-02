import Header from './components/Header';
import Footer from './components/Footer';

// Import the data from the data.json file here
// The import name is up to you

function App() {
  const title = 'Map Activity Two - Day 3';

  return (
    <>
      <Header title={title} />

      <main>

        <h2>Characters: </h2>

        <div className="characters">
          {/* 
          Use the .map() method to output a <div> for each character object in the data array. The div should have the following internal elements:
            - An <h3> with the character's name
            - A <p> with the character's birth year
          
            ** Don't forget the key prop that is required for each returned element in the .map() callback
         */}

        </div>

      </main>

      <Footer title={title} />
    </>
  );
}

export default App;
