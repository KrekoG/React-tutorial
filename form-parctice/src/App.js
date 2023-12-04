import React from 'react'
import './css/main.scss'

export default function App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
    })

    function handleChange(event) {
        setFormData(prev =>
            ({...prev, [event.target.name]: event.target.value})
        )
    }

    console.log(formData)

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
            <input
                type="email"
                placeholder="Email address"
                onChange={handleChange}
                name="email"
            />
        </form>
    )
}