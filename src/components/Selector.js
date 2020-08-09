import React, { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../api";

const Selector = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchedAPI = () => {
      setFetchedCountries(fetchCountries);
    };
    fetchedAPI();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <div>
      <FormControl className="form_control">
        <NativeSelect>
          <option value="global">Global</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Selector;
