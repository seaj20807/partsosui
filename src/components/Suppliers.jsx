import React, { useState, useEffect } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'

export default function Suppliers() {

    const [suppliersList, setSuppliersList] = useState([])
    const REST_URL = "https://partsos.onrender.com/api/suppliers"

    useEffect(() => getSuppliersList(), [])

    const getSuppliersList = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setSuppliersList(responseData._embedded.suppliers)
            })
            .catch(error => console.error(error))
    }

    const columns = [
        {
            field: 'name',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            field: 'address',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            field: 'phone',
            sortable: true,
            filter: true,
            floatingFilter: true
        },
        {
            field: 'email',
            sortable: true,
            filter: true,
            floatingFilter: true
        }
    ]

    return (
        <div className="ag-theme-material"
            style={{ height: '700px', width: '100%', margin: 'auto' }}>
            <AgGridReact
                rowData={suppliersList}
                columnDefs={columns}
            />
        </div>
    )
}