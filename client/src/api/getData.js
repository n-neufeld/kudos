import axios from "axios";

export function getData(url) {
  axios({
    method: "get",
    url: url,
    headers: { "Access-Control-Allow-Origin": "*" },
  }).then((res) => {
    return res.data;
  });
}
