import React from 'react'
import CharacterCard from '../Components/CharacterCard'

function CharacterCointainer(props) {
  
  const renderCharacterCards = () => {
    return props.characters.map(char => <CharacterCard key={char.id} character={char} />)
  }

  return (
    <div className="character-flex-container">
      {renderCharacterCards()}
    </div>
  )

}

export default CharacterCointainer 