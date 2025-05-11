import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Single = () => {
    const { type, id } = useParams();
    const [data, setData] = useState(null);
    const BACKEND = process.env.BACKEND_URL || "http://localhost:3001";

    useEffect(() => {
        fetch(`${BACKEND}/api/${type}/${id}`)
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.error("Error:", err));
    }, [type, id]);

    if (!data) return <p className="text-center mt-5">Cargando detalles...</p>;

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: "600px" }}>
                <img
                    src="https://via.placeholder.com/600x300?text=Detalle"
                    className="card-img-top"
                    alt={data.name}
                />
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <ul className="list-group list-group-flush mt-3">
                        {Object.entries(data).map(([key, value]) => (
                            key !== "id" && key !== "name" && (
                                <li key={key} className="list-group-item">
                                    <strong>{key}:</strong> {value}
                                </li>
                            )
                        ))}
                    </ul>
                    <Link to="/" className="btn btn-secondary mt-4">
                        Volver al inicio
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Single;
