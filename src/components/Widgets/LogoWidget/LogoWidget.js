import Button from '@mui/material/Button';
import './LogoWidget.css';

const LogoWidget = () => {
    return (
        <Button color="inherit" style={{ fontSize: 60 }}>
                <img 
                className='imgLogo' 
                src="img/LogoRobot.png" 
                alt={"Foto Robot"}
                />
        </Button>
    )
}

export default LogoWidget