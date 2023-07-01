import React, { type JSX } from 'react'
import type { OrderType } from './types/OrderType'
interface PropType {
  graphType: string
  orderBookData: OrderType[]
}
const getTableHeader = (graphType: string): JSX.Element => {
  if (graphType === 'bids') {
    return (
            <>
                <th>Size</th>
                <th colSpan={2} style={{ width: '70%' }}>Price</th>
            </>
    )
  } else {
    return (
            <>
                <th colSpan={2} style={{ width: '70%' }}>Price</th>
                <th>Size</th>
            </>
    )
  }
}
const getTableRow = (graphType: string, level: OrderType, index: number, totalSize: number): JSX.Element => {
  if (graphType === 'bids') {
    return (
            <tr key={index}>
                <td> {level.size} </td>
                <td>
                    <div
                        style={{
                          width: '100%',
                          position: 'relative',
                          height: '20px'
                        }}
                    >
                        <div
                            style={{
                              width: `${(level.size / totalSize) * 100}%`,
                              backgroundColor: 'blue',
                              height: '100%',
                              position: 'absolute',
                              right: 0
                            }}
                        />
                    </div>
                </td>
                <td style={{ width: '20%' }}>{level.price}</td>
            </tr>
    )
  } else {
    return (
            <tr key={index}>
                <td style={{ width: '10%' }}>{level.price}</td>
                <td>
                    <div
                        style={{
                          width: `${(level.size / totalSize) * 100}%`,
                          backgroundColor: 'blue',
                          height: '20px'
                        }}
                    />
                </td>
                <td style={{ width: '10%' }}> {level.size} </td>
            </tr>
    )
  }
}
const Table = (props: PropType): JSX.Element => {
  const { graphType, orderBookData } = props

  // Calculate the total size of all levels
  const totalSize = orderBookData.reduce((acc, level) => acc + level.size, 0)

  return (
        <div>
            <h1>{graphType.toUpperCase()}</h1>
            <table>
                <thead>
                <tr>
                    {getTableHeader(graphType)}
                </tr>
                </thead>
                <tbody>
                {orderBookData.length < 1 && <h3>No data available</h3>}
                {orderBookData.map((level, index) => getTableRow(graphType, level, index, totalSize))}
                </tbody>
            </table>
        </div>
  )
}
export default Table
