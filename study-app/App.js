import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProvedorCartoesEstudo } from './src/contexts/CartoesEstudoContext';
import ListaCartaoScreen from './src/screens/ListaCartaoScreen';
import EdicaoCartaoScreen from './src/screens/EdicaoCartaoScreen';
import TarefasVencimentoProximoScreen from './src/screens/TarefasVencimentoProximoScreen';

const Stack = createStackNavigator();

const App = () => {
    return (
        <ProvedorCartoesEstudo>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="ListaCartao">
                    <Stack.Screen name="ListaCartao" component={ListaCartaoScreen} options={{ title: 'Cartões de Estudo' }} />
                    <Stack.Screen name="EdicaoCartao" component={EdicaoCartaoScreen} options={{ title: 'Editar Cartão' }} />
                    <Stack.Screen name="TarefasVencimentoProximo" component={TarefasVencimentoProximoScreen} options={{ title: 'Tarefas a Vencer' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </ProvedorCartoesEstudo>
    );
};

export default App;
