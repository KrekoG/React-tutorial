//import React from react;
//import ReactDOM from react-dom;

function Header() {
    return (
        <nav>
            <img src="./react_logo.png" width="40px" />
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
        <footer>
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