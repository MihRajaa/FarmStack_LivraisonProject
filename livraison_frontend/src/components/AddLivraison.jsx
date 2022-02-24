import axios from "axios";
import React from "react";

export const AddLivraison = () => {
  const [nom_boutique, setNom_boutique] = useState("");
  const [num_collier, setNum_collier] = useState("");
  const [point_depart, setPoint_depart] = useState("");
  const [point_arriver, setPoint_arriver] = useState("");
  const [conservation, setConservation] = useState("");
  const [poids, setPoids] = useState("");
  const [dimension, setDimension] = useState("");

  const addLivraisonHandler = () => {
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
    <section class="h-100 bg-dark">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="card-body p-md-5 text-black">
                  <h3 class="mb-5 text-uppercase">Demande de livraison</h3>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          class="form-control form-control-lg"
                          onChange={(e) => setNom_boutique(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1m">
                          Nom Boutique
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1n"
                          class="form-control form-control-lg"
                          onChange={(e) => setNum_collier(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1n">
                          N° collier
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1m1"
                          class="form-control form-control-lg"
                          onChange={(e) => setPoint_depart(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1m1">
                          Point de départ
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1n1"
                          class="form-control form-control-lg"
                          onChange={(e) => setPoint_arriver(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1n1">
                          Point d'arriver
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1m1"
                          class="form-control form-control-lg"
                          onChange={(e) => setDimension(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1m1">
                          Dimension
                        </label>
                      </div>
                    </div>
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1n1"
                          class="form-control form-control-lg"
                          onChange={(e) => setConservation(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1n1">
                          Conservation particulier
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="form-outline mb-4">
                    <div class="col-md-6 mb-4">
                      <div class="form-outline">
                        <input
                          type="text"
                          id="form3Example1n1"
                          class="form-control form-control-lg"
                          onChange={(e) => setPoids(e.target.value)}
                        />
                        <label class="form-label" for="form3Example1n1">
                          Poids
                        </label>
                      </div>
                    </div>
                  </div>

                  <div class="d-flex justify-content-end pt-3">
                    <button type="button" class="btn btn-light btn-lg">
                      Effacer Tout
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning btn-lg ms-2"
                      onClick={addLivraisonHandler}
                    >
                      Soumettre
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
