const share = document.getElementById('share');
const links = document.getElementById('links');

let popupLinks = false;

share.addEventListener('click', () => popUp());

function popUp() {
    console.log('Pop Up!');

    popupLinks = !popupLinks;
    popupLinks ? links.style.display = 'flex' : links.style.display = 'none';
}