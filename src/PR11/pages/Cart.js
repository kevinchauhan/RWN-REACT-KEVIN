import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../authContext'
import axios from 'axios'

const Cart = () => {
    const [products, setProducts] = useState([])
    const [user, setUser] = useState()
    const { authenticate, setAuthenticate } = useContext(AuthContext)

    useEffect(() => {
        if (authenticate) {
            axios.get(`http://localhost:5500/users/${authenticate.id}`)
                .then(res => {
                    if (res.data.cart) {
                        setProducts(res.data.cart)
                        setUser(res.data)
                    }
                })
                .catch(err => console.log(err))
        }
    }, [])

    const handleDelete = (id) => {
        const newUser = { ...user }
        newUser.cart.splice(id, 1)
        setUser(newUser)
        axios.put(`http://localhost:5500/users/${authenticate.id}`, user)
            .then(res => { setAuthenticate(res.data) })
    }

    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-6">Shopping Cart</h2>
            <div className="mb-4">
                {
                    products.length < 1 ? <h1 className='text-xl text-center'>No items in cart!</h1> :
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-start">Product</th>
                                    <th className="px-4 py-2">Quantity</th>
                                    <th className="px-4 py-2">Price</th>
                                    <th className="px-4 py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, id) => {
                                        return <tr key={product.id}>
                                            <td className="px-4 py-2 flex items-center">
                                                <div className='mr-2'><img className='h-10' src={product.image} alt="" /></div>
                                                {product.title}
                                            </td>
                                            <td className="px-4 py-2">
                                                <input type="number" defaultValue={product.qty} min={1} className="block text-center w-12 pl-2 rounded mx-auto" />
                                            </td>
                                            <td className="px-4 py-2 text-center">${product.price}</td>
                                            <td className="px-4 py-2 text-center">
                                                <button onClick={() => handleDelete(id)} className="text-red-500 text-3xl hover:text-red-700 focus:outline-none"><i className="ri-close-line"></i></button>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                }
            </div>
            {
                products.length > 0 &&
                <div className="mb-6">
                    <button className="w-full p-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-600 focus:outline-none">Proceed to Checkout</button>
                </div>
            }
        </div>

    )
}

export default Cart