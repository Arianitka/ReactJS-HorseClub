import { Link, useNavigate } from "react-router-dom"
import { useRegister } from "../../hooks/useAuth"
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

const initialValues = { email: '', password: '', 'confirm-password': '' };

export default function Register() {
    const [error, setError] = useState('')
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async (values) => {

        if (values.password !== values['confirm-password']) {
            return setError('Passwords do not match')
        }
        try {
            await register(values.email,values.password)
            navigate('/');
        } catch (err) {
           setError(err.message)
        }
    };

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={submitHandler}>
                <h1>Register</h1>
                <div className="container">
                    <div className="brand-logo"></div>

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={changeHandler}
                        placeholder="maria@email.com"
                    />

                    <label htmlFor="pass">Password:</label>
                    <input 
                    type="password"
                     name="password" 
                     value={values.password}
                     onChange={changeHandler}
                     id="register-password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input
                     type="password"
                      name="confirm-password"
                       id="confirm-password"
                       value={values['confirm-password']}
                       onChange={changeHandler}
                        />

                        {error && (
                            <p >
                            <span>{error}</span>
                        </p>
                        )}

                    <input className="btn submit" type="submit" value="Register" />
                    
                    <p className="field">
                        <span>If you already have profile click <Link to={`/login`}>here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    )
}