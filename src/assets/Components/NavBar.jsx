import React, { useEffect, useState } from 'react'

const NavBar = () => {
  const [ theme, setTheme ] = useState(() => {
    return 'light'
})

useEffect(() => {
    if (theme === "dark") {
        document.querySelector('html').classList.add('dark')
    }
    else {
        document.querySelector('html').classList.remove('dark')
    }
},
 [theme])

const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light");
}
  return (
    <div className=''>
    <div className='w-full min-h-16 '>
        <div className='p-4 px-4 md:px-20 bg-white font-bold text-xl flex justify-between shadow-md border-b-slate-100 dark:bg-darkBlue dark:text-white'>
            <h1>Where in the world??</h1>
            <button onClick={handleChangeTheme}>Dark Mode</button>
        </div>
        
    </div>
    </div>
  )
}

export default NavBar