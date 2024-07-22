function getMoreScroll()
{
    window.scrollTo(0, 850);
    console.log("hello world");
}
function scrollToTop()
{
    window.scrollTo(0,0);
}
function dropDown(element)
{
    element.nextElementSibling.classList.toggle('active');
}
window.onclick = function(event)
{
    let active = document.querySelector('.active');
    if(active && !event.target.closest('.bar'))
    {
        active.classList.remove('active');
    }
}
function clickImg(element)
{
    let main = document.querySelector('.main-img');
    main.src = element.src;
    let select = document.querySelector('.selected');
    if(select)
    {
        select.classList.remove('selected');
    }
    element.classList.add('selected');
}
function typeNumber(event)
{
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
}
function inputPlus()
{
    let number = document.querySelector('.number-input');
    number.value++;
    console.log(number.value);
}
function inputMinus()
{
    let number = document.querySelector('.number-input');
    if(number.value>0) number.value--;
    console.log(number.value);
}
function eyeClick(element)
{
    let password = document.querySelector('#password');
    if(password.type == 'password')
    {
        password.type = 'text';
        element.classList.replace('fa-eye-slash', 'fa-eye');
    }
    else
    {
        password.type = 'password';
        element.classList.replace('fa-eye', 'fa-eye-slash');
    }
}