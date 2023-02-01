import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  const title = 'Learning React - All the pieces!';

  return (
    <div>
      <Header title={title} />

      <Main />

      <Footer title={title} />
    </div>
  );
}

export default App;
