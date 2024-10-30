import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

const Invoices = () => {

    const data = [
        {
            "id": "6ab4",
            "Date": "2-2-2",
            "InvoiceNumber": "F",
            "CustomerName": "Nithin",
            "BillingAddress":"ramanthapur",
            "ShippingAddress":"uppal",
            "GSTIn":"0",
            "Items":["rice","sugar"],
            "BillSundrys":["rice","sugar"],
            "TotalAmount":"0",
        },
        {
            "id": "6ab2",
            "Date": "2-2-2",
            "InvoiceNumber": "F",
            "CustomerName": "Nithin",
            "BillingAddress":"ramanthapur",
            "ShippingAddress":"uppal",
            "GSTIn":"0",
            "Items":["rice","sugar"],
            "BillSundrys":["rice","sugar"],
            "TotalAmount":"0",
        }
    ];

//     Id: string;
// Date: string;
// InvoiceNumber: number;
// CustomerName: string;
// BillingAddress: string;
// ShippingAddress: string;
// GSTIN: string;
// Items: InvoiceItem[];
// BillSundrys: InvoiceBillSundry[];
// TotalAmount: number;

  return (
    <div class="fluid-container text-center pt-4">
    <div class="row">

      <div class="col-2">
        <Navbar/>
      </div>

      <div class="col-10">
        <div>
            <div>
                <a href="/invoices/add" type="button" class="btn btn-primary">Add</a>
            </div>
            <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>InvoiceNumber</th>
                    <th>CustomerName</th>
                    <th>BillingAddress</th>
                    <th>ShippingAddress</th>
                    <th>GSTIN</th>
                    <th>Items</th>
                    <th>BillSundrys</th>
                    <th>TotalAmount</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                      return (
                        <tr key={index}>
                            <Link to={`/invoices/${item.id}`}>
                          <th scope="row">{item.id}</th>
                          </Link>
                          <td>{item.Date}</td>
                          <td>{item.InvoiceNumber}</td>
                          <td>{item.CustomerName}</td>
                          <td>{item.BillingAddress}</td>
                          <td>{item.ShippingAddress}</td>
                          <td>{item.GSTIn}</td>
                          <td>{item.Items}</td>
                          <td>{item.BillSundrys}</td>
                          <td>{item.TotalAmount}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Invoices