import axios from "axios";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditLivraison from "./EditLivraison";

const LivraisonList = ({ livraisons }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteLivraisonHandler = async (id) => {
    await axios
      .delete(`http://127.0.0.1:8000/delete_livraion/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <tr className="bg-white">
        <td>{livraisons.nomBoutique}</td>
        <td>{livraisons.numCollier}</td>
        <td>{livraisons.pointDepart}</td>
        <td>{livraisons.pointArriver}</td>
        <td>{livraisons.dimension}</td>
        <td>{livraisons.conservation}</td>
        <td>{livraisons.poids}</td>
        <td>
          <Button
            type="button"
            className="btn btn-primary px-3"
            onClick={handleShow}
          >
            Modifier
          </Button>
          <Button
            type="button"
            className="btn btn-danger m-1"
            onClick={() => deleteLivraisonHandler(livraisons.id)}
          >
            Supprimer
          </Button>
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-white" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <EditLivraison livraison={livraisons} />
      </Modal>
    </>
  );
};
export default LivraisonList;
