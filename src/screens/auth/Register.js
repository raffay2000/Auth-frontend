import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import IconInput from '../../components/IconInput';
import {Button} from '../../components/Button';
const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.logo}>LOGO</Text>
      </View>
      <Text style={styles.text}>Sign up Individual</Text>
      <IconInput 
      style={styles.input}
      icon={'email'}
      iconColor={'#DCDCDC'}
      placeholder={'Name'}
      />
      <IconInput 
      style={styles.input}
      icon={'email'}
      iconColor={'#DCDCDC'}
      placeholder={'Email Address'}
      />
      <IconInput 
      style={styles.input}
      icon={'email'}
      iconColor={'#DCDCDC'}
      placeholder={'Date of Birth'}
      />
      <IconInput 
      style={styles.input}
      icon={'lock'}
      iconColor={'#DCDCDC'}
      placeholder={'Password'}
      />
      <IconInput 
      style={styles.input}
      icon={'phone'}
      iconColor={'#DCDCDC'}
      placeholder={'Phone Number'}
      />
      <IconInput 
      style={styles.input}
      icon={'home'}
      iconColor={'#DCDCDC'}
      placeholder={'Address'}
      />
      <IconInput 
      style={styles.input}
      icon={'city'}
      iconColor={'#DCDCDC'}
      placeholder={'City'}
      />
      <Button onPress={()=>{
        navigation.navigate('Welcome')
      }} style={{marginTop:hp("2.5%")}} color={"#4640FF"} text={'SIGN UP'} textColor={'#FFFFFF'}/>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#0078FF',
  },
  logo:{
    fontSize:hp("7%"),
    fontWeight:'bold',
    color:'#fff',
  },
  text:{
    color:'#FFFFFF',
    fontSize:hp("5.5%"),
    fontWeight:'300',
  },
  input:{
    width:wp("80%"),
    height:hp("7%"),
    borderRadius:hp("1.5%"),
    marginTop:hp("3%"),
  }
})