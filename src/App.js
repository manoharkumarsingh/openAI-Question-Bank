import { Link } from "react-router-dom";
const style = {
  buttonSection: {
    display: "flex",
    justifyContent: "right",
    margin: "10px 10px 0px 0px",
  },
  btn: {
    backgroundColor: "#1da1f2",
    color: "white",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "10px",
  },
  mainSection: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

function App() {
  return (
    <div className="main-section">
      <div style={style.buttonSection}>
        <Link to={"/generate"} style={style.btn}>
          Generate using AI
        </Link>
      </div>
      <div style={style.mainSection}>
        <h1>Our Web page content</h1>
      </div>
    </div>
  );
}

export default App;
