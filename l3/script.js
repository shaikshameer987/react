import ReactDOM from "react-dom/client";

// const heading1 = React.createElement("h1", { id: "heading1", key: 1 }, "Hello World"); // js react object
// const heading2 = React.createElement("h2", { id: "heading2", key: 2 }, "Shaik Shameer"); // js react object

// const parent = React.createElement("div", { id: "parent" }, [heading1, heading2]);

const ParentComponent = () => {
    return (
        <div id="parent">
            <h1 id="heading1">Hello World</h1>
            <h1 id="heading2">Shaik Shameer Basha</h1>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent); this will convert the js react object to html tags and replaces the new html content inside the root.
root.render(<ParentComponent />);
