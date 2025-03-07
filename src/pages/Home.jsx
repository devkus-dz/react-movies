import Card from "../components/Card";
import Search from "../components/Search";
import { useState, useEffect } from "react";
import {searchMovies, getPopularMovies} from '../services/api';

function Home(){

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }catch (err){
                console.log(err);
                setError("failed to load movies !");
            }finally{
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []);

    const search = async () => {
        
        if (!searchQuery.trim()) return;
        if(loading) return;
        setLoading(true);
        console.log(searchQuery);

        try {
            const searchResults = await searchMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch (err) {
            console.log(err);
            setError("failed to search movie")
        }finally{
            setLoading(false);
        }
    }

    return (
        <div className="container">
            <Search searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    search={search}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                { movies.map( (movie) => (
                                           <Card data={movie} key={movie.id} />
                                        )
                )}
            </div>
        </div>
    );
}

export default Home;