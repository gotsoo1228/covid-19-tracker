import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import axios from "axios";
// import { fetchCountries } from "../api";

const Selector = ({ handleChangeCountry }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const {
          data: { Countries },
        } = await axios.get("https://api.covid19api.com/summary");
        // console.log(Countries);
        setFetchedCountries(Countries.map((country) => country.Country));
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, [setFetchedCountries]);

  return (
    <div>
      <FormControl className="form_control" style={{ margin: "20px auto" }}>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleChangeCountry(e.target.value)}
        >
          <option value="global">Global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={i}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Selector;
