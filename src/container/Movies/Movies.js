import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie/Movie";
import "./Movies.css";
import axios from "./../../components/axios";
import { connect } from "react-redux";
import FlipMove from "react-flip-move";
import Spinner from "../../components/Spinner/Spinner";

const Movies =(props) => {

    const [movies,setMovies] = useState([]);
    const [loading,setloading] = useState(true);

    useEffect(()=>{
      setloading(true);
        axios
      .get(props.category)
      .then((res) => {
         setMovies([...res.data.results]); 
         setloading(false);
      })
      .catch((err) => {
        alert(err.response.message);
        setloading(false);
      });
    },[props,setloading])

    return (
      <div className="movies">
      {loading
        ?
          <Spinner/>
        :
        <FlipMove>
          {movies.map((ele) => {
            return <Movie key={ele.title || ele.original_name} movie={ele} />;
          })}
        </FlipMove>
      }
      </div>
    ); 
}

const mapStateToProps = (state) => {
  return {
    category: state.categoryType.currentOption
  }
};

export default connect(mapStateToProps)(Movies);
