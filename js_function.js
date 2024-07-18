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
window.onclick  = function (event)
{
    console.log("Hello World!")
}