import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const title = 'React Counter Activity - Day 3';

  return (
    <>
      {/* Pass the setCount function as a prop to Header */}
      <Header title={title} />

      <main>
        {/* Output the state count variable here */}
        <h1>Count: OUTPUT_COUNT_HERE</h1>

      </main>

      <Footer title={title} />
    </>
  );
}

export default App;
