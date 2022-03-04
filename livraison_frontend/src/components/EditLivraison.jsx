import axios from "axios";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const EditLivraison = () => {
  const [nom_boutique, setNom_boutique] = useState("");
  const [num_collier, setNum_collier] = useState("");
  const [point_depart, setPoint_depart] = useState("");
  const [point_arriver, setPoint_arriver] = useState("");
  const [conservation, setConservation] = useState("");
  const [poids, setPoids] = useState("");
  const [dimension, setDimension] = useState("");

  const updateLivraisonHandler = () => {
    axios
      .post("", {
        nomBoutique: nom_boutique,
        numCollier: num_collier,
        pointDepart: point_depart,
        pointArriver: point_arriver,
        conservation: conservation,
        poids: poids,
        dimension: dimension,
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <>
      <Modal.Body className="bg-white">
        <section className="h-100 bg-white">
          <div className="col bg-white">
            <div className="card border-0 card-registration my-4">
              <div className="row g-0 bg-white">
                <div className="card-body border-0 text-black bg-white">
                  <h3 className="mb-5 text-uppercase bg-white">
                    Demande de livraison
                  </h3>

                  <div className="row bg-white">
                    <div className="col-md-6 mb-4 bg-white">
                      <div className="form-outline bg-white">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg "
                          onChange={(e) => setNom_boutique(e.target.value)}
                        />
                        <label
                          className="form-label bg-transparent"
                          htmlFor="form3Example1m "
                        >
                          Nom Boutique
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 bg-white">
                      <div className="form-outline bg-white">
                        <input
                          type="text"
                          id="form3Example1n"
                          className="form-control form-control-lg"
                          onChange={(e) => setNum_collier(e.target.value)}
                        />
                        <label
                          className="form-label bg-transparent"
                          htmlFor="form3Example1n"
                        >
                          N° collier
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row bg-white bg-white">
                    <div className="col-md-6 mb-4 bg-white">
                      <div className="form-outline bg-white">
                        <input
                          type="text"
                          id="form3Example1m1"
                          className="form-control form-control-lg"
                          onChange={(e) => setPoint_depart(e.target.value)}
                        />
                        <label
                          className="form-label bg-transparent"
                          htmlFor="form3Example1m1"
                        >
                          Point de départ
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4 bg-white">
                      <div className="form-outline bg-white">
                        <input
                          type="text"
                          id="form3Example1n1"
                          className="form-control form-control-lg"
                          onChange={(e) => setPoint_arriver(e.target.value)}
                        />
                        <label
                          className="form-label bg-transparent"
                          htmlFor="form3Example1n1"
                        >
                          Point d'arriver
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row bg-white">
                    <div className="col-md-6 mb-4 bg-white">
                      <div className="form-outline bg-white">
                        <input
                          type="text"
                          id="form3Example1m1"
                          className="form-control form-control-lg"
                          onChange={(e) => setDimension(e.target.value)}
                        />
                        <label
                          className="form-label bg-transparent"
                          htmlFor="form3Example1m1"
                        >
                          Dimension
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6 mb-4 bg-white">
                      <div className="form-outline bg-white">
                        <input
                          type="text"
                          id="form3Example1n1"
                          className="form-control form-control-lg"
                          onChange={(e) => setPoids(e.target.value)}
                        />
                        <label
                          className="form-label bg-transparent"
                          htmlFor="form3Example1n1"
                        >
                          Poids
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row bg-white">
                    <div className="form-outline mb-4 bg-white">
                      <div className="form-outline bg-white">
                        <textarea
                          type="text"
                          id="form3Example1n1"
                          className="form-control form-control-lg"
                          onChange={(e) => setConservation(e.target.value)}
                        />
                        <label
                          className="form-label bg-transparent"
                          htmlFor="form3Example1n1"
                        >
                          Conservation particulier
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
      <Modal.Footer className="bg-white">
        <button type="button" className="btn btn-light btn-lg">
          Effacer Tout
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg ms-2"
          onClick={updateLivraisonHandler}
        >
          Soumettre
        </button>
      </Modal.Footer>
    </>
  );
};

export default EditLivraison;
