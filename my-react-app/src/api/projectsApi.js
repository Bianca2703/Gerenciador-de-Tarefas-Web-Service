const API_URL = "http://localhost:5000/projects";

export function getProjects() {
  return fetch(API_URL).then((resp) => resp.json());
}

export function createProject(project) {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  }).then((resp) => resp.json());
}

export function updateProject(id, project) {
  return fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  }).then((resp) => resp.json());
}

export function deleteProject(id) {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
}
