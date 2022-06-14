import React from 'react'

export default function TransactionsContainer({show, iban}) {
  return (
    show ? 
    <div>
        {iban}
    </div> : <></>
  )
}
