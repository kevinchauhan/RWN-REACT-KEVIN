import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovie } from './thunk'

const Action = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        loadMovie()
    }, [])

    const loadMovie = (url = 'https://api.themoviedb.org/3/movie/popular?api_key=bd8d05092e212f3f9c3e7ae7196c2ccd') => {
        dispatch(getMovie(url))
    }

    const handleSearch = (e) => {
        const searchParams = e.target.value.toLowerCase()
        if (searchParams.length < 1) {
            loadMovie()
            return
        }
        loadMovie(`https://api.themoviedb.org/3/search/movie?api_key=bd8d05092e212f3f9c3e7ae7196c2ccd&query=${searchParams}`)
    }

    return (
        <div className='container py-3'>
            <nav className='mb-5 flex justify-between items-center'>
                <div>
                    <ul className='flex text-gray-300'>
                        <li className='hover:text-white mr-3'><button onClick={() => loadMovie()}> Popular</button></li>
                        <li className='hover:text-white mr-3'><button onClick={() => loadMovie('https://api.themoviedb.org/3/movie/top_rated?api_key=bd8d05092e212f3f9c3e7ae7196c2ccd')}> Top Rated</button></li>
                        <li className='hover:text-white'><button onClick={() => loadMovie('https://api.themoviedb.org/3/movie/upcoming?api_key=bd8d05092e212f3f9c3e7ae7196c2ccd')}> Upcoming</button></li>
                    </ul>
                </div>
                <div>
                    <input type="text" className='px-2 text-gray-300 text-sm py-1 bg-transparent border border-gray-500' placeholder='search movie...' onChange={handleSearch} />
                </div>
            </nav>
            <div className="grid grid-cols-4 gap-5">
                {
                    state.data.length > 0 ? state.data.map((movie, i) => {

                        return <div className='text-white' key={i}>
                            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                            <h2 className='text-xl'>{movie.title} <span className='text-sm text-gray-300'>({movie.release_date.split('-')[0]})</span></h2>
                            <p className='text-xs text-gray-400 line-clamp-2 mt-1'>{movie.overview}</p>
                            <h5 className='text-sm mt-1 mb-3'><i className="ri-star-fill text-yellow-500"></i> {movie.vote_average.toString().slice(0, 3)} ({state.data[0].vote_count})</h5>
                        </div>
                    })
                        : ''

                }
            </div>
        </div>
    )
}

export default Action