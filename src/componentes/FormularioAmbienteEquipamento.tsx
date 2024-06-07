import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

interface FormularioAmbienteEquipamentoProps {
    adicionar: (
    descricao: string,
    statusOperacional: string,
    instrucoesSeguranca,
    contatoResponsavel,
    latitude,
    longitude: string ) => void
}

export const FormularioAmbienteEquipamento = ({adicionar}: FormularioAmbienteEquipamentoProps) => { 

    const [descricao, setDescricao] = useState('')
    const [statusOperacional, setStatusOperacional] = useState('')
    const [instrucoesSeguranca, setInstrucoesSeguranca] = useState('')
    const [contatoResponsavel, setContatoResponsavel] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')

    return(
        <View style={estilos.conteiner}>

            <View style={estilos.conteinerCampos}>
                <TextInput
                    style={estilos.campo}
                    placeholder='Descrição' 
                    placeholderTextColor='#01233c'
                    keyboardType='default'
                    onChangeText={setDescricao}
                    value={descricao}
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Status operacional'
                    placeholderTextColor='#01233c'
                    keyboardType='default'
                    onChangeText={setStatusOperacional}
                    value={statusOperacional}      
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Instruções de segurança'
                    placeholderTextColor='#01233c'    
                    keyboardType='default'           
                    onChangeText={setInstrucoesSeguranca}
                    value={instrucoesSeguranca}
                />
                <TextInput 
                    style={estilos.campo}
                    placeholder='Contato do responsável'
                    placeholderTextColor='#01233c'
                    keyboardType='default'                
                    onChangeText={setContatoResponsavel}
                    value={contatoResponsavel}
                />      
                <TextInput 
                    style={estilos.campo}
                    placeholder='Latitude'
                    placeholderTextColor='#01233c'
                    keyboardType='default'                
                    onChangeText={setLatitude}
                    value={latitude}
                />           
                <TextInput 
                    style={estilos.campo}
                    placeholder='Longitude'
                    placeholderTextColor='#01233c'
                    keyboardType='default'                
                    onChangeText={setLongitude}
                    value={longitude}
                />                                 
            </View>

            <TouchableOpacity 
                style={estilos.botao}
                onPress={ () => adicionar(descricao, 
                                          statusOperacional, 
                                          instrucoesSeguranca, 
                                          contatoResponsavel, 
                                          latitude,
                                          longitude) }
            >
                <Text>
                    <Feather 
                        name="user-plus" 
                        size={24} 
                        color='#dee2e6' 
                    />   
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginVertical: 10,
    },
    conteinerCampos: {
        flex: 1,
    },
    campo: {
        height: 50,
        width: 300,
        backgroundColor: '#2b2d42',
        color: '#fff',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        width: 60,
        height: 350,
        marginStart: 10,
        backgroundColor: '#2b2d42',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
  });