import React from 'react'

const Child = React.memo(
  ({ handleCount, title }) => {
    console.log('child componet re-render');

    return (
      <>
        <button onClick={handleCount}>{title}</button>
      </>
    )
  }
)

export default Child