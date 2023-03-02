import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordBox from '../PasswordBox'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    name: '',
    website: '',
    password: '',
    isChecked: false,
    searchInput: '',
  }

  submitDetails = event => {
    event.preventDefault()

    const {name, website, password} = this.state
    const userDetails = {
      id: uuidv4(),
      name,
      password,
      website,
    }

    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, userDetails],
    }))
  }

  changeWebsite = event => {
    this.setState({website: event.target.value})
  }

  deleteItemFromList = id => {
    const {passwordsList} = this.state
    const resultantPasswords = passwordsList.filter(each => each.id !== id)
    this.setState({passwordsList: resultantPasswords})
  }

  changeUsername = event => {
    this.setState({name: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  changeResults = event => {
    this.setState({searchInput: event.target.value})
  }

  searchResults = () => {
    const {searchInput, passwordsList} = this.state

    return passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
  }

  render() {
    const {name, website, password, passwordsList, isChecked} = this.state

    const Passwords = passwordsList.length
    const searchResults = this.searchResults()

    console.log(searchResults)
    console.log(name)
    console.log(password)
    console.log(website)
    console.log(passwordsList)
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="user-details-container">
          <div className="user-details-card">
            <h1 className="user-details-heading"> Add New Password </h1>
            <form onSubmit={this.submitDetails}>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="website-logo"
                />
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-element"
                  onChange={this.changeWebsite}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="website-logo"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-element"
                  onChange={this.changeUsername}
                />
              </div>
              <div className="input-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="website-logo"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-element"
                  onChange={this.changePassword}
                />
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="user-details-logo"
            />
          </div>
        </div>
        <div className="user-passwords-container">
          <div className="user-passwords-navbar">
            <div className="password-counter">
              <h1 className="user-details-heading"> Your Passwords </h1>
              <p className="counter"> {Passwords} </p>
            </div>

            <div className="user-navbar">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon-container"
              />
              <input
                type="search"
                className="search-passwords-container"
                placeholder="search"
                onChange={this.changeResults}
              />
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-passwords-container">
            <input
              type="checkbox"
              id="show password"
              className="check-box"
              onClick={this.toggleCheckbox}
            />
            <label htmlFor="show password" className="label-element">
              Show Passwords
            </label>
          </div>
          <ul className="resultant-passwords">
            {passwordsList.length === 0 ? (
              <div className="no-passwords-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-passwords"
                />
                <p className="result-text"> No Passwords </p>
              </div>
            ) : (
              searchResults.map(each => (
                <PasswordBox
                  userPasswords={each}
                  deleteItemFromList={this.deleteItemFromList}
                  isChecked={isChecked}
                  key={each.id}
                />
              ))
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
