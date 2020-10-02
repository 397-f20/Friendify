import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View} from 'react-native';


const Banner = ({navigation}) => {
    return ( 
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> {navigation.toggleDrawer()}}>
            <Image 
                style={styles.burger}
                source={require('../assets/menu.png')}
            />      
            </TouchableOpacity>
            <TouchableOpacity>
                <Image 
                    style={styles.profile}
                    source={require('../assets/favicon.png')}
                />      
            </TouchableOpacity>
        </View>
        )   
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
    },
    burger: {
        width: 22,
        height: 22,
    },
    profile: {
       width: 30,
       height: 30,
    }
});

export default Banner;
