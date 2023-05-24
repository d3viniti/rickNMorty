import React from 'react'
import {useParams} from 'react-router-dom'
import './CharacterDetails.css'
import axios from 'axios'

function CharacterDetails() {
    //this page shows the details for a specific character
    //how do I know which one?
    //the id is in the url
    //must use the EXACT name chosen as in the url of the path following the colon

    const {characterId} = useParams()


    //create state to hold character data
    //be VERY intentional when using singular/plural tense with state to not confuse yourself
    const [character, setCharacter] = React.useState('')
    //if your state is holding an array, make sure to initialize state to an empty array!

    // https://rickandmortyapi.com/api/character/2
    //get the data when the page loads
    React.useEffect(
    ()=>{
    //console.log your useEffect - all heck can break loose if this is broken and caught later on!
    //make api call to get character data
    axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
    .then(res => {
        console.log(res.data)
        //check here to ensure that you're getting the correct data
        //what do I do with this data?
        //store it in state, need to create state!
        setCharacter(res.data)
    })
    .catch(err => console.log(err))
    }, [] //run once page loads

    )
  return (
    <div className="details-container">
        <div className="container-info">
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location.name}</p>
            <p>Species: {character?.species}</p>
        </div>   
        {/* test for {characterId} here! */}
        </div>
  )
}

export default CharacterDetails