import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import Button from '@mui/material/Button'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import AddPart from './AddPart'
import GetId from './GetId'
import GetSupplier from './GetSupplier'

export default function Parts() {

    const [partsList, setPartsList] = useState([])
    const REST_URL = "http://localhost:8080/api/parts"

    useEffect(() => getPartsList(), [])

    const getPartsList = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setPartsList(responseData._embedded.parts)
            })
            .catch(error => console.error(error))
    }

    const addPart = (newPart) => {
        fetch(REST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPart)
        })
            .then(response => getPartsList())
            .catch(error => console.error(error))
    }

    const columns = [
        {
            cellRenderer: GetId, headerName: 'Part ID'
        },
        { field: 'name' },
        { field: 'surfaceArea' },
        { field: 'baseMaterial' },
        {
            cellRenderer: GetSupplier, headerName: 'Supplier'
        }
    ]

    return (
        <React.Fragment>
            <AddPart addPart={addPart} />
            <div className="ag-theme-material"
                style={{ height: '700px', width: '100%', margin: 'auto' }}>
                <AgGridReact
                    rowData={partsList}
                    columnDefs={columns}
                />
            </div>
        </React.Fragment>
    )
}