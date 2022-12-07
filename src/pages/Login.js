import {NavigateFunction, useNavigate} from "react-router-dom";

function Login() {
     const navigate = useNavigate()

    return (

        <>

            <div className="containers">
                <form onSubmit="sendEmail(); reset(); return false;">
                    <h3>Login</h3>
                    <input type="text" name="username" placeholder="Username" required/>
                    <input type="text" name="password" placeholder="Password" required/>
                    <button variant="primary" type="button" onClick={() => {
                        navigate('/')
                    }}>Login</button>
                </form>
            </div>
        </>

    );
}

export default Login;