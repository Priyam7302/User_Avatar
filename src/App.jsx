import React from 'react';
import { useState } from 'react';
import Avatar from './components/Avatar';
import UserInfo from './components/UserInfo';
import './App.css';

const App = () => {
  const [showUserInfo, setShowUserInfo] = useState(false);
  const [showAvatar, setShowAvatar] = useState(false);

  const [input, setInput] = useState("");
  const [avatars, setAvatars] = useState([]);

  function getFirstLetter() {
    const firstLetter = input.slice(0, 1).toUpperCase();

    setAvatars([...avatars, { id: Date.now(), avatar: firstLetter }]);
    setInput("");
    setShowUserInfo(false);
    setShowAvatar(true);
  }
  console.log(avatars);

  function handleAvatar(e, avatarId) {
    setAvatars(avatars.filter((obj) => obj.id !== avatarId));
  }


  return (
    <div id="userAvatars">
      {
        !showUserInfo && (
          <button onClick={()=>setShowUserInfo(true)}>+</button>
        )
      }
      {
        showUserInfo && (
          <UserInfo setShowUserInfo={setShowUserInfo} 
            input={input}
            setInput={setInput}
            getFirstLetter={getFirstLetter}
          />
        )
      }
      {
        showAvatar && <Avatar avatars={avatars} setShowAvatar={setShowAvatar} handleAvatar={handleAvatar} />
      }
      
    </div>
  );
}

export default App;
