import ModuleList from "../Modules/List";

function Home() {
  return (
    <div className="d-flex">
      <h2>Home</h2>

      <div className="col-8">
        <ModuleList />
      </div>

      <div className="col-4">
        <link rel="stylesheet" href="/libs/bootstrap/bootstrap.min.css" />
        <h2>Status</h2>
        <button type="button" className="btn btn-secondary">
          {" "}
          Import Existing Content{" "}
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-secondary">
          {" "}
          Import from Commons{" "}
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-secondary">
          {" "}
          Choose Home Page{" "}
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-secondary">
          {" "}
          View Course Stream{" "}
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-secondary">
          {" "}
          New Announcement{" "}
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-secondary">
          {" "}
          New Analytics
        </button>
        <br />
        <br />
        <button type="button" className="btn btn-secondary">
          {" "}
          View Course Notifications
        </button>

        <br />
        <h1>To Do </h1>
        <hr />
        <a href="/Kanbas/Courses/Modules/screen.html">Assignment 1</a>
        <br />

        <a href="/Kanbas/Courses/Modules/screen.html">Assignment 2</a>
        <br />
        <a href="/Kanbas/Courses/Modules/screen.html">Assignment 3</a>
        <br />
      </div>
    </div>
  );
}
export default Home;
