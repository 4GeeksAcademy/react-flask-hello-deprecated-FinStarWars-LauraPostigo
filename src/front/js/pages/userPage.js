import React, { useEffect, useState } from "react";

const UserPage = () => {
    const [favorites, setFavorites] = useState([]);

    const loadFavorites = () => {
        fetch(`${process.env.BACKEND_URL}/api/users/favorites`)
            .then(res => res.json())
            .then(data => setFavorites(data))
            .catch(err => console.error("Error loading favorites:", err));
    };

    useEffect(() => {
        loadFavorites();
    }, []);

    const handleDeleteFavorite = (type, id) => {
        fetch(`${process.env.BACKEND_URL}/api/favorite/${type}/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log("Favorito eliminado:", data);
                loadFavorites(); // recargar la lista
            })
            .catch(err => console.error("Error eliminando favorito:", err));
    };

    return (
        <div className="container mt-5">
            <h2>Mis Favoritos</h2>
            <ul className="list-group">
                {favorites.length === 0 && <li className="list-group-item">No hay favoritos aún.</li>}
                {favorites.map(fav => (
                    <li key={fav.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {fav.planet_id && `Planeta favorito (ID: ${fav.planet_id})`}
                        {fav.people_id && `Personaje favorito (ID: ${fav.people_id})`}
                        <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() =>
                                fav.planet_id
                                    ? handleDeleteFavorite("planet", fav.planet_id)
                                    : handleDeleteFavorite("people", fav.people_id)
                            }
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;
