const taskContainer = document.querySelector(".task__container");
console.log(taskContainer);

const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageurl: document.getElementById("imageURL").value,
    tasktitle: document.getElementById("taskTitle").value,
    tasktype: document.getElementById("taskType").value,
    taskdescription: document.getElementById("taskDescription").value
  };

  const newCard = `
  <div id=${taskData.id} class="col-md-6 col-lg-4 my-4">
  <div class="card">
    <div class="card-header gap-2 d-flex justify-content-end">
      <button class="btn btn-outline-info" name=${taskData.id} onclick="editCard.apply(this, arguments)" >
        <i class="fal fa-pencil" name=${taskData.id}></i>
      </button>
      <button class="btn btn-outline-danger" name=${taskData.id} onclick="deleteCard.apply(this, arguments)">
        <i class="far fa-trash-alt" name=${taskData.id}></i>
      </button>
    </div>
    <div class="card-body">
      <img
        src=${taskData.imageurl}
        alt="image"
        class="card-img"
      />
      <h5 class="card-title mt-4">${taskData.tasktitle}</h5>
      <p class="card-text">
        ${taskData.taskdescription}
      </p>
      <span class="badge bg-primary">${taskData.tasktype}</span>
    </div>
    <div class="card-footer">
      <button class="btn btn-outline-primary" name=${taskData.id}>Open Task</button>
    </div>
  </div>
  </div>`;

  taskContainer.insertAdjacentHTML("beforeend", newCard);
};