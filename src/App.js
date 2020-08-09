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
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleChangeCountry = async (country) => {
    console.log(country);
  };

  render() {
    const { data } = this.state;

    return (
      <div className="app">
        <Header />
        <Selector handleChangeCountry={this.handleChangeCountry} />
        <Cards allData={data} />
        <Chart />
      </div>
    );
  }
}

export default App;
