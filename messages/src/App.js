import React from 'react'
import './css/main.scss'

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])

    function setToNoMessage() {
        setMessages([])
    }
    function setToOneMessage() {
        setMessages(["a"])
    }
    function setToTwoMessages() {
        setMessages(["a", "b"])
    }

    return (
        <main>
            <button onClick={setToNoMessage}>No msg</button>
            <button onClick={setToOneMessage}>1 msg</button>
            <button onClick={setToTwoMessages}>2 msgs</button>
            {
                messages.length > 0
                ?
                <p>
                    You have {messages.length} new {
                        messages.length < 2 ? "message" : "messages"
                    }
                </p>
                : <p>You are all caught up!</p>
            }
        </main>
    )
}