// Write your code here
import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import Header from '../Header'
import Footer from '../Footer'
import Body from '../Body'

class ConfigurationController extends Component {
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
    console.log(showContent)

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
        <Header />
        <Body />
        <Footer />
      </ConfigurationContext.Provider>
    )
  }
}

export default ConfigurationController
