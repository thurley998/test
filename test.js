function allowDrop(allowdropevent) {
    allowdropevent.target.style.color = 'blue';
    allowdropevent.preventDefault();
}

function drag(dragevent) {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
    dragevent.target.style.color = 'green';
}

function drop(dropevent) {
    dropevent.preventDefault();
    var data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
    document.getElementById("drag").style.color = 'black';
}