import React from "react";
import BaseComponent from "../baseComponent";
import HeaderComponent from "../Header/header";
import MainComponent from "./mainComponent";
import { Row, Column } from "simple-flexbox";
import FooterComponent from "../Footer/footer";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Toast from "./Toast";
import Utils from "../../utility";
import { TweetService } from "../../services/index";

export default function CardComponent() {
  const location = useLocation();
  const url = location.search.slice(5);

  const [count, setCount] = useState({});
  const [link, setLink] = useState([]);
  const [search, setSearch] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchCount();
  }, []);

  // const fetchCount = () => {
  //   let data = {
  //     url,
  //   };
  //   axios
  //     .post(process.env.REACT_APP_GET_TWEET_BY_URL, data)
  //     .then((res) => {
  //       console.log('re--',res)
  //       Utils.apiSuccessToast("Your tweet has been Archived");
  //       setCount(res.data.responseData[0]);
  //       setLink(res.data.responseData[1]?.tweet_url);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //     });
  // };

  const fetchCount =  async () => {
      const reqObj = {
        url,
      }
      const [err, res] = await Utils.parseResponse(
        TweetService.getTweetByUrl(reqObj)
      );
      if (err) {
        console.log('er--',err)
      }
      else{
        console.log('res---',res[1]?.tweet_url)
        Utils.apiSuccessToast("Your tweet has been Archived");
        setCount(res[0][0] || "");
        setLink(res[1]?.tweet_url || "");
        setLoading(false);
      }
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
