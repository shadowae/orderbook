import getData from "./GetData";
import {useEffect, useState} from "react";
import BarGraph from "./Bargraph";

const Orderbook = () => {
    const [orders, setOrders] = useState({asks: [], bids: []})
    useEffect(() => {
        getData().then(result => setOrders(result));
    },[])

    return (
        <div>
            <BarGraph orders={orders} />
        </div>
    )
}

export default Orderbook