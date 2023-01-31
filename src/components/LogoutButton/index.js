// Write your JS code here
import {withRouter} from 'react-router-dom'
import Cookie from 'js-cookie'

const LogoutButton = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={onClickLogout}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
