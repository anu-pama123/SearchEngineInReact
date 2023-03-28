import axios from "axios";
const accessKey = "14ba943dc50248b4b8260a8e8fafa8a8";

export default axios.create({
    baseUrl: "",
    Headers: {
        Authorization: accessKey
    }
})
