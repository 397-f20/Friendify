import React from 'react';
import { StyleSheet, Button, Image, TouchableOpacity, View} from 'react-native';




const Banner  = ({navigation}) => {
    return ( 
        <View style={styles.container}>
         <TouchableOpacity onPress={()=> {navigation.toggleDrawer()}}>
            <Image 
                style={styles.burger}
                source={require('../CSSExports/Carrot_s.png')}
            />      
            </TouchableOpacity>
        <Button title='ProfileBtn' style={styles.Profile_Pic} onPress={()=> {Profile.toggleDrawer()}}/>
        </View>
        )
    
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    },
    Profile_Pic: {
        left: 60,
        top: 71,
        borderRadius:10,
        width: 35,
        color: '#000',
        //border: '#262626',
        overflow: 'visible',
        position: 'absolute'
    },
    burger: {
        left: 50,
        top: 71,
        overflow: 'visible',
    }


  
 
});

export default Banner;
