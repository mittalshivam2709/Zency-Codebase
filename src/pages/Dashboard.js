import React from 'react'
import OrderSummary from '../components/OrderSummary'
import PaymentSummary from '../components/PaymentSummary'
import ReviewOrders from '../components/ReviewOrders'
import RequestsTable from '../components/RequestsTable'
// import TotalOrdersCard from '../components/TotalOrdersCard'
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* <div className="summary-section"> */}
        {/* <TotalOrdersCard/> */}
      {/* </div> */}

      <div className="lol">
        <OrderSummary />
        <PaymentSummary />
        <ReviewOrders />
      </div>

      <div className="requests-section">
        <RequestsTable title="Bulk Buy Requests" />
        <RequestsTable title="Auction Requests" />
        <RequestsTable title="Spot Buy Requests" />
      </div>
    </div>
  )
}

export default Dashboard
