import './App.css'
import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Main from './components/Main'
import Parts from './components/Parts'
import Processes from './components/Processes'
import Platings from './components/Platings'
import Suppliers from './components/Suppliers'


export default function App() {

  const [renderedPage, setRenderedPage] = useState("main")

  const navigate = (event, renderedPage) => {
    setRenderedPage(renderedPage)
  }

  return (
    <div className="App">
      <Tabs value={renderedPage} onChange={navigate}>
        <Tab value="main" label="Main Menu" />
        <Tab value="parts" label="Parts" />
        <Tab value="processes" label="Processes" />
        <Tab value="platings" label="Platings" />
        <Tab value="suppliers" label="Suppliers" />
      </Tabs>
      {renderedPage === "main" && <Main />}
      {renderedPage === "parts" && <Parts />}
      {renderedPage === "processes" && <Processes />}
      {renderedPage === "platings" && <Platings />}
      {renderedPage === "suppliers" && <Suppliers />}
    </div>
  )
}
