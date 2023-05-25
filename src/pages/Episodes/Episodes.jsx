import React from 'react'
import './Episodes.css'
import axios from 'axios'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Episodes() {
  //create state for episode numbers
    const [options, setOptions] = React.useState([])
    const [selectedOption, setSelectedOption] = React.useState(1)
    //above state is intialized to 1 because that's where we want it to start
    const [selectedEpisode, setSelectedEpisode] = React.useState([])
    const [characterList, setCharacterList] = React.useState([])

  //when page loads, I need a dropdown UI for episodes
  //https://rickandmortyapi.com/api/episode
  React.useEffect(
    ()=>{
      //make API call to find out how many episodes
      axios.get(`https://rickandmortyapi.com/api/episode`)
        .then(res=>{
          console.log(res.data.info.count)
          //I need to create an array of numbers 1 thru 51
          //can't .push new items to state, create a new array to be stored in state
          const newOptions = []
          //when you need a value to use right away, don't store in state
          for (let i = 1; i <= res.data.info.count; i++){
            newOptions.push(i)
          }
          // console.log(newOptions)
          //store this in state
          setOptions(newOptions)
        })
        .catch(err=> console.log(err))
    }, []
  )

  //function to call when I select episode
  //onChange or similar events take e parameter
  const handleSelectChange = (e) =>{
    // console.log(e.target.value)
    //create state for above value
    setSelectedOption(e.target.value)
    //do the work to get the data OR below
  }

  React.useEffect(
  ()=>{
    console.log(selectedOption)
    //I need to get data from this episode
    //https://rickandmortyapi.com/api/episode/28
    //but then I need to make an API call for each character in episode
    //use async JS for multiple API calls
    //async function returns a promise
    const fetchEpisodeData = async () => {
      try{
        //get specific episode data
        const res = await axios.get(`https://rickandmortyapi.com/api/episode/${selectedOption}`)
        
        console.log(res.data)
        //store above data in new state
        setSelectedEpisode(res.data)

        //res.data.characters is array with all endpoints for characters in this episode
        //Promise.all will not return response until all api calls are done
        const episodeCharacters = await Promise.all(
          res.data.characters.map(url => {
            return axios.get(url).then(res => res.data)
          })
        )
        //this console.log gives an array of all characters in a selected episode via multiple api calls
        console.log(episodeCharacters)
        //store this data in a new state so we can map it to our CharacterCards
        setCharacterList(episodeCharacters)
      } 
      catch(err){
        console.log(err)
      }

    }
    //remember to call this function
    fetchEpisodeData()

  }, [selectedOption] //if you put a state in this [] then it will run the code anytime that state changes

  )
  

  return (
    <div className="episodes-container">
      <div>
        <label>Select an episode:</label>
        <select id="select-episode" onChange={handleSelectChange}>
        {
          options.map(num =><option key={num} value={num}>{`Episode ${num}`}</option>)
        }
        </select>
      </div>
      <div>
        <div className="episode-info">
          <p>Episode Name: {selectedEpisode?.name}</p>
          <p>Air Date: {selectedEpisode?.air_date}</p>
        </div>
        <div className="character-container">
          {    
              characterList.map(item=><CharacterCard 
                key={item.id}
                character={item} />)
          }      
        </div>
      </div>
    </div>
  )
}

export default Episodes