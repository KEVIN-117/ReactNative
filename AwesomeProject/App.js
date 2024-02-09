import axios from 'axios';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {useState, useEffect} from "react";

export default function App() {
    const [value, setValue] = useState([])
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character', {
            method: 'GET'
        }).then((res) => {
            res.json().then((data)=>{
                console.log("Data: ", data)
                setValue(data.results)
            })
            //setValue(res.json())
        })

        /*
        created
episode
gender
id
image
location
name
origin
species
status
type
url
         */

    }, [])
  return (
      <View style={{
          backgroundColor: '#2C73D2'
      }}>
            <Text style={styles.subHeader}>React Native Elements UI</Text>
            <ScrollView>
                <View style={styles.contentView}>
                    {value.map(item => (
                        <View key={item.id} style={{ flexDirection: 'column', marginVertical: 10, padding: 10, backgroundColor: '#0089BA', borderRadius: 5 }}>
                            <Image source={{ uri: item.image }} style={{ width: '100%', height: 800, borderRadius: 5 }} />
                            <View style={{backgroundColor: '#FBEAFF', width: '100%', marginTop: 20 }}>
                                <CustomTitle name={item.name} gender={item.gender} />
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
    img: {
      flex: 1,
      objectFit: 'contain',
        justifyContent: 'center',
        alignItems: 'center',

    },
    contentView: {
        flex: 1,
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    subHeader: {
        backgroundColor : "red",
        color : "white",
        textAlign : "center",
        paddingVertical : 5,
        marginBottom : 10
    }
});

const CustomTitle = ({name, gender}) => {
    return (
        <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>{name}</Text>
            <Text style={{ fontStyle: 'italic', fontSize: 20 }}>
                {gender}
            </Text>
        </View>
    );
};

