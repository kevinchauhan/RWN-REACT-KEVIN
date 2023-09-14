import React, { useState } from 'react'
import Card from './Components/Card'
import data from '../productsData'

const Pr2 = () => {
    
    const [products] = useState(data)
    
    return (
        <>
            <section className='product-list'>
                <div className="container py-40 px-0">
                    <h1 style={{ marginBottom: "20px", padding: '0 12px' }}>Product List</h1>
                    <div className="row">
                        {products.map(product => {
                            return <Card data={product} key={product.id} />
                        })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pr2
