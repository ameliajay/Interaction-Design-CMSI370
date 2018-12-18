(() => {
  const setupEventListeners = () => {
    const newListButton = $('.new-list-button')
    const newTaskButton = $('.new-task-button')

    newListButton.click(newList)
    newTaskButton.click(newTask)
  }

  const init = () => {
    setupEventListeners()
  }

  const getLists = () => {
    window.ApiService.getLists().then(result => displayLists(result.items))
  }

  const listElement = list => $('<div></div>').addClass('col-sm-6 mt-3').append(
    $('<div></div>').addClass('card').append(
      $('<div></div').addClass('card-body').append(
        $('<h5></h5>').addClass('card-title').append(
          list.title
        ),
        $(`<a href="tasklist.html#${list.id}"></a>`).addClass('btn btn-dark btn-sm view-tasks').append(
          "View Tasks"
        )
      )
    )
  )

  const displayLists = lists => $('.list-result-container').empty().append(
    lists.map(listElement)
  )

  const newList = () => {
    window.ApiService.newList()
    getLists()
  }

  const getTaskList = () => {
    const listId = window.location.hash.substr(1)
    window.ApiService.getTaskList(listId).then(result => showList(result))
  }

  const showList = list => $('.list-name').addClass('card-header').append(
    list.title
  )

  const getTasks = () => {
    const listId = window.location.hash.substr(1)
    window.ApiService.getTasks(listId).then(result => displayTasks(result))
  }

  const taskElement = task => {
    const taskTemplate = $('.task-template')
    const result = taskTemplate.clone()
    result.removeClass('d-none')
    const titleInput = result.find('.title')
    titleInput.val(task.title)
    result.append(
      $(`<a href="task.html#${task.parent}|${task.id}"></a>`).addClass(
        'btn btn-dark btn-sm').append(
        "Details"
      ),
      $('<div></div>').addClass('row mt-4')
    )
    return result
  }

  const displayTasks = tasks => $('.task-result-container').empty().append(
    tasks.map(taskElement)
  )

  const newTask = () => {
    window.ApiService.newTask()
    getTasks()
  }

  const getTask = () => {
    const taskId = window.location.hash.split("|")[1]
    window.ApiService.getTask(taskId).then(result => showTask(result))
  }

  const showTask = task => $('.task-card-container').addClass('card-title').append(
    $(`<a href="tasklist.html#${task.parent}"></a>`).addClass(
      'btn btn-light btn-sm'
    ).append(
      "Back to List"
    ),
    $('<div></div>').addClass('row mt-3'),
    $('<h4></h4>').append(
      task.title
    )
  )

  const getListByTask = () => {
    const listId = window.location.hash.split("|")[0].substr(1)
    window.ApiService.getListByTask(listId).then(result => showList(result))
  }

  window.TaskManagerController = {
    init, getLists, getTaskList, getTasks, getTask, getListByTask, newList, newTask
  }
})()
