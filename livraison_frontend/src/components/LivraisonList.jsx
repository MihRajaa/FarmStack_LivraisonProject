import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditLivraison from "./EditLivraison";

const LivraisonList = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <tr className="bg-white">
        <td>{props.livraisons.nomBoutique}</td>
        <td>{props.livraisons.numClollier}</td>
        <td>{props.livraisons.pointDepart}</td>
        <td>{props.livraisons.pointArriver}</td>
        <td>{props.livraisons.dimension}</td>
        <td>{props.livraisons.conservation}</td>
        <td>{props.livraisons.poids}</td>
        <td>
          <Button
            type="button"
            className="btn btn-primary px-3"
            onClick={handleShow}
          >
            Modifier
          </Button>
          <button type="button" className="btn btn-danger m-1">
            Supprimer
          </button>
        </td>
      </tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="bg-white" closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <EditLivraison />
      </Modal>
    </>
  );
};
export default LivraisonList;
