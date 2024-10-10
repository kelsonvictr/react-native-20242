// Importamos os módulos necessários para a tela de edição
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useContext, useState } from 'react';
import CartoesEstudoContext from '../contexts/CartoesEstudoContext';

const EdicaoCartaoScreen = ({ route, navigation }) => {
    const { id } = route.params || {}; // Pegamos o ID do cartão se estiver disponível
    const { cartoes, adicionarCartao, atualizarCartao } = useContext(CartoesEstudoContext); // Acessamos o contexto para manipular os cartões
    const cartao = cartoes.find(c => c.id === id) || {}; // Encontramos o cartão pelo ID ou criamos um novo

    // Definimos o estado local para armazenar os dados do formulário
    const [titulo, setTitulo] = useState(cartao.titulo || '');
    const [notas, setNotas] = useState(cartao.notas || '');
    const [status, setStatus] = useState(cartao.status || 'backlog');

    // Função para salvar o cartão
    const salvarCartao = () => {
        const novoCartao = { titulo, notas, status };
        if (id) {
            atualizarCartao(id, novoCartao); // Atualiza o cartão existente
        } else {
            adicionarCartao(novoCartao); // Adiciona um novo cartão
        }
        navigation.goBack(); // Retorna à tela anterior
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Título:</Text>
            <TextInput
                style={styles.input}
                value={titulo}
                onChangeText={setTitulo}
                placeholder="Título do Cartão..."
            />
            <Text style={styles.label}>Notas:</Text>
            <TextInput
                style={styles.input}
                value={notas}
                onChangeText={setNotas}
                placeholder="Insira uma descrição..."
            />
            <Button title="Salvar" onPress={salvarCartao} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f4f8',
    },
    label: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 8,
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 12,
        marginBottom: 20,
        borderRadius: 8,
    },
});

export default EdicaoCartaoScreen;
