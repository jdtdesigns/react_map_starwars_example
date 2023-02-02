import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const title = 'Map Activity One - Day 3';
  // Create an array of names, using a static const variable

  return (
    <>
      <Header title={title} />

      <main>

        <h2>Names: </h2>

        <ul>
          {/* 
          Use the array map method to loop over the names array and output an li for each name - set the li text to the name
        */}
        </ul>

      </main>

      <Footer title={title} />
    </>
  );
}

export default App;
