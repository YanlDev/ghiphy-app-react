import { useState } from "react"
// import { AddCategory } from "./components/AddCategory"
// import { GridGiphy } from "./components/GridGiphy";
import {AddCategory, GridGiphy} from './components';


export const GiphyApp = () => {
  
  const [category, setCategory] = useState(['Dragon Ball']);
  
  const onAddCategory = (newCategory)=>{
    setCategory([ newCategory,...category])
  }

  return (

    <>
      <h1 className="text-center font-bold text-fuchsia-700 text-4xl hover:text-indigo-900 p-8">
        Ghiphy App with Tailwind
      </h1>

      <AddCategory onAddCategory={ onAddCategory }/>
    
        {
          category.map(categories =>(
            <GridGiphy key={categories} categories={categories}/>
          ))
        }

    </>


  )
}
