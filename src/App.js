import './css/App.css';
import Header from './components/Header'
import Buttons from './components/Buttons';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Buttons />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
