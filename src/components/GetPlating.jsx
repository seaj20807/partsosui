import { useEffect, useState } from "react"
import GetId from "./GetId"

export default (props) => {

    const [plating, setPlating] = useState([])
    const REST_URL = 'https://partsos.onrender.com/api/processes/' + GetId(props) + '/plating'

    useEffect(() => getPlating(), [])

    const getPlating = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setPlating(responseData)
            })
            .catch(error => console.error(error))
    }

    return plating.platingMaterial

}