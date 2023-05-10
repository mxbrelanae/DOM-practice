const form = document.querySelector("#logoform");
const brand = document.querySelector('input[name="brandName"]');
const color = document.querySelector('input[name="brandColor"]');
const size = document.querySelector('input[name="fontSize"]');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const newLogo = logoMake(
        brand.value, 
        color.value, 
        size.value);
    results.appendChild(newLogo);
});

function logoMake(text, color, size){
    const logo = document.createElement('h2');
    logo.innerText = text;
    logo.style.color = color;
    logo.style.fontSize = size + 'px';
    return logo;
}