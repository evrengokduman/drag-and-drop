const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')
// Fill Listeners
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// Loop through empties and call drag events
//this is basically a node list like an array
//I need to stop firing the drag events on the empty boxes
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}
function dragStart() {
  this.className += ' hold'
  //this is a timeout function
  setTimeout(() => (this.className = 'invisible'), 0)
}

function dragEnd() {
  this.className = 'fill'
}
function dragOver(e) {
  e.preventDefault()
}

function dragEnter(e) {
  e.preventDefault()
  this.className += ' hovered'
}

function dragLeave() {
  this.className = 'empty'
}

function dragDrop() {
  this.className = 'empty'
  this.append(fill)
}
