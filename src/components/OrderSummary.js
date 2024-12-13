import React from 'react'
import './OrderSummary.css'

const OrderSummary = () => {
  const orders = [
    {
      label: 'Pending Orders',
      percentage: 40,
      count: '160/400 Orders',
      color: '#FFC107', // Yellow
    },
    {
      label: 'Shipped Orders',
      percentage: 30,
      count: '120/400 Orders',
      color: '#FF007F', // Pink
    },
    {
      label: 'Delivered Orders',
      percentage: 30,
      count: '120/400 Orders',
      color: '#D8B1FF', // Purple
    },
  ]

  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      {orders.map((order, index) => (
        <div className="order-row" key={index}>
          <div className="order-label">
            <span>{order.label}</span>
            <span className="order-percentage">{order.percentage}%</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{
                width: `${order.percentage}%`,
                backgroundColor: order.color,
              }}
            ></div>
          </div>
          <div className="order-count">{order.count}</div>
        </div>
      ))}
    </div>
  )
}

export default OrderSummary
