const header = document.createElement("h1");
header.textContext = "Header over here!";
header.className = "Style";
document.getElementById("root").append(header);
console.log(header)

const element = <h1 className="Style">Header over here</h1>;

console.log(element)

ReactDOM.render(element, document.getElementById("root"));
