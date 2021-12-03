const btn_question = document.getElementById("btn-question")
const btn_review = document.getElementById("btn-review")
const rank_container = document.getElementById("rank-container")

btn_question.addEventListener("mouseover", (e)=>{
    let = btnover = e.target
    btnover.classList.remove("btn-shadow")
})
btn_question.addEventListener("mouseleave", (e)=>{
    let = btnover = e.target
    btnover.classList.add("btn-shadow")
})
btn_review.addEventListener("mouseover", (e)=>{
    let = btnover = e.target
    btnover.classList.remove("btn-shadow")
})
btn_review.addEventListener("mouseleave", (e)=>{
    let = btnover = e.target
    btnover.classList.add("btn-shadow")
})

const rank_array = document.querySelectorAll(".rank-items")
rank_container.addEventListener("mouseenter", (e)=>{
    let rank_items = Array.from(rank_array)
    for(let i = 0 ; i<rank_items.length ; i++){
        let opacity_item = rank_items[i]
        opacity_item.classList.add("--opacity")
        opacity_item.addEventListener("mouseenter", ()=>{
            opacity_item.classList.remove("--opacity")
        })
        opacity_item.addEventListener("mouseleave", ()=>{
            opacity_item.classList.add("--opacity")
        })
    }
})
rank_container.addEventListener("mouseleave", ()=>{
    let children = [...rank_container.children]
    children.map(el => el.classList.remove("--opacity"))
})


