

// function ChatList() {
//   const [messages] = useState([
//     // { id: 1, content: "Speak Any Language: Translate phrases instantly", sentBy: 'user' },
//     // { id: 2, content: "Explore Philosophy: Discuss profound questions", sentBy: 'ai' },
//     // { id: 3, content: "Code Problem Solver: Debug coding issues with ease", sentBy: 'user' },
//     // { id: 4, content: "Imagination Unleashed: Create a unique story from any idea", sentBy: 'ai' },
//     // { id: 5, content: "Learn Something New: Explain complex topics in simple terms", sentBy: 'user' },
//     // { id: 6, content: "Cooking Made Easy: Get custom recipes from your ingredients", sentBy: 'ai' },
//     // { id: 7, content: "Virtual Travel Buddy: Tour the world virtually", sentBy: 'user' },
//     // { id: 8, content: "Healthy Living Tips: Receive fitness and wellness advice", sentBy: 'ai' },
//     // { id: 9, content: "Art & Music Picks: Discover art and music recommendations", sentBy: 'user' },
//   ])
//   return (
//     <>
//       Chat List

//     </>

//   )
// }

function ChatList({ messages }) {
  return (
    <div className="chat-list">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message ${msg.sentBy === 'user' ? 'user' : 'ai'}`}
        >
          <div className="bubble">{msg.content}</div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
