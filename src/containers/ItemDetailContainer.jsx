/* eslint-disable eqeqeq */
import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import dataFromDB from "../utils/data";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import ItemCount from "../components/ItemCount/ItemCount";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [data, setData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    if(id){
      // DB call
      fetchData(2000, dataFromDB.find(item => item.id === parseInt(id)))
       .then(result => setData(result))
       .catch(err => console.log(err))
    }
  }, [id])

  return (
    <>
      <ItemDetail items={data}/>
      <ItemCount initial={1} stock={10} />
    </>
  )
}
export default ItemDetailContainer;