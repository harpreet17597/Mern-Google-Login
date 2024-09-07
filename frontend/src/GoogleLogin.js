import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { googleAuth } from './api';
const GoogleLogin = () => {

    const resposeGoogle = async (authResult) => {
        try {
            if(authResult['code']) {
                const code = authResult['code'];
                const result = await googleAuth(code);

                console.log(result);

            }
        }
        catch (err) {
            console.log(err)
        }
    }

    const googleLogin = useGoogleLogin({
        onSuccess: resposeGoogle,
        OnError: resposeGoogle,
        flow: 'auth-code'
    })

    return (
        <button type="button" onClick={googleLogin}>Login With Google</button>
    )
}

export default GoogleLogin;