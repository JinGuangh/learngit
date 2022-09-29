import React, { Component } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import PageFooter from './components/PageFooter'

//渲染的组件
import Home from './views/Home'
import Category from './views/Category'
import Center from './views/Center'
import CookMap from './views/CookMap'
import Detail from './views/Detail'
import Login from './views/Login'
import './style/common.scss'

class App extends Component {
  state = {
    showPageFooter: true
  }
  render() {
    return (
      <>
        <main className='main-container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/category' component={Category} />
            <Route path='/center' component={Center} />
            <Route path='/map' component={CookMap} />
            <Route path='/detail/:id' component={Detail} />
            <Route path='/login' component={Login} />
          </Switch>
        </main>
        <PageFooter show={this.state.showPageFooter}/>
      </>
    )
  }
}

export default App
