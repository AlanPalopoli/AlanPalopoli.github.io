import Button from '@mui/material/Button';
import './LogoWidget.css';
import { Link } from 'react-router-dom';

const LogoWidget = () => {
    return (
        <Button color="inherit" style={{ fontSize: 10 }}>
                <Link to={'/'}>
                    <img 
                    className='imgLogo' 
                    src="img/Logo2.png" 
                    alt={"Foto Robot"}
                    />
                </Link>
        </Button>
    )
}

export default LogoWidget