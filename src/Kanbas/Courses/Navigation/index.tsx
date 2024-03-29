import { Link, useLocation } from "react-router-dom";
import "./index.css";
function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Grades",
    "Assignments",
    "Quizzes",
    "People",
    "Panapto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-navigation col-md-2 d-none d-md-block">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
  );
}
export default CourseNavigation;
