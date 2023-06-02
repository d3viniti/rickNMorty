import React, { useContext } from 'react'
import './CharacterCard.css'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FavoritesContext } from '../../contexts/FavoritesContext';

function CharacterCard({character}) {
  //start with variable for icons
  const [isFavorite, setIsFavorite] = React.useState(false)
  //const isFavorite = false;
  //need to access global context
  //NOTE {} not []
  const{favorites, addCharacter, removeCharacter} = useContext(FavoritesContext)


  //need useEffect to set value of isFavorite
  React.useEffect(
    ()=>{
      //is this character already in favorites?
      setIsFavorite(favorites.find(item=>item.id === character.id))

    }, [favorites]
    //se
  )


  return (
    <div className='character-card'>
        <img src={character?.image} />
        {/* the ? tells the data to not look for this img if it can't find it */}
        <p>{character?.name}</p>
        <Link to={`/details/${character?.id}`}>See Details</Link>
        {
          isFavorite?
          <FaHeart className='heart-icon' 
          onClick={()=>removeCharacter(character.id)}/>
          :
          <FaRegHeart className='heart-icon' 
          onClick={()=>addCharacter(character)}/>
        }
    </div>
  )
}

export default CharacterCard