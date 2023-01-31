// Write your JS code here
import {Link, withRouter} from 'react-router-dom'

const Header = () => {
  console.log(' ')

  return (
    <div>
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="nav-link">
          <li>About</li>
        </Link>
      </ul>
    </div>
  )
}

export default withRouter(Header)
