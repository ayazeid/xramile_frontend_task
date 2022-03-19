import React from 'react'

function CheckoutSummery(props) {
    const {total}=props
  return (
    <div>
    <p>Checkout Summery</p>
    <p><span>Total: </span>{total} $</p>
    </div>
  )
}

export default CheckoutSummery