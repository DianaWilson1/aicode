import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import starLogo from '../assets/star.png';


function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/chat');
  };

  return (
    <>
      <div>
        <a href="" target="_blank">
          <img src={starLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Galaxy AI Friend</h1>
      <button className="red" onClick={handleClick}>
        Start chatting
      </button>
      <p className="read-the-docs">
        Welcome to a new era of smart technology. Galaxy AI is groundbreaking suite of artificial intelligence features
      </p>
      <div className="card">

        <p>
          Already more then 10.000 users liked our Ai.Do you like it?
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          10.00{count}
        </button>

      </div>
    </>
  )
}

export default Home;
