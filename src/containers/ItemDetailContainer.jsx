import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../utils/FirebaseConfig";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setSpinner(true)
    const obtenerData = async () => {
      const docSnap = await getDoc(doc(db, "products", id))
      const producto = { id: id, ...docSnap.data() }
      setData(producto)
      setSpinner(false);
    }

    obtenerData();
  }, [id]);

  return (
    <>
    {
      spinner === true
        ? <div className="d-flex">
            <img className="ball rotate-vertical-center" src="https://i.ibb.co/cNQDsBq/ball-spinner.webp" alt="loading" />
          </div>
        : <ItemDetail items={data} />
    }
    </>
  );
};
export default ItemDetailContainer;
