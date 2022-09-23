// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props

  return (
    <button type="submit" className="loginbutton" onClick={logout}>
      Logout
    </button>
  )
}

export default Logout
