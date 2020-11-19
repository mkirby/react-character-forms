import React from 'react'

const CharacterCard = (props) => {
    return (
      <div className="character-flex-card" onClick={() => {
        props.clickHandler(props.character.id)
      }}>
        <div className="image-div">
          <img alt={props.character.name} src={props.character.img}/>
        </div>
        <h3>{props.character.name}</h3>
        <p>{props.character.show}</p>
      </div>
    )
}

export default CharacterCard