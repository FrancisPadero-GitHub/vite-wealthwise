import React, { useState } from "react";

// Define the Task interface for type safety
interface Task {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  completed: boolean;
}

// Sample task data
const sampleTasks: Task[] = [
  {
    id: 1,
    title: "Meeting with client",
    description: "Discuss project requirements and timelines",
    createdAt: "2025-04-25",
    completed: false,
  },
  {
    id: 2,
    title: "Finish report",
    description: "Complete the monthly financial report",
    createdAt: "2025-04-24",
    completed: false,
  },
  {
    id: 3,
    title: "Call supplier",
    description: "Follow up on the order delivery",
    createdAt: "2025-04-23",
    completed: true,
  },
];

const Reminders = () => {
  const [tasks, setTasks] = useState<Task[]>(sampleTasks);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  // Mark a task as completed
  const completeTask = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: true } : task
      )
    );
  };

  // Mark a task as incomplete
  const markIncomplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: false } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Open the Edit Task Modal
  const openEditModal = (task: Task) => {
    setCurrentTask(task);
  };

  // Handle task edit submission
  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentTask) {
      setTasks(
        tasks.map((task) => (task.id === currentTask.id ? currentTask : task))
      );
      setCurrentTask(null);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div className="d-flex align-items-center">
            <img
              src="./src/assets/img/icon.png"
              alt="Icon"
              width={24}
              height={24}
              className="me-2"
            />
            <h5 className="card-title fw-bold mb-0">Reminders</h5>
          </div>
          <button
            className="btn btn-success btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#addTaskModal"
          >
            <i className="bi bi-plus-lg" />
          </button>
        </div>

        <ul
          className="list-group list-group-flush"
          style={{ maxHeight: 400, overflowY: "auto" }}
        >
          {tasks.length === 0 ? (
            <li className="list-group-item text-center text-muted py-3">
              Click + to add a reminder
            </li>
          ) : (
            tasks.map((task) => (
              <li
                key={task.id}
                className={`list-group-item d-flex justify-content-between align-items-start py-3 ${
                  task.completed ? "text-muted" : ""
                }`}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "#999" : "#000",
                }}
              >
                <div className="me-auto">
                  <div className="fw-bold fs-6 mb-1">{task.title}</div>
                  <div className="text-muted mb-2">{task.description}</div>
                  <small className="text-secondary">
                    {new Date(task.createdAt).toLocaleDateString()}
                  </small>
                </div>

                <div className="d-flex align-items-center">
                  {/* Complete Button */}
                  {!task.completed && (
                    <button
                      className="btn btn-outline-success btn-sm me-2"
                      onClick={() => completeTask(task.id)}
                    >
                      <i className="bi bi-check-circle" />
                    </button>
                  )}

                  {/* Incomplete Button */}
                  {task.completed && (
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => markIncomplete(task.id)}
                    >
                      <i className="bi bi-arrow-counterclockwise" />
                    </button>
                  )}

                  {/* Edit Button */}
                  <button
                    className="btn btn-outline-primary btn-sm me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#editTaskModal"
                    onClick={() => openEditModal(task)}
                  >
                    <i className="bi bi-pencil-square" />
                  </button>

                  {/* Delete Button */}
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    <i className="bi bi-trash" />
                  </button>
                </div>
              </li>
            ))
          )}

          {/* Completed Tasks Section */}
          {tasks.some((task) => task.completed) && (
            <li className="list-group-item text-center text-muted py-2">
              ✔️ Completed Tasks
            </li>
          )}
        </ul>
      </div>

      {/* Add Task Modal */}
      <div
        className="modal fade"
        id="addTaskModal"
        tabIndex={-1}
        aria-labelledby="addTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex align-items-center">
                <img
                  src="./src/assets/img/icon.png"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="me-2"
                />
                <h6 className="modal-title fw-bold" id="addTaskModalLabel">
                  New Reminder
                </h6>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="row mb-3">
                  <div className="col-7">
                    <label htmlFor="inputTitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputTitle"
                    />
                  </div>
                  <div className="col-5">
                    <label htmlFor="inputDate" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputDate"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    style={{ height: 100 }}
                    maxLength={150}
                  />
                </div>

                <div className="text-end">
                  <button type="submit" className="btn btn-success">
                    <i className="bi bi-plus-lg" /> Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Task Modal */}
      <div
        className="modal fade"
        id="editTaskModal"
        tabIndex={-1}
        aria-labelledby="editTaskModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <div className="d-flex align-items-center">
                <img
                  src="./src/assets/img/icon.png"
                  alt="Icon"
                  width={24}
                  height={24}
                  className="me-2"
                />
                <h6 className="modal-title fw-bold" id="editTaskModalLabel">
                  Edit Reminder
                </h6>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form onSubmit={handleEditSubmit}>
                <div className="row mb-3">
                  <div className="col-7">
                    <label htmlFor="editTitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="editTitle"
                      value={currentTask?.title || ""}
                      onChange={(e) =>
                        setCurrentTask({
                          ...currentTask!,
                          title: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="col-5">
                    <label htmlFor="editDate" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="editDate"
                      value={currentTask?.createdAt || ""}
                      onChange={(e) =>
                        setCurrentTask({
                          ...currentTask!,
                          createdAt: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="editDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="editDescription"
                    style={{ height: 100 }}
                    maxLength={150}
                    value={currentTask?.description || ""}
                    onChange={(e) =>
                      setCurrentTask({
                        ...currentTask!,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="text-end">
                  <button type="submit" className="btn btn-success">
                    <i className="bi bi-check-lg" /> Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
