import React from 'react'

const SearchForm = (props) => {
    return (
      <>
        <p>Filter Characters:</p>
        <form style={{margin: "5px 0"}}>
          <input placeholder="Character Name" value={props.searchedValue} onChange={props.handleSearch}/>
        </form>
      </>
    )
}

export default SearchForm