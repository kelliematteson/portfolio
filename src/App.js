import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="image-cropper">
            <img src="kellie_web.jpg" />
          </div>
       
      </header>
      <h2>Kellie's Portfolio</h2>
      <div className="images">
        <img className="portfolio" src="baby-port.jpg" />
        <img className="portfolio" src="recipe-port.jpg" />
      </div>
    </div>
  );
}

export default App;
