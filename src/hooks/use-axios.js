import axios from "axios";
import { useState, useCallback,useEffect } from "react";
import swal from "sweetalert";

axios.defaults.baseURL = "https://api.spoonacular.com";

export const useAxios = () => {
  const [response, setResponse] = useState(undefined);

  const fetchData = useCallback((params) => {
    axios.request(params)
      .then((res) => {
        setResponse(res.data);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          return swal(error.response.data.error, "", "warning");
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          return swal(console.log(error.request));
        } else {
          // Something happened in setting up the request that triggered an Error
          return swal(console.log("Error", error.message));
        }
      })
  },[]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  return {response,fetchData};
};
