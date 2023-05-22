import { useState } from "react"

export const AddCategory = ( { onAddCategory } ) => {
  
  const [inputValue, setInputValue] = useState('');
  
  const hanldeChange = (e)=>{
    
    setInputValue(e.target.value)
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!inputValue.trim()) return;
    onAddCategory ( inputValue.trim() );
    setInputValue('');

  }
  
  return (
    <form className="text-center w-full" onSubmit={ handleSubmit }>
      <input 
        onChange={hanldeChange}
        className="w-full sm:w-3/4 border-2 border-solid border-purple-700 rounded-md p-2"
        type="text"
        placeholder="Ingresa tu busqueda" 
        value={ inputValue }
      />
    </form>
  )
}
