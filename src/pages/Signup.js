import {useNavigate} from "react-router-dom";

function Signup() {
    const navigate = useNavigate()
    return (
        <>
            <div className="containers">
                <form onSubmit="sendEmail(); reset(); return false;">
                    <h3>Sign Up</h3>
                    <input type="email" name="email" placeholder="Email ID" required/>
                    <input type="text" name="password" placeholder="Password" required/>
                    <button variant="primary" type="button" onClick={() => {
                        navigate('/login')
                    }}>Create Account</button>
                </form>
            </div>
        </>
    );
}

export default Signup;