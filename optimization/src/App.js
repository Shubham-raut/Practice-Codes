import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom'; 
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';

class DynamicImport extends React.Component {
  state = { component: null }

  componentDidMount() {
    this.props.load()
      .then((mod) => this.setState({
        component: mod.default
      }))
  }
  render() {
    return this.props.children(this.state.component)
  }
}

const Settings = (props) => (
  <DynamicImport load={() => import('./pages/Settings/Settings')}>
    {(Component) => Component === null ?
      <h2>Loading.....</h2> :
  <Component {...props}/>}
  </DynamicImport>
)

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path ='/settings' component={Settings}/>
      </BrowserRouter>

    </div>
  );
}

export default App;
