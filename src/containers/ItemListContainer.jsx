import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import dataFromDB from "../utils/data";
import ItemList from "../components/ItemList/ItemList";
import ItemCount from "../components/ItemCount/ItemCount";

const ItemListContainer = () => {

  const [data, setData] = useState([])

  useEffect(() => {
     // DB call
     fetchData(2000, dataFromDB)
      .then(result => setData(result))
      .catch(err => console.log(err))

  }, [])

  return (
    <>
      <ItemList items={data}/>
      <ItemCount initial={1} stock={10} />
    </>
  )
}
export default ItemListContainer;