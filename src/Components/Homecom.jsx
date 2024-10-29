import React, { useState } from "react";
import { Tab, Tabs, Card, Grid } from "@mui/material";
const Homecom = () => {
  const [value, setValue] = useState(0);
  const handleChange = (e, Newvalue) => {
    setValue(Newvalue);
    console.log(Newvalue);
  };
  return (
    <div
      style={{
        top: 0,
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          top: 0,
          position: "fixed",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Item One" />
          <Tab label="Item Two">
            <select></select>
          </Tab>
          <Tab label="Item Three" />
        </Tabs>
      </div>

      <Grid container spacing={2}>
        <Grid item sm={6} md={4}>
          <Card variant="outlined">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            dolorum deleniti eos. Modi molestias natus delectus fuga
            repudiandae, corporis similique magnam! Magnam sequi numquam odit
            praesentium ratione adipisci fugit. Laboriosam.
          </Card>
        </Grid>

        <Grid item sm={6} md={4}>
          <Card variant="outlined">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            dolorum deleniti eos. Modi molestias natus delectus fuga
            repudiandae, corporis similique magnam! Magnam sequi numquam odit
            praesentium ratione adipisci fugit. Laboriosam.
          </Card>
        </Grid>

        <Grid item sm={6} md={4}>
          <Card variant="outlined">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            dolorum deleniti eos. Modi molestias natus delectus fuga
            repudiandae, corporis similique magnam! Magnam sequi numquam odit
            praesentium ratione adipisci fugit. Laboriosam.
          </Card>
        </Grid>

        <Grid item sm={6} md={4}>
          <Card variant="outlined">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            dolorum deleniti eos. Modi molestias natus delectus fuga
            repudiandae, corporis similique magnam! Magnam sequi numquam odit
            praesentium ratione adipisci fugit. Laboriosam.
          </Card>
        </Grid>

        <Grid item sm={6} md={4}>
          <Card variant="outlined">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            dolorum deleniti eos. Modi molestias natus delectus fuga
            repudiandae, corporis similique magnam! Magnam sequi numquam odit
            praesentium ratione adipisci fugit. Laboriosam.
          </Card>
        </Grid>

        <Grid item sm={6} md={4}>
          <Card variant="outlined">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            dolorum deleniti eos. Modi molestias natus delectus fuga
            repudiandae, corporis similique magnam! Magnam sequi numquam odit
            praesentium ratione adipisci fugit. Laboriosam.
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Homecom;
