import {View, Text, StyleSheet, SafeAreaView,TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import React from 'react';
import IconInput from '../../components/IconInput';
import {Button} from '../../components/Button';
const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>LOGO</Text>
      <Text style={[styles.logo,{fontWeight:'300',fontSize:hp("4%")}]}>Sign In</Text>
      <IconInput
        icon={'email'}
        iconColor={'#DCDCDC'}
        style={{width: wp('80%')}}
        placeholder={'Email Address'}
      />
      <IconInput
        icon={'lock'}
        iconColor={'#DCDCDC'}
        style={{width: wp('80%')}}
        placeholder={'Password'}
      />
      <Button
        color={'#4640FF'}
        text={'SIGN IN'}
        textColor={'#fff'}
        style={{width: wp('80%')}}
      />
      <View style={{flexDirection:"row",alignItems:"center",marginTop:hp("3%")}}>
        <View style={styles.line}/>
        <Text style={styles.text}>OR</Text>
        <View style={styles.line}/>
      </View>
      <Button
        color={'#FFFFFF'}
        text={'Sign in with Google'}
        textColor={'#000000'}
        style={{width: wp('80%'),borderRadius:0}}
        image={require('../../assets/img/google.png')}
      />
      <Button
        color={'#fff'}
        text={'Sign in with Facebook'}
        textColor={'#5F64FE'}
        style={{width: wp('80%'),borderRadius:0}}
        image={require('../../assets/img/fb.png')}
      />
      <TouchableOpacity onPress={()=>{
        navigation.navigate('Register')
      }} style={{marginTop:hp("5%")}}>
      <Text style={[styles.text,{fontSize:hp("1.5%")}]}>Don't have an account ?</Text>
      <Text style={[styles.text,{fontSize:hp("2.3%")}]}>Create account</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0078FF',
    alignItems: 'center',
    paddingTop:hp("3%")
  },
  logo: {
    fontSize: hp('8%'),
    fontWeight: '700',
    color: '#EEEEEE',
    marginTop:hp("3%"),
    textAlign:"center"
  },
  line:{
    width: wp('27%'),
    height: hp('0.2%'),
    backgroundColor: '#EEEEEE',
  },
  text:{
    fontSize: hp('2.5%'),
    color: '#EEEEEE',
    paddingHorizontal: wp('5%'),
    textAlign:"center"
  }
});
