import React from 'react';

function UserInfo({ setShowUserInfo, input, setInput, getFirstLetter }){
    return (
        <div id='userInfo'>
            <span>&times;</span>
            <div className="content">
                <input type="text" placeholder='Enter your name' value={input} onChange={(e) => setInput(e.target.value)} />
                <button className='cancel' onClick={() => setShowUserInfo(false)}>
                    Cancel
                </button>
                <button className='confirm' onClick={getFirstLetter}>
                     Confirm
                </button>
            </div>
        </div>
    );
}

export default UserInfo;
