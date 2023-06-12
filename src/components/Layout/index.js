// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <div className="layout-container">
          <h1 className="layout-container-main-heading">Layout</h1>
          <div className="layout-checkbox-container">
            <input
              defaultChecked
              onChange={onToggleShowContent}
              id="content"
              type="checkbox"
            />
            <label className="layout-checkbox-label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="layout-checkbox-container">
            <input
              defaultChecked
              onChange={onToggleShowLeftNavbar}
              id="leftNavbar"
              type="checkbox"
            />
            <label className="layout-checkbox-label" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="layout-checkbox-container">
            <input
              defaultChecked
              onChange={onToggleShowRightNavbar}
              id="rightNavbar"
              type="checkbox"
            />
            <label className="layout-checkbox-label" htmlFor="rightNavbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Layout
