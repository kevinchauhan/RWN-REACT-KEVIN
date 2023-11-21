export const getMovie = (url) => {
    return (dispatch) => {
        fetch(url)
            .then(res => res.json())
            .then(res => dispatch({ type: 'data', payload: res.results }))
    }
}