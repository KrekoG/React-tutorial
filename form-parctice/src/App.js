import React from 'react'
import './css/main.scss'

export default function App() {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "unemployed",
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
            <h1>Form practice</h1>
            <form>
                <input
                    className="input-field"
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.firstName}
                    name="firstName"
                />
                <input
                    className="input-field"
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.lastName}
                    name="lastName"
                />
                <input
                    className="input-field"
                    type="email"
                    placeholder="Email address"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                />

                <textarea
                    className="input-field"
                    placeholder="Your message here"
                    onChange={handleChange}
                    value={formData.comments}
                    name="comments"
                />
                <div className="input-field">
                    <input
                        id="isFriendly"
                        type="checkbox"
                        checked={formData.isFriendly}
                        onChange={handleChange}
                        name="isFriendly"
                    />
                    <label htmlFor="isFriendly">Are you friendly?</label>
                </div>
                <fieldset className="input-field">
                    <legend>Current employment status</legend>
                    <span>
                        <input
                            type="radio"
                            onChange={handleChange}
                            name="employment"
                            id="unemployed"
                            value="unemployed"
                            checked={formData.employment === "unemployed"}
                        />
                        <label htmlFor="unemployed">Unemployed</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            onChange={handleChange}
                            name="employment"
                            id="part-time"
                            value="part-time"
                            checked={formData.employment === "part-time"}
                        />
                        <label htmlFor="part-time">Part-time</label>
                    </span>
                    <span>
                        <input
                            type="radio"
                            onChange={handleChange}
                            name="employment"
                            id="full-time"
                            value="full-time"
                            checked={formData.employment === "full-time"}
                        />
                        <label htmlFor="full-time">Full-time</label>
                    </span>
                </fieldset>
            </form>
            <button
                className="input-field"
                onClick={(() => {console.log(formData)})}
            >log</button>
        </main>
    )
}