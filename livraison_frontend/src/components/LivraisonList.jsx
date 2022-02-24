import React, { useEffect, useState } from "react";
import axios from "axios";

const LivraisonList = () => {
  const [livraison, setLivraison] = useState([{}]);

  useEffect(() => {
    axios.get().then((res) => {
      setLivraison(res.data);
    });
  });

  return (
    <tr class="bg-white">
      <th>{livraison.nom}</th>
      <td>{livraison.nom}</td>
      <td>{livraison.nom}</td>
      <td>{livraison.nom}</td>
      <td>{livraison.nom}</td>
      <td>{livraison.nom}</td>
      <td>{livraison.nom}</td>
      <td>
        <button type="button" class="btn btn-primary px-3">
          Modifier
        </button>
        <button type="button" class="btn btn-danger m-1">
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default LivraisonList;
