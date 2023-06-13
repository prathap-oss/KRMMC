const Header = document.querySelector('.Header');
fetch('/header.html')
    .then(res => res.text())
    .then(data => {
        Header.innerHTML = data
    })



const Footer = document.querySelector('.Footer');
fetch('/footer.html').then(res => res.text()).then(data => {
    Footer.innerHTML = data
})