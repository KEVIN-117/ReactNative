import {Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";
import {Button} from "@rneui/base";
import { uploadImage } from '../utils/upload'
export function ImageUploader() {
    const [img, setImg] = useState(null);
    return (
        <View>
            <Text>Image Uploader</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {img && (
                    <Image source={{ uri: img }} style={{ width: 200, height: 200, marginBottom: 20 }} />
                )}
                <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5, marginBottom: 20 }}>
                    <Text style={{ color: 'white' }}>Seleccionar Imagen</Text>
                </TouchableOpacity>
                <Button title="Subir Imagen" onPress={()=>{uploadImage({
                    uri: img,
                    type: 'image/jpeg',
                    name: 'image.jpg'
                }).then((res)=>{
                    console.log("Response: ", res.data)
                }).catch((e)=>{
                    console.log("Error: ", e)
                })
                }} />
            </View>

        </View>
    )
}