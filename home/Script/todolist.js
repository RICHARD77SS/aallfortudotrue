var tasks = [];

function idGenerator() {
  var timeStamp = new Date();

  var id =
    timeStamp.getHours().toString() +
    timeStamp.getMinutes().toString() +
    timeStamp.getSeconds().toString() +
    timeStamp.getMilliseconds().toString();
  
  return id;
}

function createTask() {
  var taskDescription = document.getElementById("newTask").value

  var task = {
    id: idGenerator(),
    data: {
      description: taskDescription
    }
  };

  tasks.push(task);

  updateScreen()
}

function updateScreen() {
  var list = "<ul>";
  tasks.forEach(task => {
    list += "<li id-data=" + task.id + ">" + task.data.description + "</li>";
    list += "<button onclick=deleteTask(this) id-data=" + task.id + ">Delete</button>";
  });

  list += "</ul>";

  document.getElementById("listTodo").innerHTML = list;
  document.getElementById("newTask").value = "";
}



