import './App.scss'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Images from './components/Images'
import SearchBox from './components/SearchBox'
import InfiniteScroll from 'react-infinite-scroll-component'

function App() {
  const [person, setPerson] = useState({ arr: [] })
  const [searchValue, setSearchValue] = useState('')

  const GetData = async () => {
    await axios
      .get('/flickr', {
        params: {
          tags: searchValue,
        },
      })
      .then((res) => {
        const persons = res.data
        setPerson({ arr: persons })
        console.log(res.data)
        console.log(typeof res.data)
      })
  }
  const fetchMoreData = async () => {
    await axios.get('/flickr').then((res) => {
      const personsMore = res.data
      setTimeout(() => {
        setPerson({
          arr: personsMore.concat(person.arr),
        })
      }, 800)
    })
  }

  useEffect(() => {
    GetData()
  }, [searchValue])

  return (
    <div className="App">
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <InfiniteScroll
        dataLength={person.arr.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Horay! You have seen it all</b>
          </p>
        }
      >
        <div className="imagerow">
          <Images person={person.arr} />
        </div>
      </InfiniteScroll>
    </div>
  )
}

export default App
