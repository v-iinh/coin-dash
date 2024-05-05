import React, { useEffect } from "react";
import Navbar from "../Components/Navbar";
import SearchTable from "../Components/SearchTable";

function Search(){
    useEffect(() => {
        document.getElementById("search").style.color = "#5fffff";
        return () => {
            document.getElementById("search").style.color = "";
        };
    }, []);

    return (
        <div>
            <Navbar/>
            <SearchTable/>
        </div>
    )
}

export default Search