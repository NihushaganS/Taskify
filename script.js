const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageurl: document.getElementById("imageURL"),
    tasktitle: document.getElementById("taskTitle"),
    tasktype: document.getElementById("taskType"),
    taskdescription: document.getElementById("taskDescription")
  }
  console.log(taskData);
};