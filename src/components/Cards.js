import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import NumericLabel from "react-pretty-numbers";
import "./Cards.css";

function Cards({ data }) {
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
                <NumericLabel params={option}>{data.confirmed}</NumericLabel>
              </Typography>
              <Typography variant="body2">
                New cases: +
                <NumericLabel params={option}>{data.newConfirmed}</NumericLabel>
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
                <NumericLabel params={option}>{data.recovered}</NumericLabel>{" "}
              </Typography>
              <Typography variant="body2">
                New recovery: +
                <NumericLabel params={option}>{data.newRecovered}</NumericLabel>
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
                <NumericLabel params={option}>{data.deaths}</NumericLabel>
              </Typography>
              <Typography variant="body2">
                New deaths: +
                <NumericLabel params={option}>{data.newDeaths}</NumericLabel>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
