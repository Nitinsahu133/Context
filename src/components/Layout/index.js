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
      const onCheckShowContent = () => {
        onToggleShowContent()
      }

      const onCheckShowLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onCheckShowRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="layout-container">
          <h1 className="layout-container-main-heading">Layout</h1>
          <div className="layout-checkbox-container">
            <input
              defaultChecked
              onChange={onCheckShowContent}
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
              onChange={onCheckShowLeftNavbar}
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
              onChange={onCheckShowRightNavbar}
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
