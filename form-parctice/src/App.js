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

    return (
        <main>
            <form>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.firstName}
                    name="firstName"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.lastName}
                    name="lastName"
                />
                <input
                    type="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                />
            </form>
            <button onClick={(() => {console.log(formData)})}>log</button>
        </main>
    )
}