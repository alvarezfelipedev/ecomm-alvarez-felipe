import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import dataFromDB from "../utils/data";
import ItemDetail from "../components/ItemDetail/ItemDetail";
import ItemCount from "../components/ItemCount/ItemCount";

const ItemDetailContainer = () => {

  const [data, setData] = useState({})

  useEffect(() => {
     // DB call
     fetchData(2000, dataFromDB[1])
      .then(result => setData(result))
      .catch(err => console.log(err))

  }, [])

  return (
    <>
      <ItemDetail items={data}/>
      <ItemCount initial={1} stock={10} />
    </>
  )
}
export default ItemDetailContainer;