import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";

const RegisterScreen = () => {

    const { user, loading, register } = useContext(LoginContext);
    const [values, setValues] = useState({ email: '', password: '' });

    const handleInputChange = (e) => setValues({ ...values, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        register(values);
    };

    return (
        <div>
            <h2>Register</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <input type='email' value={values.email} onChange={handleInputChange} name="email" />
                <input type='password' value={values.password} onChange={handleInputChange} name="password" />
                <button disabled={loading}>{loading ? 'Cargando...' : 'Ingresar'}</button>
                {user.error && <p>{user.error}</p>}
            </form>
            <Link to={'/login'}>Ya estoy registrado</Link>
        </div>
    );
};

export default RegisterScreen;