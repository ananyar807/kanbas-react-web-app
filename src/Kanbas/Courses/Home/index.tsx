import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="d-flex">
      <div className="col-8">
        <h2>Home</h2>
        <ModuleList />
      </div>

      <div className="status flex-grow-0 me-2 d-none d-lg-block">
        <link rel="stylesheet" href="/libs/bootstrap/bootstrap.min.css" />
        <h3>Status</h3>
        <button type="button" className="btn btn-secondary">
          Import Existing Content{" "}
        </button>
        <br />
        <button type="button" className="btn btn-secondary">
          Import from Commons{" "}
        </button>
        <br />
        <button type="button" className="btn btn-secondary">
          Choose Home Page{" "}
        </button>
        <br />
        <button type="button" className="btn btn-secondary">
          View Course Stream{" "}
        </button>
        <br />
        <button type="button" className="btn btn-secondary">
          New Announcement{" "}
        </button>
        <br />
        <button type="button" className="btn btn-secondary">
          New Analytics
        </button>
        <br />
        <button type="button" className="btn btn-secondary">
          View Course Notifications
        </button>

        <br />
        <br />
        <div className="assignments">
          <h3>To Do </h3>
          <hr />
          <a href="/Kanbas/Courses/RS101/Assignments/A101">Assignment 1</a>
          <br />
          <a href="/Kanbas/Courses/Modules/screen.html">Assignment 2</a>
          <br />
          <a href="/Kanbas/Courses/Modules/screen.html">Assignment 3</a>
          <br />
        </div>
      </div>
    </div>
  );
}
export default Home;
