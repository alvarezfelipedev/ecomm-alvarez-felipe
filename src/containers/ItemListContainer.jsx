import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/FirebaseConfig";
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [spinner, setSpinner] = useState(true)
  const { id } = useParams();

  useEffect(() => {
    setSpinner(true)
    const fetchNotes = async () => {
      if (id) {
        const q = query(collection(db, 'products'), where('category', '==', id))
        const querySnapshot = await getDocs(q)
        const dataFromFirestore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setData(dataFromFirestore)
        setSpinner(false)
      } else {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setData(dataFromFirestore)
        setSpinner(false)
      }
    }
    fetchNotes()
  }, [id]);

  useEffect(() => {
    return (() => {
      setData([]);
    })
  }, []);

  return (
    <>
    {
      spinner === true 
        ? <div className="d-flex">
            <img className="ball rotate-vertical-center" src="https://i.ibb.co/cNQDsBq/ball-spinner.webp" alt="loading" /> 
          </div>
        : <ItemList items={data} />
    }
    </>
  );
};
export default ItemListContainer;
