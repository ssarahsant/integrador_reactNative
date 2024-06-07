import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../componentes/AuthContext';

export const CadastroSensores = () => {
  const [tipo, setTipo] = useState('');
  const [macAddress, setMacAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [unidadeMedida, setUnidadeMedida] = useState('');
  const [statusOperacional, setStatusOperacional] = useState(true);
  const [observacao, setObservacao] = useState('');

  const navigation = useNavigation();
  const { token } = useAuth();

  const sensorCadastro = () => {
    axios.post('http://10.0.2.2:8000/api/sensores/', {
      tipo: tipo,
      mac_address: macAddress,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      localizacao: localizacao,
      responsavel: responsavel,
      unidade_medida: unidadeMedida,
      status_operacional: statusOperacional,
      observacao: observacao
    },
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(response => {
      console.log('Cadastro bem-sucedido:', response.data);
      Alert.alert('Cadastrado', 'Sensor cadastrado com sucesso');
    })
    .catch(error => {
      console.error('Erro no cadastro:', error);
      Alert.alert('Erro', 'Erro ao cadastrar sensores');
    });
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Cadastro de Usuário</Text>
      <TextInput
        style={estilos.campo}
        placeholder='Tipo'
        placeholderTextColor='#fff'
        onChangeText={setTipo}
        value={tipo}
      />
      <TextInput
        style={estilos.campo}
        placeholder='MAC Address'
        placeholderTextColor='#fff'
        onChangeText={setMacAddress}
        value={macAddress}
      />
      <TextInput
        style={estilos.campo}
        placeholder='Latitude'
        placeholderTextColor='#fff'
        keyboardType='numeric'
        onChangeText={text => setLatitude(text)}
        value={latitude}
      />
      <TextInput
        style={estilos.campo}
        placeholder='Longitude'
        placeholderTextColor='#fff'
        keyboardType='numeric'
        onChangeText={text => setLongitude(text)}
        value={longitude}
      />
      <TextInput
        style={estilos.campo}
        placeholder='Localização'
        placeholderTextColor='#fff'
        onChangeText={setLocalizacao}
        value={localizacao}
      />
      <TextInput
        style={estilos.campo}
        placeholder='Responsável'
        placeholderTextColor='#fff'
        onChangeText={setResponsavel}
        value={responsavel}
      />
      <TextInput
        style={estilos.campo}
        placeholder='Unidade de Medida'
        placeholderTextColor='#fff'
        onChangeText={setUnidadeMedida}
        value={unidadeMedida}
      />
      <TextInput
        style={estilos.campo}
        placeholder='Observação'
        placeholderTextColor='#fff'
        onChangeText={setObservacao}
        value={observacao}
      />
      <TouchableOpacity
        style={estilos.botao}
        onPress={sensorCadastro}
      >
        <Text style={estilos.textoBotao}>Cadastrar Sensor</Text>
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
