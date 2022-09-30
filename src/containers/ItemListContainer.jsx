import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../utils/FirebaseConfig";
import { collection, getDocs, where, query } from "firebase/firestore";


const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const [spiner ,setspiner]= useState(true)
  const { id } = useParams();

  useEffect(() => {
    setspiner(true)
    const fetchNotes = async () => {
      if (id) {
        const q = query(collection(db, 'products'), where('category', '==', id))
        const querySnapshot = await getDocs(q)
        const dataFromFirestore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setData(dataFromFirestore)
        setspiner(false)
      } else {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map(item => ({
          id: item.id,
          ...item.data()
        }))
        setData(dataFromFirestore)
        setspiner(false)
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
    <>{spiner===true?<h2>cargando...</h2>:
      <ItemList items={data} />
    }
      
    </>
  );
};
export default ItemListContainer;
