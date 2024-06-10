import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Inicial } from '../telas/Inicial';
import { Usuarios } from '../telas/Usuarios';
import { CadastroSensores } from '../telas/CadastroSensores';
import { Feather } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export function RotasTab() {
    return (
        <Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: true,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#8d99ae',
            tabBarStyle: {
                backgroundColor: '#2b2d42',
                borderTopColor: 0,
                paddingBottom: 10,
                paddingTop: 10
            },
            tabBarLabelStyle: {
                fontSize: 16, // Aumenta o tamanho da letra
            }
        }}>

            <Screen 
                name='inicial'
                component={Inicial}
                options={{
                    tabBarLabel: 'Inicial',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="home" size={size} color={color} /> 
                    )
                }}
            />

            <Screen 
                name='usuarios'
                component={Usuarios}
                options={{
                    tabBarLabel: 'Usuários',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="users" size={size} color={color} /> 
                    )
                }}                
            />

            <Screen 
                name='cadSensor'
                component={CadastroSensores}
                options={{
                    tabBarLabel: 'Sensores',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="map-pin" size={size} color={color} /> 
                    )
                }}                
            />

        </Navigator>
    );
}
