import React, {useState} from 'react';
import {Text} from 'react-native';
import styles from './styles';

function Title() {
    const [stateText, setText] = useState('');
    console.log('UPDATED');

    function onTextPress(){
        setText('Updated state');
    };

    return(
        <Text onPress = {onTextPress} style = {styles.title}> {stateText} </Text>
    );
}

Title.defaultProps = {
    text: 'Default Text'
}

export default Title;