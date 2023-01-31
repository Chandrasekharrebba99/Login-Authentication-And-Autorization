// Write your JS code here
import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  state = {}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
  }

  onLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    return (
      <div>
        <h1>Please Login</h1>
        <button type="button" onClick={this.onLogin}>
          Login with sample Creds
        </button>
      </div>
    )
  }
}

export default Login
