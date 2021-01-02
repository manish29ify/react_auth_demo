import React from "react";
import { Route, Redirect } from "react-router-dom";
import Auth from './Auth';


const PrivateRoute = ({ children, ...rest }) => {
    // console.log({ Auth });
    // let auth = null; //
    // Auth.signout();
    let auth = Auth();
    auth.checkSignIn();
    console.log(auth?.user);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.checkSignIn() ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}
export default PrivateRoute;
// import React from "react";
// import { Route, Redirect } from "react-router-dom";
// // A wrapper for <Route> that redirects to the login
// // screen if you're not yet authenticated. 
// const PrivateRoute = ({ children, ...rest }) => {
//     let auth = useAuth();
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 auth.user ? (
//                     children
//                 ) : (
//                         <Redirect
//                             to={{
//                                 pathname: "/login",
//                                 state: { from: location }
//                             }}
//                         />
//                     )
//             }
//         />
//     );
// }

// export default PrivateRoute;