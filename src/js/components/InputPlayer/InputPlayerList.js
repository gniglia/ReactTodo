import React from 'react';
import InputPlayer from './InputPlayer';

const InputPlayerList = () => {
  return (
    <div>
      <InputPlayer player="Player 1" />
      <InputPlayer player="Player 2" />
      <button>Add Payers</button>
    </div>
  );
};

export default InputPlayerList;
