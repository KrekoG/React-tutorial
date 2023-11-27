//import React from react;
//import ReactDOM from react-dom;

function Header() {
    return (
        <nav className="nav-bar">
            <img className="nav-logo" src="./react_logo.png" />
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

function MyList() {
    return (
        <div>
            <h1>List of reasons:</h1>
            <ol>
                <li>First reason</li>
                <li>Second reason</li>
                <li>Third reason</li>
            </ol>
        </div>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <small>2023 by the keyboard of Krekog</small>
        </footer>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MyList />
            <Footer />
        </div>
    )
}

ReactDOM.render(
    <Page />,
    document.getElementById("root")
);