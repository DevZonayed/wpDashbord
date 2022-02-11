// get elements 
const menu_items = document.querySelectorAll('.dash-menu ul li a');
const dashboard_body = document.querySelectorAll('.dash-board-details');


menu_items.forEach(items => {
    items.addEventListener('click',function(e){
        e.preventDefault()

        menu_items.forEach(item => {
            item.classList.remove('active')
        })
        items.classList.add('active')

    const menu_dash = document.querySelector(this.getAttribute('href'))

    dashboard_body.forEach(item => {
        item.classList.remove('active')
    })
    menu_dash.classList.add('active')

    })

})

// tab elements 

const tab_heading = document.querySelectorAll('.arif-tab .tab-title');

tab_heading.forEach(items => {
    items.addEventListener("click" , function(e){
        e.preventDefault()
        this.nextElementSibling.classList.toggle('active')
    })
})







