import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      {
        <>
          <link rel="stylesheet" href="/libs/bootstrap/bootstrap.min.css" />
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" className="modulesButton btn btn-secondary">
              Collapse All
            </button>
            <button type="button" className=" modulesButton btn btn-secondary">
              View Progress
            </button>
            <select className="modulesButton">
              <option>Publish All Modules</option>
              <option>Publish This Module</option>
              <option selected value="Publish All">
                <i className="fa fa-check-circle text-success"></i> Publish All
              </option>
            </select>
            <button type="button" className="modulesButton btn btn-danger">
              + Module
            </button>
            <button type="button" className="modulesButton btn btn-secondary">
              <FaEllipsisV></FaEllipsisV>
            </button>
          </div>
          <hr />
        </>
      }
      <ul className="list-group wd-modules d-flex flex-column flex-fill">
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}
          >
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;
