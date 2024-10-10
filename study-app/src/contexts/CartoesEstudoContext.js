// Importamos os módulos necessários
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Criamos o contexto que será utilizado para compartilhar o estado dos cartões
const CartoesEstudoContext = createContext();

// Esta função será usada para envolver nossa aplicação com o provedor de contexto
export const ProvedorCartoesEstudo = ({ children }) => {
    const [cartoes, setCartoes] = useState([]); // Aqui inicializamos o estado para armazenar os cartões

    // Carrega os cartões do AsyncStorage quando o componente é montado
    useEffect(() => {
        carregarCartoes();
    }, []);

    // Função para carregar os cartões do armazenamento local
    const carregarCartoes = async () => {
        const cartoesArmazenados = await AsyncStorage.getItem('cartoes');
        if (cartoesArmazenados) setCartoes(JSON.parse(cartoesArmazenados)); // Atualizamos o estado se houver cartões armazenados
    };

    // Função para adicionar um novo cartão
    const adicionarCartao = async (cartao) => {
        const novosCartoes = [...cartoes, { ...cartao, id: Date.now() }]; // Adicionamos um novo cartão com um ID único
        setCartoes(novosCartoes); // Atualizamos o estado
        await AsyncStorage.setItem('cartoes', JSON.stringify(novosCartoes)); // Salvamos no AsyncStorage
    };

    // Função para atualizar um cartão existente
    const atualizarCartao = async (id, atualizacoes) => {
        const novosCartoes = cartoes.map(cartao => cartao.id === id ? { ...cartao, ...atualizacoes } : cartao);
        setCartoes(novosCartoes);
        await AsyncStorage.setItem('cartoes', JSON.stringify(novosCartoes));
    };

    // Função para excluir um cartão
    const excluirCartao = async (id) => {
        const novosCartoes = cartoes.filter(cartao => cartao.id !== id); // Removemos o cartão com o ID correspondente
        setCartoes(novosCartoes);
        await AsyncStorage.setItem('cartoes', JSON.stringify(novosCartoes));
    };

    // Provedor do contexto que compartilha os cartões e funções de manipulação
    return (
        <CartoesEstudoContext.Provider value={{ cartoes, adicionarCartao, atualizarCartao, excluirCartao }}>
            {children}
        </CartoesEstudoContext.Provider>
    );
};

export default CartoesEstudoContext;
