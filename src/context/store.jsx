import { createContext, useContext, useState, useEffect } from 'react'

const GlobalContext = createContext({
  showMenu: false,
  firstLoad: false,
  setFirstLoad: () => {},
  setShowMenu: () => {},
})

export const GlobalProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [initialLoad, setInitialLoad] = useState(true)

  // Set a flag when the page loads
  useEffect(() => {
    const timeout = setTimeout(() => {
      setInitialLoad(false)
    }, 5000)

    return () => setInitialLoad(true)
  }, [])

  return (
    <GlobalContext.Provider
      value={{
        showMenu,
        setShowMenu,
        initialLoad,
        setInitialLoad,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
