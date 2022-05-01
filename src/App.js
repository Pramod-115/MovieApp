import React from "react";
import InputFeild from "./components/input_field";
import MovieList from "./components/movieList"

class App extends React.Component {

    state = {movies: []}
    process = async (term) => {

        const options = {
            method: "GET"
        }
        const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=4116a69c&s=${term}`, options);
        const data = (await response.json()).Search;
        this.setState({movies : data});
    }

    render () {
        return (
            <>  
                <div className="logo_con">
                    <i className="fa-solid fa-film"></i> <span>Movies App</span>
                </div>
                <div className="input_con">
                    <InputFeild process={this.process}/>
                </div>
                <div className="movies_con row g-5">
                    <MovieList movies={this.state.movies}/>
                </div>
            </>
        )
    }
}

export default App;