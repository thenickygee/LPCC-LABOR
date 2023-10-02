import letterImage from './letter-v2.png';
import lpccVideo from './lpcc.mp4';
import './App.css';

function App() {
  return (
    <div className='App pt-5'>
      <header className='App-header'>
        <div className='border-2 w-[90%] max-w-6xl rounded-md shadow-lg bg-neutral-700 p-5 mb-5'>
          <h1 className='font-bold text-red-500 text-6xl'>✋ WARNING!</h1>
          <h2 className='font-bold text-6xl'>LPCC is a scam.</h2>
          <h3>Are you being sold free Labor Law Posters?</h3>
          <h4>Do not pay for free labor posters.</h4>
        </div>
        <video
          className='rounded-md shadow-lg max-w-6xl'
          width='90%'
          height='240'
          controls
        >
          <source src={lpccVideo} type='video/mp4' id='video' />
        </video>

        <div className='max-w-6xl w-full border-2 bg-neutral-700 flex flex-col rounded-md mt-5 p-5'>
          <p className='font-bold'>See these articles below:</p>
          <a
            className='underline cursor-pointer text-sm'
            href='https://wpthemespeed.com/labor-poster-scam-alert-after-creating-new-corporations-or-llcs/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Labor Poster Scam Alert after creating new corporations or LLCs
          </a>
          <a
            className='underline cursor-pointer text-sm'
            href='https://www.bbb.org/article/news-releases/26028-bbb-scam-alert-dont-pay-for-free-labor-law-posters'
            target='_blank'
            rel='noopener noreferrer'
          >
            BBB Scam Alert: Don’t pay for free labor law posters
          </a>
        </div>
        <img
          src={letterImage}
          alt='Letter'
          id='letter'
          width='100%'
          className='letter-image w-full x pt-5 rounded-md overflow-hidden shadow-lg max-w-6xl'
        />
      </header>
    </div>
  );
}

export default App;
