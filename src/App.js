import logo from './logo.gif';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
    <p>{Hello()}</p>
        
        <Greet name = "Panda" stageName = "Panpan">
        <Message/>
        <Button/>
        </Greet>
        
        
        <p><b> ---------------------------------------------------------------------------- </b></p>
        
        <Employee/>
        
        <p><b> ---------------------------------------------------------------------------- </b></p>
        
        <img src="https://64.media.tumblr.com/cdead4eeb0f09e0fa4f6183922ce855f/tumblr_p4ey78eeed1sbjo65o1_1280.gifv"
          className="App-gif"
          height="300"
          alt="panda gif"
          >
        </img>
        
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=dKLpEb4i0Mk"
          target="_blank"
          rel="noopener noreferrer"
        >
          here's a video of cute me annoying my friend and rolling ehe
        </a>
        
      </header>
    </div>
  );
}

export default App;
