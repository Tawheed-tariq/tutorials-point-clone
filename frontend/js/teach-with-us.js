const toggle_list = (list_id, arrow_id) => {
    const arrow = document.getElementById(arrow_id)
    const list = document.getElementById(list_id)

    if(arrow.classList.contains('close-list')){
        arrow.classList.remove('close-list')
        list.style.display = "block"
    }else{
        arrow.classList.add('close-list')
        list.style.display = "none"
    }
}