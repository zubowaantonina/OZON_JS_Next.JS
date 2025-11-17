import { getData } from "./getData";
import { renderGoods } from "./renderGoods";

export const load = () => {

    getData().then((data) => {
        renderGoods(data);
    });

};
