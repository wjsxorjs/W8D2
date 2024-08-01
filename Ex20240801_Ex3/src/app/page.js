"use client"

import ItemList from "@/component/ItemList";
import { Divider, Grid } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
// import styles from "./page.module.css"; // 특정한 객체만 사용할 수 있음

export default function Home() {
  const api_url = "/api/v1/products.json?brand=maybelline";

  const [list, setList] = useState([]);


  const getData = () => {
    axios.get(
      api_url
    ).then(data => {
      console.log(data);
      setList(data.data);
    })
  };

  // 최초 한 번만 호출하기 위해 사용함!
  useEffect(() => {
    getData();
  },[]);

  return (
    <main style={{padding: '20px', width: '80%', margin: 'auto'}}>
      <h2>베스트상품</h2>
      <Divider style={{margin: '10px 0'}}/>{/* 구분선 */}
      <ItemList itemList={list.slice(0,10)}/>
      <div style={{marginTop:'30px'}}>
        <h2>신상품</h2>
        <Divider style={{margin: '10px 0'}}/>{/* 구분선 */}
        <ItemList itemList={list.slice(10,30)}/>
      </div>
    </main>
  );
}
