const API_URL = "http://localhost:5000/tasks";

export function getTasks() {
  return fetch(API_URL).then((resp) => resp.json());
}

export function createTask(task) {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((resp) => resp.json());
}

export function updateTask(id, task) {
  return fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  }).then((resp) => resp.json());
}

export function deleteTask(id) {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
