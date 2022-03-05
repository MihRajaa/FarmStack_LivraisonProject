import { Modal, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { AddLivraison } from "./AddLivraison";
import LivraisonList from "./LivraisonList";
import axios from "axios";

const Livraison = () => {
  const [livraison, setLivraison] = useState([{}]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/livraisons").then((res) => {
      setLivraison(res.data).catch((err) => console.log(err));
    });
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="card card-registration my-4">
            <div className="row g-0 bg-white">
              <div className="card-body p-md-5 text-black bg-white">
                <div className="d-flex justify-content-end pt-3 bg-white">
                  <Button
                    className="btn bg-dark text-white btn-lg ms-2"
                    onClick={handleShow}
                  >
                    Demande livraison
                  </Button>
                </div>
              </div>
              <table className="table align-middle">
                <thead className="text-white">
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
                {livraison !== [] ? (
                  livraison.map((livraison) => (
                    <tbody className="bg-white" key={livraison.id}>
                      <LivraisonList livraisons={livraison} />
                    </tbody>
                  ))
                ) : (
                  <tbody></tbody>
                )}
              </table>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-white" closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <AddLivraison />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Livraison;
