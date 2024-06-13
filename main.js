const item = document.querySelector('.item');
const placeholder = document.querySelector('.placeholder-wrapper');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeholder.addEventListener('dragover', dragOver);
placeholder.addEventListener('dragenter', dragEnter);
placeholder.addEventListener('dragleave', dragLeave);
placeholder.addEventListener('drop', dragDrop);

function dragStart(e) {
    e.target.classList.add('hold');
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0)
}

function dragEnd(e) {
    e.target.className = 'item';
}

function dragOver(e) {
    e.preventDefault();
    if (e.target.classList.contains('placeholder')) {
        e.target.classList.remove('hovered');
    }
}

function dragEnter(e) {
    e.target.classList.contains('placeholder');
    if (e.target.classList.contains('placeholder')) {
        changeClass(this, 'add');
    }
}

function dragLeave(e) {

}

function dragDrop(e) {
    if (e.target.classList.contains('placeholder')) {
        e.target.append(item);
        changeClass(this, 'remove');
    }
}

function changeClass(param, operation) {
    const placeHolders = param.children;
    Array.from(placeHolders).forEach(el => {
        operation === 'remove'
        ? el.classList.remove('hovered')
        : el.classList.add('hovered');
    }); 
}