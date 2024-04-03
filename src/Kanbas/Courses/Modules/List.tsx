import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import "./index.css";
import * as client from "./client";
function ModuleList() {
  const { courseId } = useParams();

  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    if (courseId) {
      client
        .findModulesForCourse(courseId)
        .then((modules) => dispatch(setModules(modules)));
    }
  }, [courseId]);

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  const handleAddModule = () => {
    if (courseId) {
      client.createModule(courseId, module).then((module) => {
        dispatch(addModule(module));
      });
    }
  };

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }
          />
          <br />
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }
          />
          <br />
        </div>
        <button className="btn btn-success" onClick={handleAddModule}>
          Add
        </button>

        <button className="btn btn-primary" onClick={handleUpdateModule}>
          Update
        </button>
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <button
              className="btn btn-success"
              onClick={() => dispatch(setModule(module))}
            >
              Edit
            </button>

            <button
              className="btn btn-danger"
              onClick={() => handleDeleteModule(module._id)}
            >
              Delete{" "}
            </button>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
