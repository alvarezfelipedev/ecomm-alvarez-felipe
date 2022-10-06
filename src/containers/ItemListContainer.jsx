import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/FirebaseConfig";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setSpinner(true);
    const fetchNotes = async () => {
      if (id) {
        const q = query(
          collection(db, "products"),
          where("category", "==", id)
        );
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setData(dataFromFirestore);
        setSpinner(false);
      } else {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map((item) => ({
          id: item.id,
          ...item.data(),
        }));
        setData(dataFromFirestore);
        setSpinner(false);
      }
    };
    fetchNotes();
  }, [id]);

  useEffect(() => {
    return () => {
      setData([]);
    };
  }, []);

  return (
    <>
      {spinner === true ? (
        <div className="d-flex justify-content-center m-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden ">Loading...</span>
          </div>
        </div>
      ) : (
        <ItemList items={data} />
      )}
    </>
  );
};
export default ItemListContainer;
