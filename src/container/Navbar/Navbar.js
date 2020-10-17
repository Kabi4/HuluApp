import React, { Component } from 'react';
import Navitem from '../../components/Navitem/Navitem';
import requests from '../../components/requests';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Navitem option={requests.fetchTrending} >Trending</Navitem>
                <Navitem option={requests.fetchTopRated}>Top Rated</Navitem>
                <Navitem option={requests.fetchActionMovies}>Action</Navitem>
                <Navitem option={requests.fetchComedyMovies}>Comedy</Navitem>
                <Navitem option={requests.fetchHorrorMovies}>Horror</Navitem>
                <Navitem option={requests.fetchRomanceMovies}>Romance</Navitem>
                <Navitem option={requests.fetchMystery}>Mystery</Navitem>
                <Navitem option={requests.fetchSciFi}>Sci-fi</Navitem>
                <Navitem option={requests.fetchWestern}>Western</Navitem>
                <Navitem option={requests.fetchAnimation}>Animation</Navitem>
                <Navitem option={requests.fetchTV}>TV Movie</Navitem>
            </div>
        )
    }
};

export default Navbar;