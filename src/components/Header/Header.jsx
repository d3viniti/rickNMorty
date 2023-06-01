import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import { ThemeContext } from '../../contexts/ThemeContext';


function Header() {
  //create a variable for darkMode
  // const [darkMode, setDarkMode] = React.useState(false);

  //use context for global state
  //NOTE { } NOT [ ]
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode? 'header-container header-dark': 'header-container'}>
        <div>
            <Link to='/' style={{marginRight:'10px'}}>Home</Link>
            <Link to='/about' style={{marginRight:'10px'}}>About</Link>
            <Link to='/episodes' style={{marginRight:'10px'}}>Episodes</Link>
        </div>
        <button className={darkMode?'theme-btn theme-btn-dark': 'theme-btn'}
        onClick={()=>setDarkMode(!darkMode)}>
        {/* when darkMode=true, the button will say light mode, when = false it will 
        say Dark Mode */}
          {
          darkMode?
          "Light Mode"
          :
          "Dark Mode"
          }
          </button>
    </div>
  )
}

export default Header