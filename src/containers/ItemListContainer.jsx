import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/FirebaseConfig";
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchNotes = async () => {
      if (id) {
        const q = query(collection(db, 'products'), where('category', '==', id))
        const querySnapshot = await getDocs(q)
        const dataFromFirestore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setData(dataFromFirestore)
      } else {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setData(dataFromFirestore)
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
      <ItemList items={data} />
    </>
  );
};
export default ItemListContainer;
