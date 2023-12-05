import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section>
      <h1>Admins Page</h1>
      <br />
      <p>On this page, you can manage your motion-design employees.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  );
};

export default Admin;
