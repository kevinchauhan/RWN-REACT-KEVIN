import React, { useState, useEffect } from 'react'
import Card from '../PR2/Components/Card'
import data from '../productsData'

const Pr4 = () => {
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState(data)

  useEffect(() => {
    const start = (page - 1) * 4
    const end = start + 4
    const updatedData = data.slice(start, end)
    setProducts(updatedData)
  }, [page])
  const totalPages = Math.ceil(data.length / 4)
  console.log(totalPages)
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
          <div>
            <ul className='row'>
              <li><button className='page-btn' onClick={() => setPage(page - 1)} style={{ padding: '10px 20px', margin: '0 5px 10px' }} type="button" disabled={page === 1 ? true : false}>Prev</button></li>
              <li><button className='page-btn' onClick={() => setPage(page + 1)} style={{ padding: '10px 20px', margin: '0 5px 10px' }} type="button" disabled={totalPages === page ? true : false}>Next</button></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pr4