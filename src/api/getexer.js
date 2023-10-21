import axios from "axios";

export default {
    async getSlections() {
        try {
            const response = await axios.get("https://www.matexe.cn:8080/getexers");
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return null; // 或者抛出异常，具体取决于你的需求
        }
    }
}