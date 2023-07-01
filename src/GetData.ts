import { type OrderType } from './types/OrderType'

const getData = async (url: string): Promise<{ asks: [OrderType], bids: [OrderType] }> => {
  return await fetch(url)
    .then(async result => await result.json())
    .then(result => result.orderbooks[0])
}
export default getData
