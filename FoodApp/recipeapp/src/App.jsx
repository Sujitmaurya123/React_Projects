

import './App.css'
import Categories from './components/Categories'
import Delivery from './components/Delivery'
import Featured from './components/Featured'
import Footer from './components/Footer'
import NewsLetter from './components/NewsLetter'
import Meal from './components/Meal'
import TopNav from './components/TopNav'
import TopPicks from './components/TopPicks'

function App() {
 

  return (
    <div>
       <TopNav/>
       <Featured/>
       <Delivery/>
       <TopPicks/>
       <Meal/>
       <Categories/>
       <NewsLetter/>
       <Footer/>
    </div>
  )
}

export default App
