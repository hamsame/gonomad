import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Blogs from './Blogs'
import Blog from './Blog'
import Contact from './Contact'
import Error from './Error'
import Navbar from './Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/blogs' component={Blogs} />
          <Route exact path='/blog/:id' children={<Blog />} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='*' component={Error} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
