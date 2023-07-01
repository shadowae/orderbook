import getData from "./GetData";
import {useEffect, useState} from "react";
import BarGraph from "./Bargraph";

interface PropType {
    dataURL: string;
}
const Orderbook = (props: PropType) => {
    const {dataURL} = props;
    const [updatedTS, setUpdatedTS] = useState('')
    const [orders, setOrders] = useState({asks: [], bids: []})

    useEffect(() => {
        // Function to fetch data from API and update state
        const fetchData = async () => {
            const currentTimestamp = new Date().toLocaleTimeString();
            const currentDatestamp = new Date().toLocaleDateString();
            setUpdatedTS(`${currentDatestamp} ${currentTimestamp}`);

            const result = await getData(dataURL);
            setOrders(result);
        };

        // Fetch data initially
        fetchData();

        // Fetch data every 5 seconds
        const interval = setInterval(fetchData, 5000);

        // Clean up the interval when component unmounts
        return () => clearInterval(interval);
    }, [dataURL]);

    return (
        <div>
            <BarGraph orders={orders} />
            <footer>Last updated on: {updatedTS}</footer>
        </div>
    )
}

export default Orderbook