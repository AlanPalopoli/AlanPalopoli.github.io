import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom'
import './LogInWidget.css'

const LogInWidget = ()  => {
    return (
        <Link to={'/login'} style={{ textDecoration: 'none',  color:"inherit" }}>
            <div className='div-login'>
                <AccountCircleIcon/>
                Mi Cuenta
            </div>
        </Link>

    )
}

export default LogInWidget
