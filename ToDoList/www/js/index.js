function ajouterTache() {
    const taskField = document.getElementById('taskField');
    const taskList = document.getElementById("taskList");
    const taskListDone = document.getElementById("taskListDone");

    if (taskField.value){
        let newItem = document.createElement('li');
        newItem.innerHTML = taskField.value;
        taskList.appendChild(newItem);
        /* taskList.innerHTML += `<li>${taskField.value}</li>`; */

        $(newItem).on('swiperight', function(e){
            
            taskListDone.appendChild(newItem);
        })

        $(newItem).on('swipeleft', function(e){
            $(newItem).remove();
        })

        $(taskList).listview('refresh');
        taskField.select();
    }

}



function reinitialiserListe(params) {
    const taskField = document.getElementById('taskField');
    const taskList = document.getElementById("taskList");
    taskField.value=''
    taskList.innerHTML = '';
    task.focus();
}