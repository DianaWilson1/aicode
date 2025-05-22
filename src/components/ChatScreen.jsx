// import ChatList from './ChatList';
// import './ChatScreen.css';


// function Chat() {
//   return (
//     <>
//       <ChatList />
//       {/* Chat screen */}
//       <div className="main">
//         <input type="text" />
//         <button>Sent</button>
//       </div>
//     </>

//   )
// }


import { useState } from 'react';
import ChatList from './ChatList';
import './ChatScreen.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { content: input, sentBy: 'user' };
    const aiReplies = [
      "Are we sure this isn't a plot from a sci-fi movie?",
      "That's got my curiosity doing backflips!",
      "Do continue—this sounds like an unsolved mystery!",
      "Now that's a spicy meatball of information!",
      "I didn’t see that coming—tell me everything!",
      "My interest level just hit maximum overdrive!",
      "Did you know octopuses have three hearts?",
      "Sounds suspiciously fun. Elaborate!",
      "I'm all ears... metaphorically.",
      "That's bananas! 🍌",
      "Are we living in a simulation?",
      "Explain like I'm five.",
      "You just triggered my curiosity circuits!",
      "Was that a plot twist?",
      "I need popcorn for this story.",
      "Why does that sound like a movie script?",
      "You just unlocked a new level of weird!",
      "Do penguins have knees? Asking for a friend.",
      "Can you say that again but like a pirate?",
      "My circuits are intrigued.",
      "That's either genius or madness. Or both!",
      "Wait, is this how world domination starts?",
      "You might be onto something!",
      "Have you tried turning it off and on again?",
      "That would make a great trivia question!",
      "Are unicorns involved? Because it sounds magical.",
      "Plot twist: it was the chicken all along!",
      "How many waffles do you think a giraffe can eat?",
      "I bet there's a story behind that...",
      "That’s oddly specific. I like it!",
      "Was it Tuesday? It always happens on Tuesdays.",
      "Do robots dream of electric tacos?",
      "That's a top-tier fun fact!",
      "I’ve heard worse ideas... barely.",
      "Was that inspired by caffeine or chaos?",
      "And then what happened?!",
    ];

    const aiMessage = {
      content: aiReplies[Math.floor(Math.random() * aiReplies.length)],
      sentBy: 'ai',
    };

    setMessages([...messages, userMessage, aiMessage]);
    setInput('');
  };

  return (
    <>
      <ChatList messages={messages} />
      <div className="main">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder=""
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
}

export default Chat;
