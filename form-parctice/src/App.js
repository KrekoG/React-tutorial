import React from 'react'
import './css/main.scss'

export default function App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
    })

    function handleChange(event, attribute) {
        setFormData(prev =>
            ({...prev, [attribute]: event.target.value})
        )
    }

    console.log(formData)

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={event => handleChange(event, "firstName")}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={event => handleChange(event, "lastName")}
            />
        </form>
    )
}