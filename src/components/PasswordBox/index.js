import './index.css'

const PasswordBox = props => {
  const {userPasswords} = props
  const {name, password, website} = userPasswords

  return (
    <div className="each-password-container">
      <div className="user-profile-pic">
        <h1> {name[0]} </h1>
      </div>
      <div>
        <h1 className="website-name"> {website} </h1>
        <p className="user-name"> {name} </p>
      </div>
      <div className="delete-container">
        <button type="button" className="delete-button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </div>
  )
}

export default PasswordBox
