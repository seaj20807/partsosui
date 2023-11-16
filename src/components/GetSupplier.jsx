import { useEffect, useState } from 'react'
import GetId from './GetId'

export default (props) => {

    const [supplier, setSupplier] = useState([])
    const REST_URL = 'https://partsos.onrender.com/api/parts/' + GetId(props) + '/supplier'

    useEffect(() => getSupplier(), [])

    const getSupplier = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setSupplier(responseData)
            })
            .catch(error => console.error(error))
    }

    return supplier.name

}