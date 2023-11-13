import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import Button from '@mui/material/Button'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import GetId from './GetId'

export default function Platings() {

    const [platingsList, setPlatingsList] = useState([])
    const REST_URL = "http://localhost:8080/api/platings"

    useEffect(() => getPlatingsList(), [])

    const getPlatingsList = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setPlatingsList(responseData._embedded.platings)
            })
            .catch(error => console.error(error))
    }

    const columns = [
        {
            cellRenderer: GetId, headerName: 'Element Symbol'
        },
        { field: 'platingMaterial' }
    ]

    return (
        <div className="ag-theme-material"
            style={{ height: '700px', width: '100%', margin: 'auto' }}>
            <AgGridReact
                rowData={platingsList}
                columnDefs={columns}
            />
        </div>
    )
}