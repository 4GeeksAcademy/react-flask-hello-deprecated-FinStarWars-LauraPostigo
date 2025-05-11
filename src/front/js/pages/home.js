import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const BACKEND = process.env.BACKEND_URL || "http://localhost:3001";

    const handleAddFavorite = (type, id) => {
        fetch(`${BACKEND}/api/favorite/${type}/${id}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        })
            .then(res => res.json())
            .then(data => console.log("Favorito añadido:", data))
            .catch(err => console.error("Error añadiendo favorito:", err));
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Planetas</h2>
            <div className="row">

                <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100">
                        <img src="https://i.imgur.com/Bp2o2GD.jpeg" className="card-img-top" alt="Tatooine" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Tatooine</h5>
                            <p className="card-text">Clima: arid</p>
                            <p className="card-text">Terreno: desert</p>
                            <p className="card-text">Población: 200000</p>
                            <div className="mt-auto d-flex justify-content-between">
                                <button className="btn btn-outline-success" onClick={() => handleAddFavorite("planet", 1)}>❤️</button>
                                <Link to="/single/planet/1" className="btn btn-outline-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100">
                        <img src="https://i.imgur.com/TPqnlKZ.png" className="card-img-top" alt="Naboo" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Naboo</h5>
                            <p className="card-text">Clima: temperate</p>
                            <p className="card-text">Terreno: grassy hills</p>
                            <p className="card-text">Población: 4500000000</p>
                            <div className="mt-auto d-flex justify-content-between">
                                <button className="btn btn-outline-success" onClick={() => handleAddFavorite("planet", 2)}>❤️</button>
                                <Link to="/single/planet/2" className="btn btn-outline-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100">
                        <img src="https://i.imgur.com/a4vPpIj.png" className="card-img-top" alt="Hoth" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Hoth</h5>
                            <p className="card-text">Clima: frozen</p>
                            <p className="card-text">Terreno: tundra</p>
                            <p className="card-text">Población: unknown</p>
                            <div className="mt-auto d-flex justify-content-between">
                                <button className="btn btn-outline-success" onClick={() => handleAddFavorite("planet", 3)}>❤️</button>
                                <Link to="/single/planet/3" className="btn btn-outline-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100">
                        <img src="https://i.imgur.com/b96wgzt.png" className="card-img-top" alt="Dagobah" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Dagobah</h5>
                            <p className="card-text">Clima: murky</p>
                            <p className="card-text">Terreno: swamp</p>
                            <p className="card-text">Población: unknown</p>
                            <div className="mt-auto d-flex justify-content-between">
                                <button className="btn btn-outline-success" onClick={() => handleAddFavorite("planet", 4)}>❤️</button>
                                <Link to="/single/planet/4" className="btn btn-outline-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="mt-5 mb-4">Personajes</h2>
            <div className="row">

                <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100">
                        <img src="https://i.imgur.com/hMXs8px.png" className="card-img-top" alt="Luke" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Luke Skywalker</h5>
                            <p className="card-text">Género: male</p>
                            <p className="card-text">Nacimiento: 19BBY</p>
                            <p className="card-text">Color de ojos: blue</p>
                            <div className="mt-auto d-flex justify-content-between">
                                <button className="btn btn-outline-success" onClick={() => handleAddFavorite("people", 1)}>❤️</button>
                                <Link to="/single/people/1" className="btn btn-outline-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100">
                        <img src="https://i.imgur.com/E8MW9jD.png" className="card-img-top" alt="Leia" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Leia Organa</h5>
                            <p className="card-text">Género: female</p>
                            <p className="card-text">Nacimiento: 19BBY</p>
                            <p className="card-text">Color de ojos: brown</p>
                            <div className="mt-auto d-flex justify-content-between">
                                <button className="btn btn-outline-success" onClick={() => handleAddFavorite("people", 2)}>❤️</button>
                                <Link to="/single/people/2" className="btn btn-outline-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100">
                        <img src="https://i.imgur.com/zEQg250.png" className="card-img-top" alt="Vader" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Darth Vader</h5>
                            <p className="card-text">Género: male</p>
                            <p className="card-text">Nacimiento: 41.9BBY</p>
                            <p className="card-text">Color de ojos: yellow</p>
                            <div className="mt-auto d-flex justify-content-between">
                                <button className="btn btn-outline-success" onClick={() => handleAddFavorite("people", 3)}>❤️</button>
                                <Link to="/single/people/3" className="btn btn-outline-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <div className="card h-100">
                        <img src="https://i.imgur.com/D3B3dVi.png" className="card-img-top" alt="Yoda" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Yoda</h5>
                            <p className="card-text">Género: male</p>
                            <p className="card-text">Nacimiento: 896BBY</p>
                            <p className="card-text">Color de ojos: green</p>
                            <div className="mt-auto d-flex justify-content-between">
                                <button className="btn btn-outline-success" onClick={() => handleAddFavorite("people", 4)}>❤️</button>
                                <Link to="/single/people/4" className="btn btn-outline-primary">Learn more</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;
