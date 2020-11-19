import React from 'react'
import Header from './Containers/Header'
import CharacterContainer from './Containers/CharacterContainer';
import FavoriteContainer from './Containers/FavoriteContainer';
import characters from './api'
import './App.css';

class App extends React.Component {
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

  addToFavorites = (id) => {
    let newArray = [...this.state.api]
    let char = newArray.find(char => char.id === id)
    char.favorite = true
    this.setState({api: newArray})
    console.log("added to favorites", id)
  }

  removeFromFavorites = (id) => {
    let newArray = [...this.state.api]
    let char = newArray.find(char => char.id === id)
    char.favorite = false
    this.setState({api: newArray})
    console.log("removed from favorites", id)
  }

  favoriteCharacters = () => {
    return this.state.api.filter(char => char.favorite)
  }

  render() {
    return (
      <>
        <div className="index">
          <h1>Character Index</h1>
          <Header addNewCharacter={this.addNewCharacter} searchedValue={this.state.searchedValue} handleSearch={this.handleSearch}/>
          <CharacterContainer characters={this.filteredCharacters()} clickHandler={this.addToFavorites}/>
        </div>
        <div className="favorites">
          <h1>Character Favorites</h1>
          <FavoriteContainer characters={this.favoriteCharacters()} clickHandler={this.removeFromFavorites}/>
        </div>
      </>
    );
  }
}

export default App;
