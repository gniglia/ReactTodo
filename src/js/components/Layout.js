import React from "react";
import InputPlayerList from './InputPlayer/InputPlayerList';
import Command from './Commands/Command';


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <InputPlayerList />
        <hr />
        <Command />
        <hr />

      </div>
    )
  }
}
