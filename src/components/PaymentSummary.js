import React, { useState } from 'react'
import './PaymentSummary.css'

const PaymentSummary = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  const data = {
    upcoming: [
      { label: '1–30 days', value: 5000 },
      { label: '31–60 days', value: 5000 },
      { label: '61–90 days', value: 3000 },
    ],
    paid: [
      { label: '1–30 days', value: 4000 },
      { label: '31–60 days', value: 4500 },
      { label: '61–90 days', value: 2500 },
    ],
  }

  const activeData = data[activeTab]

  return (
    <div className="payment-summary">
      <div className="header">
        <h3>Payment Summary</h3>
        <div className="tabs">
          <button
            className={activeTab === 'upcoming' ? 'active' : ''}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming
          </button>
          <button
            className={activeTab === 'paid' ? 'active' : ''}
            onClick={() => setActiveTab('paid')}
          >
            Paid
          </button>
        </div>
      </div>
      <div className="chart">
        <div className="y-axis">
          <span>₹6,000</span>
          <span>₹4,000</span>
          <span>₹2,000</span>
          <span>₹1,000</span>
        </div>
        <div className="bars">
          {activeData.map((item, index) => (
            <div className="bar-container" key={index}>
              <div
                className="bar"
                style={{
                  height: `${(item.value / 6000) * 100}%`,
                  backgroundColor: '#CC99FF', // Light purple
                }}
              ></div>
              <span className="label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="x-axis-label">Upcoming</div>
    </div>
  )
}

export default PaymentSummary
