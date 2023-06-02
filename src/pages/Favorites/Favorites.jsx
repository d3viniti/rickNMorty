import React, {useContext} from 'react'
import './Favorites.css'
import { FavoritesContext } from '../../contexts/FavoritesContext'
import CharacterCard from '../../components/CharacterCard/CharacterCard'

function Favorites() {
    //show all the favorite characters
    //where are they? in the context
    //need to access global context
  //NOTE {} not []
  const{favorites} = useContext(FavoritesContext)
  return (
    <div className='favorites-container'>
        <h1>My Favorite Characters</h1>
        <div className='favorite-characters'>
            {
                //top portion: is the length of favorites greater than 0? if so, 
                //map it. If not, display the p tag
                favorites.length > 0 ?
                favorites.map(item=><CharacterCard 
                    key={item.id}
                    character={item} />)
                :
                <p>No favorites selected yet.</p>
            }
        </div>
    </div>
  )
}

export default Favorites