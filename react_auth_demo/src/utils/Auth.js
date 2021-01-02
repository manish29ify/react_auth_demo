import { useState } from "react";

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    },
    getAuthStatus(cb) {
        //setTimeout(cb, 100);
        return fakeAuth.isAuthenticated = false;
    }
};

const Auth = () => {
    const [user, setUser] = useState(null);

    const signin = cb => {
        return fakeAuth.signin(() => {
            setUser("user");
            cb();
        });
    };

    const signout = cb => {
        return fakeAuth.signout(() => {
            setUser(null);
            cb();
        });
    };


    const checkSignIn = () => {
        //setUser("user");
        return fakeAuth.getAuthStatus();
        // return fakeAuth.getAuthStatus(() => {
        //     setUser("user");
        //     //cb();
        // });
    };

    return {
        user,
        signin,
        signout,
        checkSignIn
    };
}

export default Auth;