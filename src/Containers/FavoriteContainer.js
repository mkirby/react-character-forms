import React from 'react'
import CharacterCard from '../Components/CharacterCard'

class FunctionContainer extends React.Component {

  renderCharacterCards = () => {
    return this.props.characters.map(char => <CharacterCard key={char.id} character={char} clickHandler={this.props.clickHandler}/>)
  }

  render() {
    return (
      <div className="character-flex-container">
        {this.renderCharacterCards()}
      </div>
    )
  }
}

export default FunctionContainer