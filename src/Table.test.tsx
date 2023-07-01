import React from 'react'
import { render } from '@testing-library/react'
import Table from './Table'
describe('Table', () => {
  const orderBookData = [
    { price: 100, size: 50 },
    { price: 99, size: 30 }
  ]

  it('should render the bid table with correct headers and rows and order', () => {
    const { getByText } = render(
            <Table graphType="bids" orderBookData={orderBookData} />
    )

    // Check table headers
    const sizeHeader = getByText('Size')
    const priceHeader = getByText('Price')
    expect(sizeHeader).toBeInTheDocument()
    expect(priceHeader).toBeInTheDocument()

    // Assert the order of table headers
    expect(sizeHeader.nextSibling).toBe(priceHeader)

    // Check table rows
    expect(getByText('50')).toBeInTheDocument()
    expect(getByText('100')).toBeInTheDocument()
  })
  it('should render the asks table with correct headers and rows and order', () => {
    const { getByText } = render(
            <Table graphType="asks" orderBookData={orderBookData} />
    )

    // Check table headers
    const sizeHeader = getByText('Size')
    const priceHeader = getByText('Price')
    expect(sizeHeader).toBeInTheDocument()
    expect(priceHeader).toBeInTheDocument()

    // Assert the order of table headers
    expect(priceHeader.nextSibling).toBe(sizeHeader)

    // Check table rows
    expect(getByText('50')).toBeInTheDocument()
    expect(getByText('100')).toBeInTheDocument()
  })
})
