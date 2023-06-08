// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div>
          {showLeftNavbar && (
            <div>
              <h1>Left Navbar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div>
              <h1>Content</h1>
              <p>
                Lorem ipsum This handy tool helps you create dummy text for all
                your layout needs. We are gradually adding new functionality and
                we welcome your suggestions and feedback.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <nav>
              <h1>Right Navbar</h1>
              <div>
                <div>Ad 1</div>
                <div>Ad 2</div>
              </div>
            </nav>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
