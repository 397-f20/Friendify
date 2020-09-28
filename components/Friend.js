import React from 'react';
import { Stylesheet, TouchableOpacity, Text } from 'react-native';
import { Avatar } from 'react-native-paper';

const Friend = ({friend}) => {
    return (
        <TouchableOpacity>
            <Text>
                {friend}
            </Text>
        </TouchableOpacity>
    )
};

export default Friend;
