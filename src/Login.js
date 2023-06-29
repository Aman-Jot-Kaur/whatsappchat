import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase';
import "./Login.css"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {

    const [{ }, dispath] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispath({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='Login'>
            <div className='login__container'>

                <div className='login_text'>
                    <h1 style={{ fontFamily: "cursive" }}>Whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default Login