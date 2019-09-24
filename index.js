var queNo = 1;
window.setInterval(function() {
    document.getElementById('sld').setAttribute('src', 'images/slide/img' + (queNo+1).toString() + '.jpg');    
    slideButtonHandler(document.getElementById(queNo+1));
    queNo = (queNo + 1) % 3;
}, 5000);

function summon(no, elem) {
    document.getElementById('sld').setAttribute('src', 'images/slide/img' + no + '.jpg');
    slideButtonHandler(elem);
}

function slideButtonHandler(elem) {
    let prevSelected = document.getElementsByClassName('selected');
    if(prevSelected.length === 1) {
        prevSelected[0].classList.remove('selected');
    }
    elem.classList.add('selected');
}

document.getElementsByTagName('BODY')[0].classList.remove('preload');
