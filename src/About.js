import { Link } from "react-router-dom";

export default function About () {
    return (
    <>
    <h1>Halaman about</h1>
    <p>Ini adalah halaman ABout</p>
    <ul>
        <li>
        <Link to='/about/team'>Team</Link>
        </li>
    </ul>
    </>
    );
}