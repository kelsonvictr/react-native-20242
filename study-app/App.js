// Importamos os módulos necessários para a navegação e o contexto
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProvedorCartoesEstudo } from './src/contexts/CartoesEstudoContext';
import EdicaoCartaoScreen from './src/screens/EdicaoCartaoScreen'; // Tela de Edição

const Stack = createStackNavigator(); // Criamos um Stack Navigator para a navegação

const App = () => {
    return (
        // Envolvemos toda a aplicação com o Provedor do Contexto
        <ProvedorCartoesEstudo>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="EdicaoCartao">
                    {/* Nesta aula inicial, focamos apenas na tela de edição */}
                    <Stack.Screen 
                        name="EdicaoCartao" 
                        component={EdicaoCartaoScreen} 
                        options={{ title: 'Editar Cartão' }} 
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ProvedorCartoesEstudo>
    );
};

export default App;
