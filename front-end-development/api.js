(() => {

  const fakeTaskLists = [
    {
      "kind": "tasks#taskList",
      "id": "list1",
      "title": "Political Science",
    },
    {
      "kind": "tasks#taskList",
      "id": "list2",
      "title": "Calculus",
    },
    {
      "kind": "tasks#taskList",
      "id": "list3",
      "title": "Logic Design",
    }
  ]

  const fakeTasks = [
    {
      "kind": "tasks#task",
      "id": "PoliticalScience1",
      "title": "Reading Assignment",
      "parent": "list1",
      "notes": "",
      "status": "incomplete",
      "deleted": false,
      "hidden": false
    },
    {
      "kind": "tasks#task",
      "id": "PoliticalScience2",
      "title": "Essay",
      "parent": "list1",
      "notes": "",
      "status": "incomplete",
      "deleted": false,
      "hidden": false
    },
    {
      "kind": "tasks#task",
      "id": "Calculus1",
      "title": "Study for Midterm",
      "parent": "list2",
      "notes": "",
      "status": "incomplete",
      "deleted": false,
      "hidden": false
    },
    {
      "kind": "tasks#task",
      "id": "LogicDesign1",
      "title": "Homework 1",
      "parent": "list3",
      "notes": "",
      "status": "incomplete",
      "deleted": false,
      "hidden": false
    }
  ]

  const getLists = () => Promise.resolve({
    kind: "tasks#taskLists",
    items: fakeTaskLists
  })

  const getTaskList = listId => Promise.resolve(fakeTaskLists.find(taskList => taskList.id === listId))

  const getTasks = listId => Promise.resolve(fakeTasks.filter(task => task.parent === listId))

  const getTask = taskId => Promise.resolve(fakeTasks.find(task => task.id === taskId))

  const getListByTask = listId => Promise.resolve(fakeTaskLists.find(taskList => taskList.id === listId))

  const newList = () => fakeTaskLists.push({
    "kind": "tasks#taskList",
    "id": "list4",
    "title": "Interaction Design"
  })

  const newTask = () => fakeTasks.push({
    "kind": "tasks#task",
    "id": "LogicDesign2",
    "title": "Homework 2",
    "parent": "list3",
    "deleted": false,
    "hidden": false
  })

  window.ApiService = {
    apiHost: () => {}, // No-op in our mock version.
    getLists, getTaskList, getTasks, getTask, getListByTask, newList, newTask
  }
})()
