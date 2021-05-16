// will give us an array of elemnts with panel class
const panels = document.querySelectorAll('.panel');
console.log(123)
panels.forEach((panel) => {
    // add active class to one which is clicked by user
    panel.addEventListener('click', () => {
        removeActiveClasses() ;
        panel.classList.add('active') ;
    })
})

// will remove the active class from all panels
function removeActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}