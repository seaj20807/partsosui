import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import GetId from './GetId'

export default function Platings() {

    const [platingsList, setPlatingsList] = useState([])
    const REST_URL = "https://partsos.onrender.com/api/platings"

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
            cellRenderer: GetId,
            headerName: 'Chemical Symbol',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            field: 'platingMaterial',
            sortable: true,
            filter: true,
            floatingFilter: true
        }
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