import { useNavigate } from "react-router-dom";

export default function Login () {
    const navigate = useNavigate();
    function LoginHandler (event) {
        event.preventDefault();
        
        const checkLogin = true;
        if(checkLogin){
            navigate('/dasboard');
        }
    }

    return (
        <>
            <form onSubmit={LoginHandler}>
                <input type="text" placeholder="USername"/>
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </>
    );
}