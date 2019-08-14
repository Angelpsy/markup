import axios from "axios";

// TODO: сделать единый интерфейс возврата ошибки
const wrapper = axios.create();

export { wrapper };
