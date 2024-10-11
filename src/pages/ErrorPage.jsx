import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = ()=>{
    const error = useRouteError();
    // console.log(error);
    return(
        <>
            <h1>Hello ErrorPage </h1>

            {/* <p>{error.data}</p> */}
            {/* {error.data} */}
            {error && <p>{error.data}</p>}

            <NavLink to='/' className="btn btn-warning">Go Home</NavLink>
        </>
    )
}