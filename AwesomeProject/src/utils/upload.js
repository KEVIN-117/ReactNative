import axios from "axios";

const API_URL = 'http://localhost:3000/api';
export const uploadImage = async (image)=>{
    try {
        const formData = new FormData()

        formData.append('image', {
            uri: image.uri,
            type: image.type,
            name: image.fileName
        })

        const response = await axios.post(`${API_URL}/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        console.log("Response: ", response.data)
        return {
            success: true,
            data: response.data
        }

    }catch (e){
        console.log("Errror uploading image: ", e)
    }
}