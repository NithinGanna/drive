import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Modify = () => {

    const [data, setData] = useState([
        {
          id: "6ab4",
          Date: "2-2-2",
          InvoiceNumber: "F",
          CustomerName: "Nithin",
          BillingAddress: "ramanthapur",
          ShippingAddress: "uppal",
          GSTIn: "0",
          Items: ["rice", "sugar"],
          BillSundrys: ["rice", "sugar"],
          TotalAmount: "0",
        },
        {
          id: "6ab2",
          Date: "2-2-2",
          InvoiceNumber: "F",
          CustomerName: "Nithin",
          BillingAddress: "ramanthapur",
          ShippingAddress: "uppal",
          GSTIn: "0",
          Items: ["rice", "sugar"],
          BillSundrys: ["rice", "sugar"],
          TotalAmount: "0",
        },
      ]);

    const { id } = useParams();

    const handleChange =() => {

    }

  return (

    <div class="fluid-container text-center pt-4">
    <div class="row">

      <div class="col-2">
        <Navbar/>
      </div>

      <div class="col-10">
        <div>
        {data.map((item, index) => {
            if(item.id===id)
            {
                      return (
                        <>
                          <p ><strong>ID:</strong>{item.id}</p>
                          <p><strong>Date:</strong>{item.Date}</p>
                          <p><strong>InvoiceNumber:</strong>{item.InvoiceNumber}</p>
                          <p><strong >CustomerName:</strong>{item.CustomerName}</p>
                          <p><strong>BillingAddress:</strong>{item.BillingAddress}</p>
                          <p><strong>ShippingAddress:</strong>{item.ShippingAddress}</p>
                          <p><strong>GSTIN:{item.GSTIn}</strong></p>
                          <p><strong>items:{item.Items}</strong></p>
                          <p><strong>BillSundrys{item.BillSundrys}</strong></p>
                          <p><strong>TotalAmount:</strong>{item.TotalAmount}</p>
                          </>
                      );
                    }
                    })}


        </div>
      </div>
    </div>
  </div>
  )
}

export default Modify

