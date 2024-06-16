// src/components/Feedback.jsx
import React, { useState } from 'react';
import Button from './Button';

const Feedback = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  const handleReset = () => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <div className="feedback">
      <div>
        <Button className="like" onClick={handleLike}>Like</Button>
        <div>{likes}</div>
      </div>
      <div>
        <Button className="dislike" onClick={handleDislike}>Dislike</Button>
        <div>{dislikes}</div>
      </div>
      <div>
        <Button className="reset" onClick={handleReset}>Reset Results</Button>
      </div>
    </div>
  );
};

export default Feedback;
