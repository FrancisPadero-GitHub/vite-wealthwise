import "./assets/css/App.css";
import Profile from "./components/Profile";
import { useState } from "react";

export default function TestingFile() {
  // State Management
  const [count, setCount] = useState(0);
  return (
    <div>
      <h4>Testing area for learning</h4>
      <Profile /> {/* Imported from components to reuse the code */}
      <Profile />
      <Profile />
      <ProfileMain />
      <ProfileMain />
      <ProfileMain />
      <div style={person.theme}>
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src="https://i.imgur.com/7vQD0fPs.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
        {/* State Management the value will change after you click it */}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}
// Thisi s the reusable components that can be nested here or on an another tsx file
function ProfileMain() {
  // same file as the default function
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

// Javascript Markup variables
const person = {
  name: "Francis S. Padero",
  theme: {
    background: "black",
    color: "pink",
  },
};
