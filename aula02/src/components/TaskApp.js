import { StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';
import React from 'react'
import { useState } from 'react';

const TaskApp = () => {
    
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    if (task.trim().length > 0) {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lista de Tarefas</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa..."
          value={task}
          onChangeText={setTask}
        />
        <Button title="Adicionar" onPress={addTask} />
      </View>

      <ScrollView style={styles.taskList}>
        {taskList.map((item, index) => (
          <View key={index} style={styles.task}>
            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 50,
    },
    header: {
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f8f8f8',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    inputContainer: {
      flexDirection: 'row',
      padding: 10,
    },
    input: {
      flex: 1,
      borderBottomWidth: 1,
      marginRight: 10,
    },
    taskList: {
      flex: 1,
      paddingTop: 20,
    },
    task: {
      backgroundColor: '#eee',
      padding: 10,
      marginVertical: 5,
      borderRadius: 5,
    },
  });

  /*
container: Este estilo é aplicado ao componente View que envolve todo o aplicativo.

flex: 1 garante que o componente ocupe toda a tela disponível.
marginTop: 50 adiciona um espaço na parte superior do componente, para evitar sobreposições com a barra de status em alguns dispositivos.
header: Estilo para o cabeçalho do aplicativo.

height: 60 define a altura do cabeçalho.
justifyContent: 'center' e alignItems: 'center' centralizam o texto do cabeçalho tanto vertical quanto horizontalmente.
backgroundColor: '#f8f8f8' define a cor de fundo do cabeçalho.
headerText: Estilo para o texto dentro do cabeçalho.

fontSize: 20 define o tamanho da fonte do texto.
fontWeight: 'bold' torna o texto em negrito.
inputContainer: Estilo para o container que envolve o campo de entrada de texto e o botão.

flexDirection: 'row' faz com que o campo de texto e o botão sejam dispostos horizontalmente.
padding: 10 adiciona um espaço interno ao redor do container, separando-o dos outros elementos.
input: Estilo para o campo de entrada de texto.

flex: 1 permite que o campo de texto expanda para ocupar todo o espaço horizontal disponível, deixando espaço apenas para o botão ao lado.
borderBottomWidth: 1 adiciona uma borda na parte inferior do campo de texto.
marginRight: 10 adiciona um espaço à direita do campo de texto, separando-o do botão.
taskList: Estilo para a lista de tarefas.

flex: 1 permite que a lista de tarefas ocupe todo o espaço vertical disponível após os elementos anteriores.
paddingTop: 20 adiciona um espaço no topo da lista de tarefas.
task: Estilo para cada tarefa individual na lista.

backgroundColor: '#eee' define a cor de fundo de cada tarefa.
padding: 10 adiciona espaço interno ao redor do texto da tarefa, tornando-a mais legível.
marginVertical: 5 adiciona um espaço vertical entre as tarefas, separando-as umas das outras.
borderRadius: 5 arredonda os cantos do container da tarefa.
  */

export default TaskApp