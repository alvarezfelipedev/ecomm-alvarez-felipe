import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import dataFromDB from "../utils/data";
import ItemList from "../components/ItemList/ItemList";

const ItemListContainer = () => {

  const [data, setData] = useState([])

  useEffect(() => {
     // DB call
     fetchData(2000, dataFromDB)
      .then(result => setData(result))
      .catch(err => console.log(err))

    console.log('component did mount')
  }, [])

  return (
    <>
      <ItemList items={data}/>
    </>
  )
}
export default ItemListContainer;