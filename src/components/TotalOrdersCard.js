import React from 'react'
import './TotalOrdersCard.css'
// import { ReactComponent as CartIcon } from './cart-icon.svg' // Replace with your cart SVG icon

const TotalOrdersCard = () => {
  return (
    <div className="total-orders-card">
      <div className="card-header">
        {/* <CartIcon className="cart-icon" /> */}
        <span className="title">Total Orders</span>
        <div className="menu-icon">⋮</div>
      </div>
      <div className="card-body">
        <h1 className="order-count">400</h1>
        <div classN ame="order-stats">
          <span className="growth">
            <span className="growth-icon">⬆</span> 10%
          </span>
          <span className="comparison">vs last month</span>
        </div>
        <div className="chart-placeholder">
          <svg
            width="100"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
            className="chart-line"
          >
            <polyline
              points="10,40 30,30 50,35 70,20 90,10"
              fill="none"
              stroke="#4caf50"
              strokeWidth="2"
            />
            <circle cx="30" cy="30" r="3" fill="#4caf50" />
            <circle cx="50" cy="35" r="3" fill="#4caf50" />
            <circle cx="70" cy="20" r="3" fill="#4caf50" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default TotalOrdersCard
