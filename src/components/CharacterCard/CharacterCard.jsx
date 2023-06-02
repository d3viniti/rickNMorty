import React, { useContext } from 'react'
import './CharacterCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FavoritesContext } from '../../contexts/FavoritesContext';

function CharacterCard({character}) {
  //start with variable for icons
  const isFavorite = false;
  //need to access global context
  //NOTE {} not []
  const{favorites, addCharacter} = useContext(FavoritesContext)

  return (
    <div className='character-card'>
        <img src={character?.image} />
        {/* the ? tells the data to not look for this img if it can't find it */}
        <p>{character?.name}</p>
        <Link to={`/details/${character?.id}`}>See Details</Link>
        {
          isFavorite?
          <FaHeart className='heart-icon' />
          :
          <FaRegHeart className='heart-icon' 
          onClick={()=>addCharacter(character)}/>
        }
    </div>
  )
}

export default CharacterCard