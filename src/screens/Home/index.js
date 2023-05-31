import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import Title from '../../components/Title';

function Home(){
    const [title, setTitle] = useState('My First Component');

    useEffect(()=>{
        setTimeout(() =>{
            setTitle('Updated prop text');
        }, 3000);
    },[]);
    console.log('title :>> ', title);
    
    return(
        <View>
            <Title />
            
        </View>
    );
}

export default Home;