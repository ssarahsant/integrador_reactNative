import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Cabecalho } from '../componentes/Cabecalho'
import { FormularioUsuario } from '../componentes/FormularioUsuario'
import uuid from 'react-native-uuid'


export const Cadastro = () => { 

    const [codigo, setCodigo] = useState('')
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const adicionarUsuario = (nome: string, email: string, telefone: string, usuario: string, senha: string) => {

        setCodigo(String(uuid.v4()))
        setNome(nome)
        setEmail(email)
        setTelefone(telefone)
        setUsuario(usuario)
        setSenha(senha)
    }

    return(
        <>
            <Cabecalho titulo="Cadastro" />  
            <View style={estilos.conteiner}>
                <FormularioUsuario 
                    adicionar={adicionarUsuario}
                />  
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    campo: {
        height: 50,
        width: 300,
        backgroundColor: '#2b2d42',
        color: '#a9d6e5',
        marginVertical: 5,
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    botao: {
        height: 50,
        width: 300,   
        backgroundColor: '#2b2d42',       
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,    
        marginVertical: 20,  
    },
    textoBotao: {
        color: '#a9d6e5',
        fontSize: 16,
    },
    link: {
        width: 300,
        alignItems: 'flex-start'
    },
    textoLink: {
        color: '#a9d6e5',
        fontSize: 16,
    },
})