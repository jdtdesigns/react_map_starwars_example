import Header from './components/Header';
import Footer from './components/Footer';
import Character from './components/Character';

// Import the data from the data.json file here
// The import name is up to you
import swData from './data.json';

function App() {
  const title = 'Map Activity Two - Day 3';
  console.log(swData);
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
          {swData.map((char, i) => (
            <Character
              key={i}
              name={char.name}
              birth_year={char.birth_year}
              eye_color={char.eye_color} />
          ))}
        </div>

      </main>

      <Footer title={title} />
    </>
  );
}

export default App;
