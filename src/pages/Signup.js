// import {useNavigate} from "react-router-dom";
//
// function Signup() {
//     const navigate = useNavigate()
//     return (
//         <>
//             <div className="containers">
//                 <form onSubmit="sendEmail(); reset(); return false;">
//                     <h3>Sign Up</h3>
//                     <input type="email" name="email" placeholder="Email ID" required/>
//                     <input type="text" name="password" placeholder="Password" required/>
//                     <button variant="primary" type="button" onClick={() => {
//                         navigate('/login')
//                     }}>Create Account</button>
//                 </form>
//             </div>
//         </>
//     );
// }
//
// export default Signup;
import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {faCheck, faInfoCircle, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from 'react-router-dom';
import {USER_REGEX, PWD_REGEX} from './context-Api/regex.js'

const REGISTER_URL = "http://localhost:8080/api/v1/userinfo/register";
const Signup = () => {
    
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);

    // State events
    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(true);
        console.log(USER_REGEX.test(user))
    }, [user]);

    useEffect(() => {
        setValidPwd(true);
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
       // e.preventDefault();
        const v1 = true
        const v2 = true
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }

        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                }
            );
            setSuccess(true);
            //clear state and controlled inputs
            setUser("");
            setPwd("");
            setMatchPwd("");
        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Registration Failed");
            }
            errRef.current.focus();
        }
    };
    return (
        <>
            <div className="container">
            <section>
                <p
                    ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        Username:
                        <FontAwesomeIcon
                            icon={faCheck}
                            className={validName ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                            icon={faTimes}
                            className={
                                validName || !user ? "hide" : "invalid"
                            }
                        />
                    </label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p
                        id="uidnote"
                        className={
                            userFocus && user && !validName
                                ? "instructions"
                                : "offscreen"
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 characters.
                        <br />
                        Must begin with a letter.
                        <br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>
                    <label htmlFor="password">
                        Password:
                        <FontAwesomeIcon
                            icon={faCheck}
                            className={validPwd ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                            icon={faTimes}
                            className={
                                validPwd || !pwd ? "hide" : "invalid"
                            }
                        />
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                        aria-invalid={validPwd ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p
                        id="pwdnote"
                        className={
                            pwdFocus && !validPwd
                                ? "instructions"
                                : "offscreen"
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a
                            number and a special character.
                        <br />
                        Allowed special characters:{" "}
                        <span aria-label="exclamation mark">
              !
            </span>{" "}
                        <span aria-label="at symbol">@</span>{" "}
                        <span aria-label="hashtag">#</span>{" "}
                        <span aria-label="dollar sign">$</span>{" "}
                        <span aria-label="percent">%</span>
                    </p>
                    <label htmlFor="confirm_pwd">
                        Confirm Password:
                        <FontAwesomeIcon
                            icon={faCheck}
                            className={
                                validMatch && matchPwd ? "valid" : "hide"
                            }
                        />
                        <FontAwesomeIcon
                            icon={faTimes}
                            className={
                                validMatch || !matchPwd ? "hide" : "invalid"
                            }
                        />
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        value={matchPwd}
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="confirmnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                    />
                    <p
                        id="confirmnote"
                        className={
                            matchFocus && !validMatch
                                ? "instructions"
                                : "offscreen"
                        }
                    >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                    </p>
                    <button type="button"                       onClick={handleSubmit(this)}
                    >
                        Sign Up
                    </button>
                </form>
                <p>
                    Already registered?
                    <br />
                    <span className="line">
                        {<Link to="/login">Sign In</Link>}

          </span>
                </p>
            </section>
            )}
           </div>
        </>
    );
};

export default Signup;