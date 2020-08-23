import React from 'react';
import { View, Text, Image ,StyleSheet} from 'react-native';

function WorkplaceSafety (props) {
  return(
  <View style={styles.container}>
    <Image 
    style={styles.logo} 
    source={require('./icons/workplace_safety_icon.png')}/>
  
  <View style={styles.headingContainer}>

       <Text  style={{fontSize:30, marginTop:20, fontWeight:"bold"}}>Workplace</Text>
        <Text style={{fontSize:30,marginTop:5,fontWeight:"bold",marginLeft:20}}>Safety</Text>
  </View>
  <View  style={styles.maintextcontainer}>

    <Image  style={{ width:100,height:100,marginLeft:10}} source={require('./icons/group_325.png')} />

    <View   style={{marginTop:20, marginLeft:30,marginBottom:20}} >

    <Text  style={{fontSize:20, }}>A safe workplace takes your </Text>
    <Text   style={{fontSize:20,  }}> physical, mental, and emotional </Text>
    <Text style={{fontSize:20, }}>safety into consideration. </Text>
    <Text  style={{fontSize:20, }}>Your safety at work is protected </Text>
    <Text  style={{fontSize:20, }}>by 3 laws (pieces of legislation):</Text>
    </View>
  </View>
  </View>
    
  );
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems:"center"
    
     
     
     
  },
  logo:{
    
    width:200,
    height:200,
    top:10
    
   
  },
  headingContainer:{
    alignContent:"center"
  },

  maintextcontainer:{
    backgroundColor:"#D3D3D3",
   marginTop:20,
   
    
  },

  
})

export default WorkplaceSafety;
