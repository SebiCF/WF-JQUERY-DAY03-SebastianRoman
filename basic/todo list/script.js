let tasks = ["Einkaufen", "Prework lesen", "CodeReview verbessern", "Küche sauber machen"];

let newTaskInput = $('<input type="text">')
$("body").append(newTaskInput);
newTaskInput.on("click", function(e){
    tasks.push(e.target.value);
    createTasks(tasks.length - 1);
})


for (i = 0; i < tasks.length; i++) {
createTasks(i);
}


function createTasks(i) {
    
        let task = $(`<div id="${i}" class="task"><p >${tasks[i]}</p></div>`);
        $("body").append(task);
        $(".task").on("click", function (e) {
            $(this).animate({
                opacity: 0,
                paddingLeft: "+=100"
            }, 400, function () {
                $(this).remove();
            })
        });
    
}
