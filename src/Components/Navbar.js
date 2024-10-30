import React from 'react'

const Navbar = () => {
  return (
    <div>
        <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="/invoices">Invoices</a>
        </li>
        </ul>
    </div>
  )
}

export default Navbar