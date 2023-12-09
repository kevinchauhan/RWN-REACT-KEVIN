import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../authContext'

const Product = () => {
    const [products, setProducts] = useState([])
    const { authenticate, setAuthenticate } = useContext(AuthContext)

    useEffect(() => {
        axios.get('http://localhost:5500/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])

    const addCart = async (product) => {
        try {
            const res = await axios.get(`http://localhost:5500/users/${authenticate.id}`)
            const user = res.data
            let cart = [{ ...product, qty: 1 }]
            if (user.cart) {
                const check = user.cart.some(e => {
                    if (e.id === product.id) {
                        e.qty += 1
                        return true
                    }
                })
                if (!check) {
                    cart = [...user.cart, { ...product, qty: 1 }]
                } else {
                    cart = user.cart
                }
            }
            let updatedUser = { ...user, cart }
            const resCart = await axios.put(`http://localhost:5500/users/${authenticate.id}`, updatedUser)
            setAuthenticate(resCart.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="container mx-auto py-16 px-4">
            <h2 className="text-3xl font-bold mb-8">Product List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {
                    products.map(product => {
                        return <div className="bg-white rounded-lg shadow p-6 flex flex-wrap" key={product.id}>
                            <div className=' overflow-hidden'>
                                <img className="h-48 w-full object-contain mb-4 rounded-lg mix-blend-multiply" src={product.image} />
                                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <span className="text-xl font-bold text-gray-800">₹{product.price}</span>
                                <button onClick={() => addCart(product)} className="border border-pink-700 text-pink-700 hover:bg-pink-700 hover:text-white font-bold py-2 px-4 rounded transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default Product