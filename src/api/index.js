import axios from "axios";

const url = "https://api.covid19api.com/summary";

export const fetchData = async () => {
  try {
    const allData = await axios.get(url);
    return allData;

    // const modifiedData = {
    //   confirmed: data.Global.TotalConfirmed,
    //   recovered: data.Global.TotalRecovered,
    //   deaths: data.Global.TotalDeaths,
    //   newConfirmed: data.Global.NewConfirmed,
    //   newRecovered: data.Global.NewRecovered,
    //   newDeaths: data.Global.NewDeaths,
    // };
    // // console.log(data);
    // // console.log(data.Countries);
    // return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
