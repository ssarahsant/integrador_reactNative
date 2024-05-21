import { StyleSheet, View } from 'react-native';
import { Cabecalho } from '../componentes/Cabecalho';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject, watchPositionAsync, LocationAccuracy } from 'expo-location';
import { useEffect, useState, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';

export const Inicial = () => {
  // armazena a posicao atual em estado, para carregar no mapa
  // inicialmente terá um padrão como nulo
  // define uma tipagem do estado (com dados de latitude e longitude) ou nulo
  const [localizacao, setLocalizacao] = useState<LocationObject | null>(null);

  // criação de uma referencia
  const referenciaMapa = useRef<MapView>(null);

  // solicita permissão para o usuário para acessar sua localização
  async function solicitaPermissao() {
    // desestrutura para acessar a permissão
    // utiliza o await para aguardar
    const { granted } = await requestForegroundPermissionsAsync();

    // realiza uma verificação para saber se o usuário concedeu a permissão
    if (granted) {
      // se for autorizado usa um método para obter a localização do usuário
      const posicaoAtual = await getCurrentPositionAsync();
      // armazena no estado a posição atual, para carregar a região do mapa (localização do mapa)
      setLocalizacao(posicaoAtual);
      console.log(posicaoAtual);
    }
  }

  // utilização da função
  // no momento que a interface for renderizada chama o método de solicitação da permissão
  useEffect(() => {
    solicitaPermissao();
  }, []);

  // função para observar alterações na localização
  // construção de um listener dentro do useEffect
  // passa o objeto com configurações
  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (atualizaLocalizacao) => {
        console.log("Nova localização", atualizaLocalizacao);
        setLocalizacao(atualizaLocalizacao);
        referenciaMapa.current?.animateCamera({
          pitch: 70,
          center: atualizaLocalizacao.coords,
        });
      }
    );
  }, []);

  return (
    <View style={estilos.conteiner}>
      <Cabecalho titulo="Localizador" />
      {localizacao && (
        <MapView
          ref={referenciaMapa}
          style={estilos.mapa}
          initialRegion={{
            latitude: localizacao.coords.latitude,
            longitude: localizacao.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: localizacao.coords.latitude,
              longitude: localizacao.coords.longitude,
            }}
          />
        </MapView>
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: '#080a0c',
  },
  mapa: {
    flex: 1,
    width: '100%',
  },
});
