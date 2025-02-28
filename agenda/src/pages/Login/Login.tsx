import React, { useEffect, useState } from 'react';
import { loginService } from '../../services/auth.service';
import {useNavigate} from 'react-router-dom'
import './Login.css';
import { AuthResponse } from '../../types';
import { useAuthStore } from '../../store/authStore';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate()

    const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
    const loginAction = useAuthStore((state) => state.login)

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home')
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        loginAction(username, password)
        // loginService(username, password)
        // .then((response: AuthResponse) => {
        //     if (response && response?.status === 200) { 
        //         navigate('/home')
        //     }else{
        //         setError('Usuario o contraseña incorrectos')
        //     } 
        // })
        // .catch((error) => setError(error.message));
    };

    return (
        <div className='fondo'>
            <h2>Inicia sesión</h2>
            <img  className='login-icon'
                    src="https://cdn-icons-png.flaticon.com/512/6861/6861326.png" 
                    alt='Login-icon' 
                />
            {
                error  && <p>{error}</p>
            }
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Escribe tu usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Escribe tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='button-1' type="submit">Iniciar sesión</button>
                <button className='button-2' type="button" onClick={() =>  navigate('/register')}>
                    Registrarse
                </button>
            </form>
        </div>
    );
};

export default Login;

    