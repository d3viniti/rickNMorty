import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {
    //I need to get the input from the textbox
    //where will I put it?
    //need to create state to hold it
    const [query, setQuery] = React.useState('')
    

    //https://rickandmortyapi.com/api/character/?name=


    const handleSubmit = (e) =>{
        //prevent the default behavior of refreshing the page onSubmit
        e.preventDefault();

        //console log this to make sure that you can access the data before filtering
        console.log('search for', query)

        //I need to make an api call to get matching characters
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res=>{
          console.log(res.data.results)
          //What needs to happen to show this data on Homepage?
          // need to change characters to this data
          setCharacters(res.data.results)


        })
        .catch(err=>{
          //check for not found
          if (err.response.status === 404){
            alert(`No characaters named ${query}`)
        }
        else{
          console.log(err)
        }
      })
      
        //clear textbox; add value={query} to input
        setQuery('')
    }
  return (
    <form className="search-container" onSubmit={handleSubmit}>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} type="text" placeholder='Search All Characters' />
    </form>
  )
}

export default Search