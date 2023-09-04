let tasks = [
  {
    id: 0,
    owner: "Pelado Cáceres",
    name: "Wash the car",
    description: "Wash the car before crash it 💥🚗",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSynqaOG2CBeapwLA8A7W3C8kmHhNnNraWl7c2rz1eykm_dY_cjB9erHZawnIFOIo3MbcAts4L7N8W7otPrEPvFmzg9UJo7LONUpVhyPpz1gjDfbMOcetAy52k0YdDDoNaZSQ&usqp=CAc",
  },
  {
    id: 1,
    owner: "Developer #432",
    name: "Take humans out of Earth",
    description: "Looking for a new planet to destroy 🌎",
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/1020/1/213/world-of-warcraft-battle-for-azeroth-video-games-warcraft-alliance-wallpaper-thumb.jpg",
  },
  {
    id: 2,
    owner: "Another big fish",
    name: "Testing in Production",
    description: `We don't worry about testing, we test in production 🤪`,
    imgUrl:
      "https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-preview.jpg",
  },
  {
    id: 3,
    owner: "The return of the Pug",
    name: "Thinking about all the mankind problems",
    description: "Eat, Sleep and wear a jedi robe in order to solve it 🐶",
    imgUrl:
      "https://w0.peakpx.com/wallpaper/381/236/HD-wallpaper-pug-dog-pet-funny-sad.jpg",
  },
  {
    id: 4,
    owner: "Mark Zuckerberg",
    name: "Destroy the entire planet earth",
    description: "Encourage people to live in a metaverse🌈",
    imgUrl: "https://pbs.twimg.com/media/Ew2_PGEWgAE3V5-.jpg",
  },
];

let currentIdNumber = tasks.length;

// 0 - Bajar repo, todos los ejercicios seran parte
// del mismo proyecto js-dom-manipulation-essentials
// Hacer una funcion que cree dinamicamente las task
function createTaskComponent(task) {
  const { id, owner, name, description, imgUrl } = task;
  const taskListElement = document.getElementsByTagName("ul")[0];

  const taskElement = `
  <li id="${id}" class="task">
    <img
      src="${imgUrl}"
    />
    <div class="task-information">
      <h3>Task Owner</h3>
      <p>${owner}</p>
      <h3>Task Name</h3>
      <p>${name}</p>
      <h3>Task Description</h3>
      <p>${description}</p>
    </div>
  </li>`;

  taskListElement.insertAdjacentHTML("beforeend", taskElement);
}

function loadTasks() {
  tasks.forEach((e) => createTaskComponent(e));
}

loadTasks();

// 1 - Funcion
// Mostrar en un mensaje de alerta los valores del form
function addListeners() {
  // PREVENT THE PAGE RELOAD
//   const formElement = document.getElementsByTagName("form")[0];
//   formElement.addEventListener("submit", (event) => {
//     event.preventDefault();
//   });

//   //  ADD TASK BUTTON
//   const addTaskButtonElement =
//     document.getElementsByClassName("submit-button")[0];
//   addTaskButtonElement.addEventListener("click", addTaskHandler);

//   // REMOVE TASK
//   const taskElements = [...document.getElementsByTagName("li")];
//   taskElements.forEach((e) =>
//     e.addEventListener("click", () => deleteTaskHandler(e))
//   );

//   // DELETE ALL BUTTON
//   const deleteAllTaskButtonElement =
//     document.getElementsByClassName("clear-button")[0];
//   deleteAllTaskButtonElement.addEventListener("click", deleteAllTaskHandler);
// }

// addListeners();

// function addTaskAlert(newTask) {
//   const { id, owner, name, description, imgUrl } = newTask;
//   window.alert(
//     `Submiting ID:${id} OWNER:${owner}, NAME:${name}, DESCRIPTION:${description}, URL${imgUrl}`
//   );
// }

// 2 - Funcion
// Agregar elemento en la lista al llenar el formulario

function cleanForm(fields) {
  fields.forEach((e) => (e.value = ""));
}

function addTaskHandler(event) {
  const ownerElem = document.getElementById("ownerInput");
  const nameElem = document.getElementById("nameInput");
  const descriptionElem = document.getElementById("descriptionInput");
  const imgUrlElem = document.getElementById("imgUrlInput");

  const id = currentIdNumber++;
  const owner = ownerElem.value;
  const name = nameElem.value;
  const description = descriptionElem.value;
  const imgUrl = imgUrlElem.value;

  if (id && owner && name && description && imgUrl) {
    const newTask = { id, owner, name, description, imgUrl };
    const formFields = [ownerElem, nameElem, descriptionElem, imgUrlElem];
    addTaskAlert(newTask);
    createTaskComponent(newTask);
    cleanForm(formFields);

    // FOR DELETE
    addDeleteListener(id);
  }
}

// 3 - Funcion
// Eliminar elemento en la lista al hacer click sobre el elemento
// function deleteTaskHandler(taskElement) {
//   const id = taskElement.id;
//   const filteredTask = tasks.filter((e) => e.id !== +id);
//   tasks = filteredTask;
//   taskElement.remove();
//   shouldRedirect();
// }

// function addDeleteListener(id) {
//   const listElements = [...document.getElementsByTagName("li")];
//   const searchedElement = listElements.find((e) => e.id == id);
//   searchedElement.addEventListener("click", () =>
//     deleteTaskHandler(searchedElement)
//   );
// }

// 4 - Funcion
// Crear un boton para vaciar/eliminar todas las tareas
// function deleteAllTaskHandler() {
//   const allTaskElements = [...document.getElementsByTagName("li")];
//   allTaskElements.forEach((e) => e.remove());
//   tasks = [];
//   shouldRedirect();
// }

// 5 - Funcion
// Si ya no quedan tareas navegar programaticamente
// a www.youtube.com
// function redirectWhenNoTask() {
//   window.location.href = "https://www.youtube.com/watch?v=SZXTJG-cUkU";
// }

// function shouldRedirect() {
//   if (!tasks.length) {
//     redirectWhenNoTask();
//   }
// }
