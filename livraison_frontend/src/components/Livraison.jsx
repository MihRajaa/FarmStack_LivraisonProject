import React from "react";
import LivraisonList from "./LivraisonList";

const Livraison = () => {
  return (
    <section class="h-100 bg-dark">
      <div class="container py-5 h-100 ">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="card card-registration my-4">
            <div class="row g-0 bg-white">
              <div class="card-body p-md-5 text-black bg-white">
                <div class="d-flex justify-content-end pt-3 bg-white">
                  <button
                    type="button"
                    class="btn bg-dark text-white btn-lg ms-2"
                  >
                    Demande livraison
                  </button>
                </div>
              </div>
              <table class="table align-middle">
                <thead class="text-white">
                  <tr>
                    <th scope="col">Nom Boutique</th>
                    <th scope="col">N° collier</th>
                    <th scope="col">Point Départ</th>
                    <th scope="col">Point Arriver</th>
                    <th scope="col">Dimension</th>
                    <th scope="col">Conservation Particulier</th>
                    <th scope="col">Poids</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <LivraisonList />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Livraison;
