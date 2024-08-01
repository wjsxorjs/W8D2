"use client"

import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Table, TableCell, TableHead, TableRow } from "@mui/material";

export default function Home() {

  const api_url = "/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=528KjHbHGy9mCKDYxlXAan09GfBI4mVvwUhKE2q2jIVcBQa%2B5wUYNZK1ZyTrWRiRziQlGQuJy5VKnGWTmwxHLA%3D%3D&returnType=json&numOfRows=20&stationName=강남구&dataTerm=DAILY&ver=1.0";

  const [list, setList] = useState([]);

  const getData = () => {
    axios.get(
      api_url
    ).then(res => {
      console.log(res);
      setList(res.data.response.body.items);
    })
  };

  // 최초 한 번만 호출하기 위해 사용함!
  useEffect(() => {
    getData();
  },[]);

  return (
    <main className={styles.main}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>아황산가스 농도</TableCell>
              <TableCell>일산화탄소 농도</TableCell>
              <TableCell>오존 농도</TableCell>
            </TableRow>
          </TableHead>
        {list.map((item, index)=>(
          <TableRow key={index}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{item.so2Value}</TableCell>
              <TableCell>{item.coValue}</TableCell>
              <TableCell>{item.o3Value}</TableCell>
          </TableRow>
        ))}
        </Table>
    </main>
  );
}
