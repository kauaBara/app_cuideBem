import { View , Text , Image,style,TouchableOpacity,TextInput } from "react-native";
import{primary} from '../../constants/colors'
import{white} from '../../constants/colors'
import{second} from '../../constants/colors'
import{styles} from './style'

export default function LoginGuardian(){
    return(
        <View style={{backgroundColor:primary}}>
        <View style={{alignContent:'center',alignItems:'center',marginTop:60}}>
           <Image source={require("../../../assets/Logo.png") } style={{width:200,height:200,}}/>
           <Text style={{marginBottom:90,fontSize:30}}>Acessar</Text> 
        
    
        
        <TouchableOpacity style={styles.blocksLogin}>
           
        <Image source={require('../../../assets/email.png')} style={{marginTop:18,width:33,height:25,marginLeft:20}}/>

           <TextInput style={{marginLeft:20,fontSize:20,marginTop:5}}>Digite seu email</TextInput>
           
            
            
        </TouchableOpacity>

        <TouchableOpacity style={styles.blocksLogin}>

        <Image source={require('../../../assets/senha.png')} style={styles.blocksLogin}/>

        <TextInput style={{marginTop:5,marginLeft:25,fontSize:20}}>Digite sua senha</TextInput>

        </TouchableOpacity>

        <TouchableOpacity style={styles.blocksLogin}>
        <Text style={{marginTop:15,marginLeft:130,fontSize:30,color:"white"}}>Enviar</Text>
        </TouchableOpacity>


      

        </View>
        </View> 

      
      
    )
}