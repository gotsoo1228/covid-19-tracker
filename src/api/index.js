import axios from "axios";

const url = "https://api.covid19api.com/summary";

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    const modifiedData = {
      confirmed: data.Global.TotalConfirmed,
      recovered: data.Global.TotalRecovered,
      deaths: data.Global.TotalDeaths,
      newConfirmed: data.Global.NewConfirmed,
      newRecovered: data.Global.NewRecovered,
      newDeaths: data.Global.NewDeaths,
    };
    // console.log(data);
    // console.log(data.Countries);
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { Countries },
    } = await axios.get(url);

    return Countries;
  } catch (error) {
    console.log(error);
  }
};
