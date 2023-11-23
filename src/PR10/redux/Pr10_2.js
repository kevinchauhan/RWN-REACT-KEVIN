import React, { useState } from 'react'
import style from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'

const Pr10_2 = () => {
    const [input, setInput] = useState('')
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState(null)
    const state = useSelector(state => state.todo)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (input) {
            if (isEdit) {
                dispatch({ type: 'update', payload: { input, editId } })
                setIsEdit(false)
            } else {
                dispatch({ type: 'add', payload: input })
            }
        }
        setInput('')
    }
    const handleEdit = (id) => {
        setInput(state[id].data)
        setIsEdit(true)
        setEditId(id)
    }
    const handleDelete = (id) => {
        dispatch({ type: 'delete', payload: id })
    }
    return (
        <div className={style.todoContainer}>
            <h1 className={style.h1}>To-Do List</h1>
            <form action="" onSubmit={handleSubmit}>
                <div className={style.inputContainer}>
                    <input type="text" id="taskInput" placeholder="Add new task" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button id={style.addButton}>+</button>
                </div>
            </form>
            <ul id="taskList">
                {
                    state.map((e, i) => {
                        return <li className={style.li} key={i}>
                            <span className="task-text">{e.data}</span>
                            <div className="task-actions">
                                <button className={`px-2 py-1 rounded mr-2 ${style.edit}`} onClick={() => handleEdit(i)}><i className="ri-edit-2-fill"></i></button>
                                <button className={`disabled:bg-red-400 disabled:cursor-not-allowed px-2 py-1 rounded ${style.delete}`} onClick={() => handleDelete(i)} disabled={isEdit}><i className="ri-delete-bin-fill"></i></button>
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Pr10_2