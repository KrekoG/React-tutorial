import React from 'react'
import './css/main.scss'

export default function App() {
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        confirmPassword: "",
        joinMailingList: false,
    })

    function handleChange(event) {
        const target = event.target
        setFormData(prev => ({...prev, [target.name]: target.type === "checkbox" ? target.checked : target.value}))
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(
            formData.password === formData.confirmPassword
            ? "Successfully signed up"
            : "passwords do not match"
        )

        if (formData.joinMailingList) {
            console.log("Thanks for signing up for our mailing list!")
        }
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input
                    className="input-field"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                    placeholder="Email address"
                />
                <input
                    className="input-field"
                    onChange={handleChange}
                    type="password"
                    value={formData.password}
                    name="password"
                    placeholder="password"
                />
                <input
                    className="input-field"
                    onChange={handleChange}
                    type="password"
                    value={formData.confirmPassword}
                    name="confirmPassword"
                    placeholder="confirmPassword"
                />
                <span className="input-field">
                    <input
                        type="checkbox"
                        name="joinMailingList"
                        id="joinMailingList"
                        checked={formData.joinMailingList}
                        onChange={handleChange}
                    />
                    <label htmlFor="joinMailingList">Would you like to join our mailing list?</label>
                </span>
                <button className="input-field">Submit</button>
            </form>
        </main>
    )
}