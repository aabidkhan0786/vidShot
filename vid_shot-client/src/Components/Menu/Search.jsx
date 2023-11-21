import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getByTitle } from '../../Redux/Actions/Video'

const Search = () => {
  const [search, setSearch] = useState([])
  const [video, setVideo] = useState([])
  const dispatch = useDispatch()
  const auth = useSelector(state => state.User)

  useEffect(() => {
    dispatch(getByTitle(search))
  }, [search])

  return (
    <>
      <div className='d-flex justify-content-center '>
        <input type="search" className='input_search ps-3'
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder={`${auth.user.username}, search vidshot`} />
      </div>
    </>
  )
}
export default Search;