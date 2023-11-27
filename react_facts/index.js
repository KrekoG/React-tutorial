function Navbar() {
    return (
        <nav>
            <p>this is a navbar</p>
        </nav>
    );
}

function MainContent() {
    return (
    <div>
        <h1>This is the main content</h1>
    </div>
    );
}

ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)