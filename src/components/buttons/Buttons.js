import React, { useContext } from 'react'
import { AuthContext } from '../../auth';
import { Link } from 'react-router-dom';
import app from '../../services/config';
import './Buttons.css';
import { Button } from '@material-ui/core';


const Buttons = () => {

    const signOut = () => {
        app.auth().signOut()
            .then(() => {
                console.log("SignOut Success");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const { currentUser } = useContext(AuthContext);



    return (
        <div className="btns">
            {
                currentUser && (
                    <div>
                        <Button style={{ margin: '10px' }} variant="contained" color="default" onClick={() => signOut()}>התנתק מהמערכת</Button>
                        <Button style={{ margin: '10px' }} variant="contained" color="primary"><Link to="/Reporters">דווח על סקופ</Link> </Button>
                    </div>

                )
            }
            {
                !currentUser && (
                    <Button variant="contained" color="primary"><Link to="/login">התחברות למערכת</Link></Button>
                )
            }
        </div>
    )
}

export default Buttons;