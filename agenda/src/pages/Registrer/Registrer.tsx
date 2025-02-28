import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { registrerAuthStore } from "../../store/authStore";
import './Registrer.css'

const Registrer: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate()

    const isAuthenticated = registrerAuthStore((state) => state.isAuthenticated)
    const registrerAction = registrerAuthStore((state) => state.registro)

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/login')
        }
    }, [isAuthenticated, navigate]);//isAuthenticated,

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        registrerAction(username, password)
    };

    return (
        <div className="fondo2">
            <h2>Registro</h2>
            <img  className='login-icon'
                    src="https://static.vecteezy.com/system/resources/previews/019/872/884/non_2x/3d-minimal-user-login-page-user-authentication-concept-user-verification-concept-login-page-with-a-fingerprint-padlock-3d-illustration-free-png.png" 
                    alt='register-icon' 
                />
            {
                error  && <p>{error}</p>
            }
            
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Escribe tu nombre de usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Escribe la contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="button-3" type="submit">Registrarse</button>
                <button className="button-4 " type="button" onClick={()=>navigate('/login')}>Regresar</button>
            </form>
        </div>
    );
};

export default Registrer;