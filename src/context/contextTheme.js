import React, {createContext, useState } from 'react'

export const ThemeContext = createContext(null)

const ContextTheme = ({children}) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () =>{
    setTheme(theme === 'light' ? 'dark' : 'light' )
    if(theme === 'light'){
      document.getElementsByTagName('body')[0].classList.remove('dark') //Logica mala, teniendo estados, pero tengo que llegar al body de alguna manera.
      document.getElementsByTagName('body')[0].classList.toggle(theme)
    }else{
      document.getElementsByTagName('body')[0].classList.remove('light')
      document.getElementsByTagName('body')[0].classList.toggle(theme)
    }
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ContextTheme