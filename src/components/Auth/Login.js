import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router';
import app from '../../services/config';
import { AuthContext } from '../../auth';
import { Button } from '@material-ui/core';
import './Login.css';

const Login = ({ history }) => {

    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;

            try {
                await app
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (err) {
                alert('אימייל או סיסמא לא נכונים');
            }
        }, [history]
    );

    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
        <div className="sign__in">
            <div className="login__header">
                <h1>התחברות</h1>
            </div>
            <div className="login__form">
                <form onSubmit={handleLogin}>
                    <h3>
                        אימייל
                </h3>
                    <input type="email" name="email" placeholder="Email" />

                    <h3>
                        סיסמא
               </h3>
                    <input type="password" name="password" placeholder="Password" />

                    <div className="login__btn">
                        <Button variant="contained" color="primary" type="submit">התחברות למערכת</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default withRouter(Login);