import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div>
         
            <Link to="/admin">Admin</Link>
            <Link to="/student">Student</Link>
        </div>
    )
}

export default Home;