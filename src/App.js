import { useEffect } from 'react';
import letterImage from './letter.png';
import lpccVideo from './lpcc.mp4';
import './App.css';

function loadScript() {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
  script.setAttribute('data-name', 'bmc-button');
  script.setAttribute('data-slug', 'ScammerBuster');
  script.setAttribute('data-color', '#FFDD00');
  script.setAttribute('data-emoji', '');
  script.setAttribute('data-font', 'Cookie');
  script.setAttribute('data-text', 'Buy me a coffee');
  script.setAttribute('data-outline-color', '#000000');
  script.setAttribute('data-font-color', '#000000');
  script.setAttribute('data-coffee-color', '#ffffff');
  document.body.appendChild(script);
}

function App() {
  useEffect(() => {
    loadScript();
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>⚠️😢🛑✋</h1>
        <h1>WARNING!</h1>
        <h2>LPCC is a scam.</h2>
        <p>Do not pay for free labor posters</p>
        <video width='320' height='240' controls>
          <source src={lpccVideo} type='video/mp4' id='video' />
        </video>
        <img src={letterImage} alt='Letter' id='letter' />
        <p>See these articles below:</p>
        <a
          className='App-link'
          href='https://wpthemespeed.com/labor-poster-scam-alert-after-creating-new-corporations-or-llcs/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Labor Poster Scam Alert after creating new corporations or LLCs
        </a>
        <a
          className='App-link'
          href='https://www.bbb.org/article/news-releases/26028-bbb-scam-alert-dont-pay-for-free-labor-law-posters'
          target='_blank'
          rel='noopener noreferrer'
        >
          BBB Scam Alert: Don’t pay for free labor law posters
        </a>
      </header>
    </div>
  );
}

export default App;
