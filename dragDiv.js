const drag = document
drag.addEventListener('mousemove',draggingStarts);
drag.addEventListener('mousedown',mouseDown);
drag.addEventListener('drop',draggingDrop);

function draggingStarts(e){
  
   console.log('dragging is happening ', e)
}

function mouseDown(e){
    console.log('mosuedown is happening ', e)
}

function draggingDrop(e){
    console.log('dragging is happening ', e)
}

