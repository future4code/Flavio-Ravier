import React from 'react'
import { Paper, Tabs } from 'material-ui'
import { Tab } from 'material-ui/Tabs'


// deixei aqui feito, pq se tivesse tempo eu ia fazer um filtro pras viagens por planeta.
export default props =>
  <Paper>
    <Tabs
      value={0}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" />
      <Tab label="Marte" />
      <Tab label="Plutão" />
      <Tab label="Saturno" />
      <Tab label="Neturno" />
      <Tab label="Jupiter" />
    </Tabs>
  </Paper>