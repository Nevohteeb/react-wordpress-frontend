import {Routes, Route} from 'react-router-dom'
// Import Pages
import Home from './pages/Home'
import About from './pages/About'
import Dinosaur from './pages/Dinosaur'
import Contact from './pages/Contact'
import Artists from './pages/Artists'
import ArtistsViaGenres from './pages/ArtistsViaGenres'

// Import Components
import Post from './components/Post'
import Artist from './components/Artist'

// Import Shop Pages
import Shopfront from './pages/Shopfront'
import Product from './components/Product'

const Links = () => {
  return (
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/post/:id' element={<Post/>}/>
        <Route path='/dinosaurs' element={<Dinosaur/>}/>
        <Route path='/artists' element={<Artists/>}/>
        <Route path='/artists/:id' element={<Artist/>}/>
        <Route path='/genre/:id' element={<ArtistsViaGenres/>}/>
        {/* Shop Pages */}
        <Route path="/shop" element={<Shopfront/>}/>
        <Route path="/product/:id" element={<Product/>}/>
    </Routes>
  )
}

export default Links