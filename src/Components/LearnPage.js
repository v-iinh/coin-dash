import React from "react";

function LearnPage(){
    return(
        <div className="learnContain">
            <div className="learnTitle">
                What is Cryptocurrency ?
            </div>
            <div className="description">
                Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions. It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead of being physical money carried around and exchanged in the real world, cryptocurrency payments exist purely as digital entries to an online database describing specific transactions. When you transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is stored in digital wallets.
            </div>
            <div className="learnTitle">
                What is an NFT ?
            </div>
            <div className="description">
                Non-fungible tokens (NFTs) are assets that have been tokenized via a blockchain. Tokens are unique identification codes created from metadata via an encryption function. These tokens are then stored on a blockchain, while the assets themselves are stored in other places. The connection between the token and the asset is what makes them unique. NFTs can be traded and exchanged for money, cryptocurrencies, or other NFTs—it all depends on the value the market and owners have placed on them. For instance, you could draw a smiley face on a banana, take a picture of it (which has metadata attached to it), and tokenize it on a blockchain. Whoever has the private keys to that token owns whatever rights you have assigned to the token.
            </div>
        </div>
    )
}

export default LearnPage