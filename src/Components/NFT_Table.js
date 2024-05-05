import React, { useState, useEffect } from "react";

function NFT_Table() {
    const [coins, setCoins] = useState([]);
    const [additionalData, setAdditionalData] = useState({});

    useEffect(() => {
        const options = { method: 'GET', headers: { accept: 'application/json' } };
        fetch('https://api.coingecko.com/api/v3/nfts/list?order=market_cap_usd_asc&per_page=100&page=1', options)
            .then(response => response.json())
            .then(data => setCoins(data))
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        coins.forEach(coin => {
            fetch(`https://api.coingecko.com/api/v3/nfts/${coin.id}`, { method: 'GET', headers: { accept: 'application/json' } })
                .then(response => response.json())
                .then(data => setAdditionalData(prevData => ({ ...prevData, [coin.id]: data })))
                .catch(err => {
                    console.error(err);
                    setAdditionalData(prevData => ({ ...prevData, [coin.id]: { error: true } }));
                });
        });
    }, [coins]);

    return (
        <div className="cryptoContainer">
            <table className="cryptoTable">
                <thead>
                    <tr className="labelBar">
                        <th>Rank</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th id="right_align">Floor Price</th>
                        <th id="right_align">24h Change</th>
                        <th id="right_align">Market Cap</th>
                        <th id="right_align">24h Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td><img className="coinImg" src={additionalData[coin.id]?.image?.small}/>{coin.name}</td>
                            <th id="left_align">{coin.id}</th>
                            <td id="right_align">{additionalData[coin.id]?.floor_price?.usd ? `$${additionalData[coin.id]?.floor_price?.usd.toLocaleString()}` : <span className="error">ERROR</span>}</td>
                            <td id="right_align" className={(additionalData[coin.id]?.error || coin.price_change_percentage_24h === undefined) ? 'error' : (coin.price_change_percentage_24h > 0 ? 'positive' : 'negative')}>{(additionalData[coin.id]?.error || coin.price_change_percentage_24h === undefined) ? 'ERROR' : `${additionalData[coin.id]?.one_day_average_sale_price_24h_percentage_change?.toLocaleString()}%`}</td>
                            <td id="right_align">{additionalData[coin.id]?.market_cap?.usd ? `$${additionalData[coin.id]?.market_cap?.usd.toLocaleString()}` : <span className="error">ERROR</span>}</td>
                            <td id="right_align">{additionalData[coin.id]?.volume_24h?.usd ? `$${additionalData[coin.id]?.volume_24h?.usd.toLocaleString()}` : <span className="error">ERROR</span>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default NFT_Table;