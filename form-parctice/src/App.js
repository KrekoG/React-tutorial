import React from 'react'
import './css/main.scss'

export default function App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target

        setFormData(prev =>
            ({
                ...prev,
                [name]: type === "checkbox" ? checked : value
            })
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

                <textarea
                    placeholder="Your message here"
                    onChange={handleChange}
                    value={formData.comments}
                    name="comments"
                />
                <div>
                    <input
                        id="isFriendly"
                        type="checkbox"
                        checked={formData.isFriendly}
                        onChange={handleChange}
                        name="isFriendly"
                    />
                    <label htmlFor="isFriendly">Are you friendly?</label>
                </div>
            </form>
            <button onClick={(() => {console.log(formData)})}>log</button>
        </main>
    )
}