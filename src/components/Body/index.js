// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <nav className="navbar">
              <h1>Left Navbar Menu</h1>
              <ul className="left-nav-list">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </nav>
          )}
          {showContent && (
            <div className="content-container">
              <h1>Content</h1>
              <p>
                Lorem ipsum This handy tool helps you create dummy text for all
                your layout needs. We are gradually adding new functionality and
                we welcome your suggestions and feedback.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <nav className="navbar">
              <h1>Right Navbar</h1>
              <div>
                <div className="nav-2-ad-container">Ad 1</div>
                <div className="nav-2-ad-container">Ad 2</div>
              </div>
            </nav>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
