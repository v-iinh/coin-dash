import React, { useState, useEffect } from "react";

function SearchTable() {
    const [coins, setCoins] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [fetchType, setFetchType] = useState("coins");

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === "Enter" && inputValue.trim() !== "") {
                const url = fetchType === "coins" ? `https://api.coingecko.com/api/v3/coins/${inputValue}` : `https://api.coingecko.com/api/v3/nfts/${inputValue}`;
                const options = { method: 'GET', headers: { accept: 'application/json' } };
                fetch(url, options)
                    .then(response => {
                        if (!response.ok) {
                            if (fetchType === "coins") {
                                alert("Crypto not found. Try looking for an NFT.");
                            } else {
                                alert("NFT not found. Try looking for a crypto.");
                            }
                            throw new Error("Invalid response");
                        }                        
                        return response.json();
                    })
                    .then(data => setCoins(data))
                    .catch(err => {
                        console.error(err);
                        setFetchType(fetchType === "coins" ? "nfts" : "coins");
                    });
            }
        };

        document.addEventListener("keypress", handleKeyPress);

        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    }, [inputValue, fetchType]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="searchBody">
            <div className={inputValue.trim() !== "" ? "searchContainer flex" : "searchContainer none"}>
                <input placeholder="Search By ID" id="searchedFor" value={inputValue} onChange={handleInputChange}/>{inputValue.trim() !== "" && (
                    <div>
                        <div className="detail">Name: {coins.name}</div>
                        <div className="detail">Rating: <span className={coins.sentiment_votes_up_percentage > 70 ? 'positive' : 'negative'}>{coins.sentiment_votes_up_percentage}%</span></div>
                        <div className="detail">Price: ${coins.market_data?.current_price?.usd.toLocaleString()}</div>
                        <div className="detail">Market Cap: ${coins.market_data?.market_cap?.usd.toLocaleString()}</div>
                        <div className="detail">Valuation: ${coins.market_data?.fully_diluted_valuation?.usd.toLocaleString()}</div>
                        <div className="detail">Volume: ${coins.market_data?.total_volume?.usd.toLocaleString()}</div>
                        <div className="detail">Highest Price: ${coins.market_data?.high_24h?.usd.toLocaleString()}</div>
                        <div className="detail">Lowest Price: ${coins.market_data?.low_24h?.usd.toLocaleString()}</div>
                        <div className="detail">Price Change 24h: <span className={coins.market_data?.price_change_percentage_24h > 0 ? 'positive' : 'negative'}>{coins.market_data?.price_change_percentage_24h.toLocaleString()}%</span></div>
                        <div className="detail">Market Cap Change 24h: <span className={coins.market_data?.market_cap_change_percentage_24h > 0 ? 'positive' : 'negative'}>{coins.market_data?.market_cap_change_percentage_24h.toLocaleString()}%</span></div>
                        <div className="detail">Total Supply: {coins.market_data?.total_supply.toLocaleString()}</div>
                        <div className="detail">Circulating Supply: {coins.market_data?.circulating_supply.toLocaleString()}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchTable;