import React from 'react'

const DropDown = ({ name, input, handleOption, states }) => {
    return (
        <select name={name} className='block w-full rounded-md border-0 py-1.5 px-3 text-g px-3ray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 capitalize' value={input} onChange={handleOption} disabled={states.length < 1 ? true : false}>
            <option value="">-- select {name} --</option>
            {
                states.map((state, i) => <option key={i} value={name === 'state' ? state.state : state}>{name === 'state' ? state[name] : state}</option>)
            }
        </select>
    )
}

export default DropDown