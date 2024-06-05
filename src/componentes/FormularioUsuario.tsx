import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../componentes/AuthContext';

export const FormularioUsuario: React.FC = () => {
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();
    const { token } = useAuth(); // Usando o contexto de autenticação

    const fazerCadastro = async () => {
        try {
            // Fazer a requisição de cadastro
            const response = await axios.post(
                'http://10.0.2.2:8000/api/create_user/',
                {
                    email: email,
                    username: usuario,
                    password: senha
                }
            );

            // Se o cadastro for bem-sucedido, navegar para a tela inicial
            navigation.navigate('rotasTab');
        } catch (error) {
            // Se houver um erro no cadastro, você pode exibir uma mensagem de erro
            console.error('Erro de cadastro:', error);
        }
    };

    return (
        <View>
            <Text style={estilos.titulo}>Cadastro de Usuário</Text>
            <View>
                <TextInput
                    style={estilos.campo}
                    placeholder="Email"
                    placeholderTextColor="#fff"
                    keyboardType="default"
                    onChangeText={setEmail}
                    value={email}
                />

                <TextInput
                    style={estilos.campo}
                    placeholder="Usuário"
                    placeholderTextColor="#fff"
                    keyboardType="default"
                    onChangeText={setUsuario}
                    value={usuario}
                />
                <TextInput
                    style={estilos.campo}
                    placeholder="Senha"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    onChangeText={setSenha}
                    value={senha}
                />
            </View>
            <TouchableOpacity style={estilos.botao} onPress={fazerCadastro}>
                <Text style={estilos.textoBotao}>Cadastrar</Text>
            </TouchableOpacity>

        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
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
        height: 50,
        width: 300,
        backgroundColor: '#2b2d42',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 20,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
    },
    titulo: {
        color: '#fff',
        fontSize: 28,
        textAlign: 'center',
        marginVertical: 20,
    }
});