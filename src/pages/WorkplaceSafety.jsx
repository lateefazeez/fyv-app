import React from 'react';
import { View, Text, Image ,StyleSheet, Button} from 'react-native';

// function WorkplaceSafety (props) {
  // return(
    const WorkplaceSafety = () => (
  <View style={styles.container}>
    <Image 
    style={styles.logo} 
    source={require('./icons/workplace_safety_icon.png')}/>
  
  <View style={styles.headingContainer}>

       <Text  style={{fontSize:25, marginTop:20, fontWeight:"bold"}}>Workplace</Text>
        <Text style={{fontSize:25,marginTop:5,fontWeight:"bold",marginLeft:20}}>Safety</Text>
  </View>
  <View  style={styles.maintextcontainer}>

    <Image  style={{ resizeMode:"contain",width:150,height:150,marginLeft:10,top:10}} source={require('./icons/group_325.png')} />

    <View   style={{marginTop:18, marginStart:200,marginTop:-120}} >

    <Text  style={{fontSize:20, }}>A safe workplace takes your </Text>
    <Text   style={{fontSize:20,  }}> physical, mental, and emotional </Text>
    <Text style={{fontSize:20, }}>safety into consideration. </Text>
    <Text  style={{fontSize:20, }}>Your safety at work is protected </Text>
    <Text  style={{fontSize:20, }}>by 3 laws (pieces of legislation):</Text>
    </View>
  </View>
  <View  style={{ marginTop:10 }}>
    <Button style={{height:100, width:100,}}    title="Occupational Health And Safety"/>
    <Button style={{height:100, width:100,marginTop:10 }}  title="Human Rights"/>
   <Button  style={{height:100, width:100,marginTop:10 }} title="Employment Standards"/>

  </View>
  </View>
    
  );
// }
export default WorkplaceSafety;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:"center"
     },
  logo:{
    
    width:150,
    height:150,
    top:10
     },
  headingContainer:{
    alignContent:"center"
  },

  maintextcontainer:{
    backgroundColor:"#D3D3D3",
   marginTop:20,
   width:500,
   height:200

    },
   
  })


