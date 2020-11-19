import React from 'react'
import Header from './Containers/Header'
import CharacterCointainer from './Containers/CharacterContainer';
import characters from './api'
import './App.css';

class  App extends React.Component {

  state = {
    api: characters,
    searchedValue: ""
  }

  addNewCharacter = (characterObj) => {
    console.log("Yabba dabba doo! Character Created!", characterObj)
    //give character a fake id
    let allIds = []
    this.state.api.map(obj => allIds.push(obj.id))
    const newId = Math.max(...allIds) + 1
    characterObj.id = newId
    // add character to state
    let newArray = [...this.state.api, characterObj]
    this.setState({api: newArray})
  }

  filteredCharacters = () => {
    return this.state.api.filter(char => char.name.toLowerCase().includes(this.state.searchedValue.toLowerCase()))
  }

  handleSearch = (e) => {
    this.setState({searchedValue: e.target.value})
  }

  render() {
    return (
      <>
        <div className="index">
          <h1>Character Index</h1>
          <Header addNewCharacter={this.addNewCharacter} searchedValue={this.state.searchedValue} handleSearch={this.handleSearch}/>
          <CharacterCointainer characters={this.filteredCharacters()}/>
        </div>
      </>
    );
  }
}

export default App;
