import React from 'react'
import './ReviewOrders.css'

const orders = [
  {
    date: '01/04/2024',
    id: 'P12345',
    item: 'Tshirt',
    brand: 'Trends',
    location: 'Hyd',
    status: 'In Transit',
  },
  {
    date: '02/04/2024',
    id: 'ZM2345',
    item: 'Shirt',
    brand: 'Trends',
    location: 'Siddipet',
    status: 'Pending',
  },
  {
    date: '24/05/2024',
    id: 'PX6789',
    item: 'Pant',
    brand: 'Trends',
    location: 'Mumbai, India',
    status: 'Delivered',
  },
  {
    date: '11/04/2024',
    id: 'CC5432',
    item: 'Shirt',
    brand: 'Trends',
    location: 'Newdelhi',
    status: 'Delivered',
  },
  {
    date: '23/05/2024',
    id: 'AH8765',
    item: 'Shirt',
    brand: 'Trends',
    location: 'Roorkee',
    status: 'Pending',
  },
]

const OrderCard = ({ date, id, item, brand, location, status }) => {
  return (
    <div className="order-card">
      <div className="order-date">{date}</div>
      <div className="order-details">
        <div className="order-item">
          {item} <span className="brand">{brand}</span>
        </div>
        <div className="order-id">{id}</div>
      </div>
      <div className="order-location">{location}</div>
      <div className={`order-status ${status.toLowerCase().replace(' ', '-')}`}>
        {status}
      </div>
    </div>
  )
}

const ReviewOrders = () => {
  return (
    <div className="review-orders">
      <h1>Review Orders</h1>
      <div className="order-list">
        {orders.map((order, index) => (
          <OrderCard key={index} {...order} />
        ))}
      </div>
    </div>
  )
}

export default ReviewOrders
