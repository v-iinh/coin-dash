import React from "react";

function updateNav(clicked) {
    window.location = `/${clicked}`;
}

function Navbar() {
    
    setTimeout(() => {
        const searchedForElement = document.getElementById("searchedFor");
        if (searchedForElement) {
            const savedText = localStorage.getItem("searchText");
            if (savedText) {
                searchedForElement.innerHTML = savedText;
            }
        }
    }, 0);

    return (
        <div className="navContainer">
            <div onClick={() => updateNav("")} id="home">Home</div>
            <div onClick={() => updateNav("learn")} id="learn">Learn</div>
            <div onClick={() => updateNav("crypto")} id="crypto">Crypto</div>
            <div onClick={() => updateNav("nft")} id="nft">NFT</div>
            <div onClick={() => updateNav("search")} id="search">Search</div>
        </div>
    );
}

export default Navbar;
