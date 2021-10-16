import React from 'react'

const SearchBox = (props) => {
  return (
    <>
      <div className="SearchBar">
        <input
          placeholder="Computers,Cats,Fields...."
          value={props.searchValue.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
        ></input>
        <p>Search pictures by #Tag</p>
      </div>
    </>
  )
}

export default SearchBox
