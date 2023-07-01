const getData = (url: string) => {
    return fetch(url)
        .then(result => result.json())
        .then(result => result.orderbooks[0])
}

export default  getData;