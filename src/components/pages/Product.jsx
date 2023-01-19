// import * as React from 'react';
// import React, { useEffect, useState } from 'react';
// function Product() {
//   const[list,setList] = useState([]);
//   // const[search, setSearch] = useState("");
//   // const[favourites,setFavourites] =useState([]);
//   // const getMovieRequest = async (search) => {
//   //  const url = `http://www.omdbapi.com/?s=${search}&apikey=bfca8edd`;
//   //  const response = await fetch(url);
//   //  const data = await response.json();
//   //  if(data.Search){
//   //  setMovies(data.Search);
//   //  }
//   // };
 
//   useEffect( async () =>{
//     const url = `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products`;
//    const response = await fetch(url);
//    const data = await response.json();
//    setList(data);
//   //  getMovieRequest(search);
//   },[]);
 
// //   const AddFavouriteMovie = (movie) =>{
// //    if(!favourites.includes(movie)){
// //      const newFavouriteList = [...favourites, movie];
// //      setFavourites(newFavouriteList);
// //    }
// //  };
 
// //  const removeFavouriteMovie = (movie) =>{
// //    const newFavouriteList = favourites.filter((favourite)=> favourite.imdbID !== movie.imdbID);
// //    setFavourites(newFavouriteList);
// //  };
 
 
//  return (
//    <div className="movie-app">
//       {/* <MovieListHeading heading="Movies" />
//        <SearchBox search={search} setSearch={setSearch}/>
//        <MovieList handleFavouriteClick={AddFavouriteMovie} movies={movies}/>
 
//        <MovieListHeading heading="Favourite Movies" />
//        <MovieList movies ={favourites} />
//        <MovieList handleFavouriteClick={removeFavouriteMovie} movies={favourites}/> */}

//    </div>
//  );
//  }
 
//  export default Product;
 

// //  import React, { useState } from 'react'
// // import axios from 'axios'
// // export const Product_detail = () => {
// //     const[toshow,setToshow]=useState()

// //     React.useEffect(()=>{
// //          toset()

// //     },[])
// //      const toset=()=>{
// //         axios.get("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products").then((x)=>{
// //             setToshow(x.data)    
// //         console.log(x)
// //         })
// //       }
    

// //     return (
// //         <div>
// //           {toshow?.map((item)=>(
               
// //                 <p> title={item.title} price={item.discounted_price} orignalPrice={item.original_price}  rating={item.rating}</p>
// //             ))}

// //         </div>
// //     )}