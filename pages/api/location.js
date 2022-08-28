import axios from "axios";

export default async function handler(req, res) {
  const options = {
    method: "GET",
    url: "https://realty-in-us.p.rapidapi.com/locations/auto-complete",
    params: { input: req.query.keyword },
    headers: {
      "x-rapidapi-host": "realty-in-us.p.rapidapi.com",
      "x-rapidapi-key": process.env.NEXT_PUBLIC_API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      //console.log(response);
      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
