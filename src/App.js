import Header from './components/Header';
import LeftContent from './components/LeftContent';
import RightContent from './components/RightContent';
import Footer from './components/Footer';

function App() {
  const title = 'React Styles Activity - Day 3';

  return (
    <>
      <Header title={title} />

      <main className="content-wrapper">

        <LeftContent />
        <RightContent />

      </main>

      <Footer title={title} />
    </>
  );
}

export default App;
