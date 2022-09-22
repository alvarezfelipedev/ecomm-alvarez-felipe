import React from "react";
import { useEffect, useState } from "react";
import fetchData from "../utils/fetchData";
import dataFromDB from "../utils/data";
import ItemList from "../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchData(
        2000,
        dataFromDB.filter((item) => item.category === id)
      )
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    } else {
      fetchData(2000, dataFromDB)
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <>
      <ItemList items={data} />
    </>
  );
};
export default ItemListContainer;
