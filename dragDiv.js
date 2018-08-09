const drag = document.querySelector('drag')

function draggingStarts(e){
    e.target;
    drag.addEventListener('dragstart',draggingStarts);
}

function draggingOver(e){
   e.preventDefault();
   drag.addEventListener('dragover',draggingOver);
    }

function draggingDrop(e){
    e.preventDefault();
    drag.addEventListener('drop',draggingDrop);
    }

