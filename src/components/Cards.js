import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import NumericLabel from "react-pretty-numbers";
import axios from "axios";
import "./Cards.css";

function Cards() {
  const [fetchedGlobal, setFetchedGlobal] = useState({
    NewConfirmed: 0,
    TotalConfirmed: 0,
    NewRecovered: 0,
    TotalRecovered: 0,
    NewDeaths: 0,
    TotalDeaths: 0,
  });

  useEffect(() => {
    const fetchGlobal = async () => {
      try {
        const {
          data: { Global },
        } = await axios.get("https://api.covid19api.com/summary");

        setFetchedGlobal({
          NewConfirmed: Global.NewConfirmed,
          TotalConfirmed: Global.TotalConfirmed,
          NewRecovered: Global.NewRecovered,
          TotalRecovered: Global.TotalRecovered,
          NewDeaths: Global.NewDeaths,
          TotalDeaths: Global.TotalDeaths,
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchGlobal();
  }, [setFetchedGlobal]);

  let option = {
    justification: "L",
    locales: "en-AU",
    currency: false,
    currencyIndicator: "AUD",
    percentage: false,
    precision: 2,
    wholenumber: null,
    commafy: true,
    shortFormat: true,
    shortFormatMinValue: 1000,
    shortFormatPrecision: 3,
    title: true,
    cssClass: ["red"],
  };

  return (
    <div className="card_cotainer">
      <Grid container spacing={6} justify="center">
        <Grid item xs={12} md={3}>
          <Card className="card__infected">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5">
                Total:{" "}
                <NumericLabel params={option}>
                  {fetchedGlobal.TotalConfirmed}
                </NumericLabel>
              </Typography>
              <Typography variant="body2">
                New cases: +
                <NumericLabel params={option}>
                  {fetchedGlobal.NewConfirmed}
                </NumericLabel>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className="card__recovered">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5">
                Total:{" "}
                <NumericLabel params={option}>
                  {fetchedGlobal.TotalRecovered}
                </NumericLabel>{" "}
              </Typography>
              <Typography variant="body2">
                New recovery: +
                <NumericLabel params={option}>
                  {fetchedGlobal.NewRecovered}
                </NumericLabel>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className="card__deaths">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5">
                Total:{" "}
                <NumericLabel params={option}>
                  {fetchedGlobal.TotalDeaths}
                </NumericLabel>
              </Typography>
              <Typography variant="body2">
                New deaths: +
                <NumericLabel params={option}>
                  {fetchedGlobal.NewDeaths}
                </NumericLabel>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
