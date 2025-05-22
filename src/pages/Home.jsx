import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import starLogo from '../assets/star.png';

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat');
  };

  return (
    <>
      <div className="mt-4">
        {/*adds subtle hover zoom effect to logo */}
        <a href="" target="_blank">
          <img
            src={starLogo}
            className="logo hover:scale-105 transition-transform duration-300"
            alt="Vite logo"
          />
        </a>
      </div>git init


      <h1>Galaxy AI Friend</h1>

      {/*Adds a light indigo border, dark indigo text, small padding, slightly rounded corners, and a soft indigo background on hover.*/}
      <button
        className="border border-indigo-300 text-indigo-700 px-3 py-1 rounded-sm hover:bg-indigo-50"
        onClick={handleClick}
      >
        Start chatting
      </button>

      <p className="read-the-docs">
        Welcome to a new era of smart technology. Galaxy AI is a groundbreaking suite of artificial intelligence features.
      </p>

      <div className="card">
        <p>
          Already more than 10,000 users liked our AI. Do you like it?
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          10.00{count}
        </button>
      </div>
    </>
  );
}

export default Home;
