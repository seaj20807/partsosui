import { useEffect, useState } from "react"
import GetId from "./GetId"

export default (props) => {

    const [part, setPart] = useState([])
    const REST_URL = 'https://partsos.onrender.com/api/processes/' + GetId(props) + '/part'

    useEffect(() => getPart(), [])

    const getPart = () => {
        fetch(REST_URL)
            .then(response => response.json())
            .then(responseData => {
                setPart(responseData)
            })
            .catch(error => console.error(error))
    }

    return part.name

}