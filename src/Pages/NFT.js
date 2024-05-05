import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import NFT_Table from "../Components/NFT_Table";

function NFT(){
    useEffect(() => {
        document.getElementById("nft").style.color = "#5fffff";
        return () => {
            document.getElementById("nft").style.color = "";
        };
    }, []);

    return (
        <div>
            <Navbar/>
            <NFT_Table/>
        </div>
    )
}

export default NFT