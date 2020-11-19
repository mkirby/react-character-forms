import React from 'react'
import NewForm from '../Components/NewForm'
import SearchForm from '../Components/SearchForm'

function Header(props) {

  return (
    <div>
      <NewForm addNewCharacter={props.addNewCharacter} />
      <SearchForm searchedValue={props.searchedValue} handleSearch={props.handleSearch}/>
    </div>
  )
}

export default Header