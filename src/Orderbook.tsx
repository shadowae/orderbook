import getData from './GetData'
import React, { useEffect, useState, type JSX } from 'react'
import BarGraph from './Bargraph'
import { type OrderType } from './types/OrderType'

interface PropType {
  dataURL: string
}

interface OrdersState {
  asks: OrderType[]
  bids: OrderType[]
}
const Orderbook = (props: PropType): JSX.Element => {
  const { dataURL } = props
  const [updatedTS, setUpdatedTS] = useState('')
  const [orders, setOrders] = useState<OrdersState>({ asks: [], bids: [] })

  useEffect(() => {
    // Function to fetch data from API and update state
    const fetchData = async (): Promise<void> => {
      const currentTimestamp = new Date().toLocaleTimeString()
      const currentDatestamp = new Date().toLocaleDateString()
      setUpdatedTS(`${currentDatestamp} ${currentTimestamp}`)

      const result = await getData(dataURL)
      setOrders(result)
    }

    // Fetch data initially
    fetchData()
      .catch(e => { console.log('Error is found', e) })

    // Fetch data every 5 seconds
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const interval = setInterval(fetchData, 5000)

    // Clean up the interval when component unmounts
    return () => { clearInterval(interval) }
  }, [dataURL])

  return (
        <div>
            <BarGraph orders={orders} />
            <footer>Last updated on: {updatedTS}</footer>
        </div>
  )
}

export default Orderbook
