import {Link} from 'react-router-dom'

const Admin = () => {
    return(
        <div>
            Admin
            <Link to="/Deposit">Deposit</Link>
            <Link to="/Receive">Recieve</Link>
        </div>
    )
}

export default Admin;