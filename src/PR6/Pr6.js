import React, { useState } from 'react'
import Form from './components/Form'
import Comments from './components/Comments'

const Pr6 = () => {
    const [comments, setComments] = useState([])
    return (
        <div className='container py-16'>
            <div className='border rounded-lg'>
                <h2 className='mt-3 text-gray-600 px-5 '>Comments({comments.length})</h2>
                <div className="flex">
                    <div className="w-1/3 px-3 border-r my-10">
                        <Form comments={comments} setComments={setComments} />
                    </div>
                    <div className={`w-2/3 px-3 ${comments.length < 1 ? 'flex' : ''}`}>
                        {
                            comments.length > 0 ?
                                comments.map((comment, i) => <Comments comment={comment} key={i} />)
                                : <h2 className='text-gray-600 mx-auto'>No comments yet</h2>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pr6