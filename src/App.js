import React from "react";
import "./App.css";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Selector from "./components/Selector";
import Chart from "./components/Chart";
import { fetchData } from "./api";

class App extends React.Component {
  state = {
    data: {},
    countries: [],
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleChangeCountry = async (index) => {
    this.setState({ countries: this.state.data.data.Countries[index] });
    // console.log(this.state.data.data.Countries[index]);
    // console.log(index);
  };

  render() {
    const { data, countries } = this.state;
    // console.log(countries);

    return (
      <div className="app">
        <Header />
        <Selector handleChangeCountry={this.handleChangeCountry} />
        <Cards allData={data} countryData={countries} />
        <Chart />
      </div>
    );
  }
}

export default App;
