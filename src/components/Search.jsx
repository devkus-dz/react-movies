import { useState } from "react";
import {searchMovies} from '../services/api';

function Search({searchQuery, setSearchQuery, search}){

    const handleSubmit = async (e) => {
        e.preventDefault();
        search();
    };

    return (
        <form className="flex justify-center" onSubmit={handleSubmit}>
            <input  type="text" className="w-96" 
                    placeholder="Search for movies ..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn ml-2">Search</button>
        </form>
    )
}

export default Search;