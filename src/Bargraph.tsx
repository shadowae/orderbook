import React from 'react'
import Table from './Table'
import { type OrderType } from './types/OrderType'
import './Bargraph.css'

interface BarGraphProps {
  orders: { asks: OrderType[], bids: OrderType[] }
}
const BarGraph: React.FC<BarGraphProps> = ({ orders }) => {
  const { asks, bids } = orders
  return (
        <div className={'bar-container'}>
            <Table graphType={'bids'} orderBookData={bids}/>
            <Table graphType={'asks'} orderBookData={asks}/>
        </div>
  )
}
export default BarGraph
