import {View, Text, FlatList, StyleSheet} from 'react-native'
import {AmbienteEquipamento} from './AmbienteEquipamento'


interface AmbienteEquipamentoProps {
    codigo: string;
    descricao: string;
    statusOperacional: string;
    instrucoesSeguranca: string;
    contatoResponsavel: string;
    latitude: string;
    longitude: string;
}

interface ListaAmbienteEquipamentoPros {
    colecao: AmbienteEquipamentoProps[];
    remover: (codigo: string) => void;
}
export const ListaAmbienteEquipamento = ({colecao, remover}: ListaAmbienteEquipamentoPros) => {

    return(
        <View style={estilos.conteiner}>
  
            <FlatList 
                data={colecao}
                keyExtractor={item => item.codigo}
                renderItem={ ( { item } ) => (
                    <AmbienteEquipamento 
                        descricao={item.descricao}
                        statusOperacional={item.statusOperacional}
                        instrucoesSeguranca={item.instrucoesSeguranca}
                        contatoResponsavel={item.contatoResponsavel}
                        latitude={item.latitude}
                        longitude={item.longitude}
                        excluir={ () => remover(item.codigo) }
                    />
                )}
                ListEmptyComponent={() => (
                    <Text style={estilos.texto}>
                        Nenhum ambiente ou equipamento armazenado.
                    </Text>
                )}                
            />

        </View>
    )
}


const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    texto: {
        color: '#fff',
        textAlign: 'center'
    }
})