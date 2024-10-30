import React, { useState } from 'react'
import Navbar from './Navbar'

const Add = () => {



    const [id,setId] = useState();
    const [itemName,setItemName] = useState('');
    const [quantity,setQuantity] = useState();
    const [price,setPrice] = useState();
    const [amount,setAmount] = useState();

    const handleSubmit = async (e) => {
        handleAmount();
        e.preventDefault();
    }

    const handleAmount = async (e) => {
        setAmount(price*quantity);
    }


  return (
    <div class="fluid-container text-center pt-4">
    <div class="row">

      <div class="col-2">
        <Navbar/>
      </div>

      <div class="col-10">
        <div>
        <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="InvoiceId" className="form-label">Id</label>
                <input
                  type="text"
                  className="form-control"
                  id="InvoiceId"
                  placeholder="Enter Id"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InvoiceItemName" className="form-label">itemName</label>
                <input
                  type="text"
                  className="form-control"
                  id="InvoiceItemName"
                  placeholder="Enter ItemName"
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InvoicePrice" className="form-label">Price</label>
                <input
                  type="number"
                  className="form-control"
                  id="InvoicePrice"
                  placeholder="Enter Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="InvoiceQuantity" className="form-label">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="InvoiceQuantity"
                  placeholder="Enter Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
              <div className='mb-3'>
                amount : {amount}
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Add