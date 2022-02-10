import { useParams } from "react-router-dom";

export function BlogDetail () {
    const params = useParams();
    return (
    <>

    <h1>Halaman Blog Detail</h1>
    <p>{params.slug}</p>
    </>
    );
}