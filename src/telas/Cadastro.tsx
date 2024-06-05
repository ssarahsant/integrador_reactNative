import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Cabecalho } from '../componentes/Cabecalho';
import { FormularioUsuario } from '../componentes/FormularioUsuario';


export const Cadastro = () => {
    return (
        <>
            <Cabecalho titulo="Cadastre-se" />
            <View style={estilos.conteiner}>
                <FormularioUsuario />
            </View>
        </>
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