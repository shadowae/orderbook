import React, { type JSX } from 'react'
import './App.css'
import Orderbook from './Orderbook'
function App (): JSX.Element {
  return (
    <div className="App">
        <h1>Orderbook Demo</h1>
      <Orderbook dataURL={'https://dex-mainnet-webserver-ecs.zeta.markets/orderbooks/SOL?marketIndexes%5B%5D=137'}/>
    </div>
  )
}

export default App
