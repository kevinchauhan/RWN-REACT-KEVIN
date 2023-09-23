import React, { useState, useEffect } from 'react'
import Card from '../PR2/Components/Card'
import data from '../productsData'

const Pr4 = () => {
  const [page, setPage] = useState(1)
  const [products, setProducts] = useState(data)
  const [filter, setFilter] = useState(data)

  const handleSearch = (value) => {
    if (value) {
      const filteredProducts = data.filter(product => {
        const title = product.category.toUpperCase()
        if (title.includes(value.toUpperCase())) {
          return product
        } else {
          return null
        }
      })
      setFilter(filteredProducts)
    } else {
      setFilter(data)
    }
  }

  useEffect(() => {
    const start = (page - 1) * 3
    const end = start + 3
    const updatedData = filter.slice(start, end)
    setProducts(updatedData)
  }, [page, filter])

  const totalPages = Math.ceil(filter.length / 3)

  return (
    <>
      <section className='product-list'>
        <div className="container py-40 px-0">
          <div style={{ textAlign: 'center', marginBottom: '10px', paddingBottom: '10px' }}>
            <label htmlFor="">Search Category : </label>
            <input style={{ padding: '10px' }} type="text" placeholder='eg: laptop,smartphone' onKeyUp={(e) => handleSearch(e.target.value)} />
          </div>
          <h1 style={{ marginBottom: "20px", padding: '0 12px' }}>Product List</h1>
          <div className="row">
            {products.map(product => {
              return <Card data={product} key={product.id} />
            })
            }
          </div>

          <div>
            {
              products.length > 1 ?
                <ul className='row'>
                  <li><button className='page-btn' onClick={() => setPage(page - 1)} style={{ padding: '10px 20px', margin: '0 5px 10px' }} type="button" disabled={page === 1 ? true : false}>Prev</button></li>
                  <li><button className='page-btn' onClick={() => setPage(page + 1)} style={{ padding: '10px 20px', margin: '0 5px 10px' }} type="button" disabled={totalPages === page ? true : false}>Next</button></li>
                </ul>
                : <h3 style={{ padding: '0 20px' }}>No items matched</h3>
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Pr4