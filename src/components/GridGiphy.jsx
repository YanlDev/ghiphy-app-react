// import { useEffect, useState } from "react";
// import { getGifs } from "../utils/getGifs";
import { useFetchGifts } from "../hooks/useFetchGifts";

export const GridGiphy = ( { categories} ) => {

  const { images, isLoading} = useFetchGifts( categories )
  
  return (
    <>
      <h2 className="text-center text-2xl text-blue-600 font-bold py-4">Categoria: {categories}</h2>

      {
        isLoading && (<h2>Cargando....</h2>)
      }
      <div className="sm:flex sm:flex-wrap gap-x-4 mr justify-center items-center">
        {
          images.map(img=>(
            <figure key={img.id} className="bg-gray-200 max-w-md h-fit p-3 my-4 w-fit rounded-lg flex flex-col justify-center">
              <img src={img.imagen} alt={img.titulo} />
              <figcaption className="text-center py-2 text-lg font-semibold">{img.titulo}</figcaption>
            </figure>
          ))
        }
      </div>
      
    </>
  )
}
