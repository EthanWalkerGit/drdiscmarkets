import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function Grid() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/albums')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div className="mt-24 flex flex-row justify-center">
      <div className="max-w-fullPage w-full mx-auto">
        <div className="font-poppins font-bold text-yellow text-4xl">Browse Our Selection</div>
        <div className="grid gap-x-10 gap-y-4 mt-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
          {albums.map(album => (
            <div key={album._id} className="flex flex-col bg-listing text-white w-cardw h-cardh border-2 border-gray font-poppins rounded-xl">
              <div className="flex justify-center px-5 pt-5">
                <img src={album.cover} alt={album.title} className="w-albumw h-albumh object-cover rounded-md" />
              </div>
              <div className="flex flex-col h-full pl-5 pt-2 ">
                <h2 className="font-merriweather font-bold text-lg overflow-ellipsis overflow-hidden whitespace-nowrap">{album.name}</h2>
                <h3 className="text-md text-gray">{album.artist}</h3>
                <div className="flex justify-items-start">
                  {album.genres.map((genre, index) => (
                    <p className="mr-1 my-1 px-2 min-w-gw font-light text-xs text-gray border-2 border-dark-gray rounded-md" key={index}>{genre}</p>
                  ))}
                </div>
                <div className="mt-auto mb-3">
                  <div className="flex flex-row justify-between">
                    <p className="text-lg font-light">{"$"+album.price}</p>
                    <button className="h-7 w-24 text-sm mr-2 bg-cart text-black font-merriweather font-thin rounded-full">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Grid;