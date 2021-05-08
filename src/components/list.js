import React from 'react'
import { View, Text , FlatList } from 'react-native'


export default function List() {

    const names = [
        {name : "ankur" , age : 20},
        {name : "anks" , age : 18},
        {name : "ankuriyo" , age : 21},
        {name : "kishan" , age : 30},
        {name : "rohan" , age : 25},
        {name : "abhay" , age : 22}
    ]
    return (
        <View>
            <Text>List Components</Text>
            <FlatList 
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor ={name => name.name}
            data={names}
            renderItem={({item}) =>{
                return <Text style={{marginVertical : 50}}>Name : {item.name}    -   Age : {item.age}     </Text>
            }}
            ></FlatList>
        </View>
    )
}
