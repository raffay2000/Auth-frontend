import React, {useRef, useState} from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet
} from 'react-native';
// import {Ionicons as Icon} from '@expo/vector-icons';
// import {Ionicons as Icon }from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { black, darkGray, lightGray } from '../assets/colors/index';
// import { regular } from '../../assets/fonts';

const IconInput = ({style, inputStyle, onChange, value, iconColor, icon, placeholder, inputRef, onSubmitPress, blur=false,pass, keyboard, phone, error, disable, ...rest}) => {
    
    const input = useRef(null);
    const [visible, setVisible]  = useState(true);
    // console.log(error)
     return(
        <>
        <View style={[styles.inputRow,style, error && {borderWidth:1, borderColor:'red'}]}>
            {phone &&
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {/* <Image style={styles.imageStyle} source={require('../../assets/images/pk.jpg')} /> */}
                    <TextInput
                        style={[styles.input,{flex:0}]}
                        editable={false}
                        placeholder={" +92"}
                        placeholderTextColor={black}
                    />
                </View>
            }
            <TextInput
                editable={!disable}
                blurOnSubmit={blur}
                onChangeText={onChange}
                value={value}
                style={[styles.input,inputStyle]}
                placeholder={placeholder}
                placeholderTextColor={darkGray}
                ref={inputRef}
                onSubmitEditing={onSubmitPress}
                secureTextEntry={pass ? visible : !visible}
                keyboardType={keyboard ? keyboard : "default"}
                
                {...rest}
            />
            {pass
                ?
                value == ""
                    ?<MaterialCommunityIcons name={icon} size={22} color={iconColor} />
                    :<MaterialCommunityIcons onPress={()=>setVisible(!visible)} name={visible ? 'eye' : 'eye-off'} size={22} color={iconColor} />
                :
                icon &&
                <MaterialCommunityIcons name={icon} size={22} color={iconColor} />
            }
        </View>
        {/* {error !== "" && <Text style={{color:'red', marginLeft:hp('0.5%'), marginTop:hp('0.5%')}}>{error}</Text>} */}
        </>
    )
}

export default IconInput

const styles = StyleSheet.create({
    inputRow:{
        flexDirection:"row",
        alignItems:'center',
        paddingLeft:hp('1.5%'),
        paddingRight:hp('1.5%'),
        width:'100%',
        height:hp('6.5%'),
        backgroundColor:lightGray,
        borderRadius:hp('1%'),
        marginTop:hp('2.5%'),
    },
    input:{
        flex:1,
        fontSize:hp('2.25%'),
        // fontFamily: regular,
        color:black,
    },
    imageStyle:{
        height:hp('3.5%'),
        width:hp('5%'),
    }
})