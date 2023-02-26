import './index.css'

const PasswordBox = props => {
  const {userPasswords, deleteItemFromList, isChecked, passwordsList} = props
  const {name, password, website, id} = userPasswords

  const deletePassword = () => {
    deleteItemFromList(id)
  }

  const result = isChecked ? (
    <p className="user-name"> {password} </p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="hidden-password"
    />
  )

  const userInterface =
    passwordsList.length === 0 ? (
      <>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="no-passwords"
        />
      </>
    ) : (
      <>
        <div className="user-profile-pic">
          <h1> {name[0]} </h1>
        </div>
        <div>
          <p className="website-name"> {website} </p>
          <p className="user-name"> {name} </p>
          {result}
        </div>
        <div className="delete-container">
          <button
            type="button"
            className="delete-button"
            onClick={deletePassword}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-icon"
            />
          </button>
        </div>
      </>
    )

  return <li className="each-password-container">{userInterface}</li>
}

export default PasswordBox
