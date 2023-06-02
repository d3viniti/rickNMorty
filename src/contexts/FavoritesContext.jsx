import {useState, createContext, useEffect} from 'react'

export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props){
    //create my global state
    const [favorites, setFavorites] = useState([])


    useEffect(
        ()=>{
                console.log('context loaded')
                const storedFavs = localStorage.getItem('favoritesList')
                if(storedFavs){
                    //only set if there is something in localStorage
                    setFavorites(JSON.parse(storedFavs))
                }
        }, [] //run one time when context loads
    )

    useEffect(
        ()=>{
            //save to local storage any time state changes
            localStorage.setItem('favoritesList', JSON.stringify(favorites))
        }, [favorites] //run when favorites changes
    )
    //this funcition's job is to add a new character to favorites
    const addCharacter = (charToAdd) =>{
        console.log('adding', charToAdd)
        //add charToAdd to favorites array
        let newFavorites = [...favorites, charToAdd]
        //console.log(newFavorites)
        setFavorites(newFavorites)
        console.log(favorites)
        //update local storage
    }

    const removeCharacter = (charId) =>{
        console.log('remove', charId)
        //keep all the ones that don't match this id
        let newFavorites = favorites.filter(item=>item.id !== charId)
        setFavorites(newFavorites)
    }

    return(
        <FavoritesContext.Provider value={{favorites, addCharacter, removeCharacter}}>
            {props.children}
        </FavoritesContext.Provider>
    )

}