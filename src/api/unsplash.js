import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers:{
        Authorization: "Client-ID KfcS7L7SSo5UFqaGokvdQBsyyVDw6w8glGNGF97MA4E"
    }
})