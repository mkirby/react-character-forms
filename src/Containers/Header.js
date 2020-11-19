import React from 'react'
import NewForm from '../Components/NewForm'
import SearchForm from '../Components/SearchForm'

function Header(props) {

  return (
    <div style={{border: "2px red solid", padding: "20px"}}>
      <NewForm addNewCharacter={props.addNewCharacter} />
      <SearchForm />
    </div>
  )
}

export default Header