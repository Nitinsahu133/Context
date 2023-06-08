import {Component} from 'react'
import ConfigurationController from './components/ConfigurationController'
import Layout from './components/Layout'
import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(prevState => ({showContent: !prevState.showContent}))
  }

  toggleLeftNavbar = () => {
    this.setState(prevState => ({showLeftNavbar: !prevState.showLeftNavbar}))
  }

  toggleRightNavbar = () => {
    this.setState(prevState => ({showRightNavbar: !prevState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          onToggleShowContent: this.onToggleShowContent,
          showLeftNavbar,
          onToggleShowLeftNavbar: this.toggleLeftNavbar,
          showRightNavbar,
          onToggleShowRightNavbar: this.toggleRightNavbar,
        }}
      >
        <Layout />
        <ConfigurationController />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
