const getData = () => {
    return fetch('https://dex-mainnet-webserver-ecs.zeta.markets/orderbooks/SOL?marketIndexes%5B%5D=137')
        .then(result => result.json())
        .then(result => result.orderbooks[0])
}

export default  getData;