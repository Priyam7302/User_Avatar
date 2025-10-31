import React from 'react';

function Avatar({ avatars, handleAvatar }) {
    return (
        <div id="avatars">
            {avatars.map((obj) => {
                return <p key={obj.id} >
                    {
                        <>
                            <span>{obj.avatar}</span>
                            <span onClick={(e) => handleAvatar(e,obj.id)}>&times;</span>
                        </>
                    }
                    </p>
            })}
        </div>
    );
}

export default Avatar;
