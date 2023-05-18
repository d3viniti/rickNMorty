import React, {useEffect, useState} from 'react'
import './Homepage.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'


function Homepage() {
    //create state for characters
    //make sure to set initial array of useState to an empty array!
    const [characters, setCharacters] = useState([])

    //https://rickandmortyapi.com/api/character


    //I need to make an api call when the page loads
    //so I need useEffect
    useEffect(
        ()=>{
            console.log('homepage loaded')
            //call api to get characters
            axios.get(`https://rickandmortyapi.com/api/character`)
            .then(res=>{
                console.log(res.data.results)
                //above is specifiying which data you want from the api, ensure 
                //you have it before moving on!
                //store this data in state
                setCharacters(res.data.results)
                //to check this works, go to inspector>components>Homepage
            }

            )
            .catch(err=>console.log(err))

        }, []//empty array means run one time when page loads
    )
  return (
    <div className='homepage-container'>
        <h1>Main Characters</h1>
        <div className='characters-container'>
            {
            //put something in a p tag first to test
            // characters.map(item=><p key={item.id}>{item.name}</p>)
            characters.map(item=><CharacterCard 
                key={item.id}
                character={item} />)
            }
        </div>
    </div>
  )
}

export default Homepage