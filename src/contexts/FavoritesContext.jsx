import {useState, createContext, useEffect} from 'react'

export const FavoritesContext = createContext();

export default function FavoritesContextProvider(props){
    //create my global state
    const [favorites, setFavorites] = useState([])


    // useEffect(
    //     ()=>{
    //             console.log('context loaded')
    //             const storedDarkMode = localStorage.getItem('darkMode')
    //             //check if something was there and if so use that value to initialize
    //             if(storedDarkMode){
    //                 //set with this value
    //                 setDarkMode(JSON.parse(storedDarkMode))
    //             }
    //     }, [] //run one time when context loads
    // )

    // useEffect(
    //     ()=>{
    //         console.log('darkMode is ', darkMode)
    //         //save new state of darkMode when it changes
    //         localStorage.setItem('darkMode', JSON.stringify(darkMode))
    //     }, [darkMode]
    // )
    //this funcition's job is to add a new character to favorites
    const addCharacter = (charToAdd) =>{
        console.log('adding', charToAdd)
    }
    return(
        <FavoritesContext.Provider value={{favorites, addCharacter}}>
            {props.children}
        </FavoritesContext.Provider>
    )

}