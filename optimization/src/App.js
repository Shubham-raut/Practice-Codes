import React, { lazy, Suspense } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import './App.css';
import LargeList, { LazyLoadLargeList } from './components/LargeList/LargeList';

const LazyComp = lazy(() => import('./components/LazyComp/LazyComp'));

class DynamicImport extends React.Component {
  state = { component: null }

  componentDidMount() {
    this.props.load()
      .then((mod) => {
        this.setState({
          component: mod.default
        });
      })
  }

  render() {
    return this.props.children(this.state.component)
  }
}

const Settings = (props) => (
  <DynamicImport load={() => import('./pages/Settings/Settings')}>
    {(Component) => Component === null ?
      <h2>Loading...</h2> :
      <Component {...props} />}
  </DynamicImport>
)

class App extends React.Component {
  state = { Location: null }

  buttonClicked = () => {
    import('./components/ClickComp/ClickComp')
      .then((mod) => {
        this.setState({ Location: mod.default });
      });
  }

  render() {
    const { Location } = this.state;
    return (
      <div className="App">
        <h1>App Component</h1>

        {/* <BrowserRouter>
          <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
          </nav>

          
          <Suspense fallback={<h2>Loading...</h2>}>
            <LazyComp />
          </Suspense>

          {
            Location ?
              <Location /> :
              <button onClick={this.buttonClicked}>Click</button>
          }

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/settings' component={Settings} />
        </BrowserRouter> */}

        {/* <LargeList /> */}
        <LazyLoadLargeList />

      </div>
    );
  }
}

export default App;
