import { Link } from "react-router-dom";

const Creative_Director = () => {
  return (
    <section>
      <h1>Creative directors' Page</h1>
      <br />
      <p>On this page, you can do something</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Creative_Director;
