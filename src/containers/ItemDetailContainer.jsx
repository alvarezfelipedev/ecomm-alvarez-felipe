import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../utils/fetchData";
import dataFromDB from "../utils/data";
import ItemDetail from "../components/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // DB call
      fetchData(
        2000,
        dataFromDB.find((item) => item.id === parseInt(id))
      )
        .then((result) => setData(result))
        .catch((err) => console.log(err));
    }
  }, [id]);

  return (
    <>
      <ItemDetail items={data} />
    </>
  );
};
export default ItemDetailContainer;
