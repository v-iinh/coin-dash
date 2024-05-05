import React, { useState, useEffect } from "react";

function CryptoTable() {
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        const options = { method: 'GET', headers: { accept: 'application/json' } };
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd', options)
            .then(response => response.json())
            .then(data => setCoins(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="cryptoContainer">
            <table className="cryptoTable">
                <thead>
                    <tr className="labelBar">
                        <th>Rank</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th id="right_align">Price</th>
                        <th id="right_align">24h Change</th>
                        <th id="right_align">Market Cap</th>
                        <th id="right_align">Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, index) => (
                        <tr key={index}>
                            <td>{coin.market_cap_rank}</td>
                            <td><img className="coinImg" src={coin.image}/>{coin.name}</td>
                            <th id="left_align">{coin.id}</th>
                            <td id="right_align">${coin.current_price.toLocaleString()}</td>
                            <td id="right_align" className={coin.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>{coin.price_change_percentage_24h}%</td>
                            <td id="right_align">${coin.market_cap.toLocaleString()}</td>
                            <td id="right_align">${coin.total_volume.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CryptoTable;
