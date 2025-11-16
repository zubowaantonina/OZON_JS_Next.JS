import { getData } from "./getData";
import { postData } from "./postData";
export const second = () => {
    const cartBtn = document.getElementById("cart");
    // console.log(getData());

    cartBtn.addEventListener("click", () => {
       
         getData().then((data) => {
                console.log(data);
            });
    });
};
