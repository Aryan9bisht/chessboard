import React from 'react';

function Chess({ index, option, handleClick, handleReset }) {
  const onClickHandler = () => {
    handleReset();
    handleClick(); 
  };

  return (
    <div
      onClick={onClickHandler}
      style={{
        height: '10vh',
        width: '10vw',
        background: option,
        border: '1px solid black',
        boxSizing: 'border-box',
      }}
    ></div>
  );
}

export default Chess;
