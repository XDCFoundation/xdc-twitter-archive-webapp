import React from "react";
import BaseComponent from "../baseComponent";
import HeaderComponent from "../Header/header";
import MainComponent from "./mainComponent";
import { Row, Column } from "simple-flexbox";
import FooterComponent from "../Footer/footer";
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from "react";

export default function CardComponent() {

  const location = useLocation()
  const url = location.search.slice(5)

  const [count, setCount] = useState({});
  const [link, setLink] = useState([]);
  const [search, setSearch] = useState({});
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    fetchCount();
  }, []);

  const fetchCount = () => {
    axios
      .get(
        process.env.REACT_APP_GET_TWEET_BY_URL + url
      )
      .then((res) => {
        setCount(res.data.responseData[0]);
        setLink(res.data.responseData[1]?.tweet_url)
        setLoading(false)
      })
      .catch((err) => {
        console.log("error-----", err);
      });
  };

  // let main = url.split('status/')[1]
  // console.log('ii--',main)



  return (
    <>
      <Column>
        <HeaderComponent count={count} headerLink={link} />
        <MainComponent count={count} load={isLoading} />
        {/* <FooterComponent /> */}
      </Column>
    </>
  );
}
