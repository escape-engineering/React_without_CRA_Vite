const App = () => {
    console.log(process.env.APP_API_URL);
    return (
        <>
            <h1>hello world!!</h1>
        </>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
