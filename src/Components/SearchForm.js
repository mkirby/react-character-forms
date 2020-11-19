import React from 'react'

const SearchForm = (props) => {
    return (
      <>
        <p>Filter Characters:</p>
        <form>
          <input placeholder="Character Name" value={props.searchedValue} onChange={props.handleSearch}/>
        </form>
      </>
    )
}

export default SearchForm