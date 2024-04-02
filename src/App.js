import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import { useGlobalContext } from '@/context/store'
import Entrance from '@/components/Entrance'
// Pages
import Home from '@/pages/Home'
import SingleProject from '@/pages/SingleProject'

const App = () => {
  const { initialLoad } = useGlobalContext()

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  if (initialLoad) return <Entrance />
  return (
    <div id='top' className='flex flex-col min-h-screen relative no-scrollbar'>
      <Router>
        <main className='flex-1'>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/about' element={<About />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} /> */}
            <Route path='/project/:id' element={<SingleProject />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
