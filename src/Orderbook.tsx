import getData from "./GetData";
import {useEffect, useState} from "react";

interface PropType {
    name: string
}

const Orderbook = (props: PropType) => {
    const [bids, setBids] = useState({asks: [], bids: []})
    useEffect(() => {
        getData().then(result => setBids(result));
    },[])

    return (
        <div>
            {props.name}
        </div>
    )
}

export default Orderbook