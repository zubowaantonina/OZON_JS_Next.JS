import { renderGoods } from "./renderGoods"
import { getData } from "./getData"
import {categoryFilter} from "./filters"
export const catalog = () => {
    const catalogBtn = document.querySelector('.catalog-button > button')
    const catalogModal = document.querySelector('.catalog')
const catalogModalItems=document.querySelectorAll('.catalog li')
console.log(catalogModalItems);

    let isOpen = false
    catalogBtn.addEventListener('click', () => {
        isOpen = !isOpen
        if (isOpen) {
            catalogModal.style.display = "block"
        } else {
            catalogModal.style.display = ""
        }
    })
    catalogModalItems.forEach((item)=>{
        item.addEventListener('click',()=>{
             const text=item.textContent
         getData().then((data) => {
                renderGoods(categoryFilter(data,text));
            });
        })
        
        
    })

}