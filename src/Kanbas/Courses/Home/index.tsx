import ModuleList from "../Modules/List";
import "./index.css";

function Home() {
  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-fill">
        <h2>Home</h2>
        <ModuleList />
      </div>

      <div className="status flex-grow-0 me-2 d-none d-lg-block">
        <link rel="stylesheet" href="/libs/bootstrap/bootstrap.min.css" />
        <h3>Status</h3>
        <button type="button" className="statusButton btn btn-secondary">
          Import Existing Content{" "}
        </button>
        <br />
        <button type="button" className="statusButton btn btn-secondary">
          Import from Commons{" "}
        </button>
        <br />
        <button type="button" className="statusButton btn btn-secondary">
          Choose Home Page{" "}
        </button>
        <br />
        <button type="button" className="statusButton btn btn-secondary">
          View Course Stream{" "}
        </button>
        <br />
        <button type="button" className="statusButton btn btn-secondary">
          New Announcement{" "}
        </button>
        <br />
        <button type="button" className="statusButton btn btn-secondary">
          New Analytics
        </button>
        <br />
        <button type="button" className="statusButton btn btn-secondary">
          View Course Notifications
        </button>

        <br />
        <br />
        <div className="assignments">
          <h3>To Do </h3>
          <hr />
          <a href="/Kanbas/Courses/RS101/Assignments/A101">Assignment 1</a>
          <p> 100 points | January 12 2024 </p>
          <a href="/Kanbas/Courses/Modules/screen.html">Assignment 2</a>
          <p> 30 points | February 1 2024 </p>
          <a href="/Kanbas/Courses/Modules/screen.html">Assignment 3</a>
          <p> 80 points | March 12 2024 </p>
        </div>
      </div>
    </div>
  );
}
export default Home;
