import React from 'react'

const Title = (props) => {
  return (
    <>
      <span className='text-primary' style={{ fontSize: '21px', fontWeight: '700' }}>{props.subtitle}</span>
      <h2 className='main-title'>{props.title}</h2>
    </>
  )
}

export default Title