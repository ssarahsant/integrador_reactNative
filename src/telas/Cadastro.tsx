import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormularioUsuario } from '../componentes/FormularioUsuario';


export const Cadastro = () => {
    return (
        <View style={estilos.conteiner}>
            <FormularioUsuario />
        </View>

    );
};

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
    }
});