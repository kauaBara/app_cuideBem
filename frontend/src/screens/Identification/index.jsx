import {View, Text , ImageBackground,style,Image} from 'react-native';
import {Style} from './styles'

export default function Identification(){
    return(
        <>
          <ImageBackground source={require("../../../assets/fundo.png")} style={{width:"100%",height:"100%"}}>
            <View style={Style.BlocoImages}>

            <View>  
            <Image source={require("../../../assets/cuidador.png")}/>
            <View style={Style.textaligh}>
            <Text style={Style.fontsize}>Cuidador</Text>
            </View>
            </View>

            <View>
           <Image source={require("../../../assets/guardiao.png")}/>
           <View style={Style.textaligh}>
            <Text style={Style.fontsize}>Guardiao</Text>
            </View>
           </View>
           
           <View>
           <Image source={require("../../../assets/medico.png")}/>
           <View style={Style.textaligh}>
            <Text style={Style.fontsize}>Medicos</Text>
            </View>
           </View>
         
            </View>
            
            <Image source={require('../../../assets/logo.png')} style={Style.logo}/>
           
          </ImageBackground>
     
    
     
        </>
    )
}