import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const chapters = [
  {
    title: 'Capítulo 1: Introdução aos Bancos de Dados',
    content: `
Os bancos de dados são sistemas projetados para armazenar, organizar e gerenciar grandes volumes de dados de maneira eficiente e estruturada. 
Eles são fundamentais em praticamente todos os setores, desde sistemas financeiros até plataformas de redes sociais.

Existem várias razões para utilizar bancos de dados:
- **Organização**: Um banco de dados bem estruturado permite que informações sejam acessadas rapidamente.
- **Escalabilidade**: Sistemas modernos lidam com milhões de registros de dados, e bancos de dados ajudam a gerenciá-los.
- **Segurança**: Garantem que os dados sejam armazenados de forma segura, com acessos restritos.

Exemplo de aplicação:
Imagine um banco de dados de um hospital. Ele pode armazenar informações sobre pacientes, médicos, diagnósticos e agendamentos. 
Ao consultar um paciente, o médico acessa rapidamente seu histórico médico.

Ao longo deste livro, exploraremos conceitos essenciais para entender e trabalhar com bancos de dados de maneira eficiente.
`,
  },
  {
    title: 'Capítulo 2: Modelos de Bancos de Dados',
    content: `
Modelos de bancos de dados definem como os dados são organizados, armazenados e manipulados. Existem diferentes tipos, cada um com características específicas:

1. **Banco de Dados Relacional**:
   O modelo mais popular, onde os dados são organizados em tabelas (linhas e colunas). As tabelas podem se relacionar umas com as outras. Exemplos incluem MySQL, PostgreSQL e SQL Server.
   
   Exemplo:
   - Tabela "Clientes": Armazena nomes, endereços e números de contato.
   - Tabela "Pedidos": Armazena informações sobre produtos comprados.
   A relação entre essas tabelas é feita usando chaves primárias e estrangeiras.

2. **Banco de Dados NoSQL**:
   Ideal para dados não estruturados ou semiestruturados, como JSON ou documentos. São usados em sistemas que exigem escalabilidade horizontal, como MongoDB e Cassandra.

3. **Banco de Dados Orientado a Objetos**:
   Armazena dados na forma de objetos, como em linguagens de programação orientadas a objetos. Exemplos incluem db4o e ObjectDB.

Cada modelo tem vantagens dependendo da aplicação. Entender qual modelo escolher é um passo essencial no design de sistemas de bancos de dados.
`,
  },
  {
    title: 'Capítulo 3: Linguagem SQL',
    content: `
A linguagem SQL (Structured Query Language) é o padrão para interagir com bancos de dados relacionais. Ela permite realizar operações como criar tabelas, inserir dados, consultar informações, atualizá-las e até excluí-las.

Principais comandos SQL:
- **CREATE**: Usado para criar tabelas ou bancos de dados.
  Exemplo: \`CREATE TABLE Clientes (ID INT, Nome VARCHAR(100), Email VARCHAR(100));\`
- **INSERT**: Insere novos registros em uma tabela.
  Exemplo: \`INSERT INTO Clientes (ID, Nome, Email) VALUES (1, 'João Silva', 'joao@email.com');\`
- **SELECT**: Recupera dados de uma tabela.
  Exemplo: \`SELECT * FROM Clientes;\`
- **UPDATE**: Atualiza informações já existentes.
  Exemplo: \`UPDATE Clientes SET Nome = 'João S.' WHERE ID = 1;\`
- **DELETE**: Remove registros.
  Exemplo: \`DELETE FROM Clientes WHERE ID = 1;\`

Com a prática, você poderá usar essas instruções para criar consultas eficientes e extrair informações valiosas dos dados armazenados.
`,
  },
];

export default function BookReader() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const scrollViewRef = useRef(null);

  const goToNextPage = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  const goToPreviousPage = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView ref={scrollViewRef}>
        <Text style={styles.chapterTitle}>{chapters[currentChapter].title}</Text>
        <Text style={styles.chapterContent}>{chapters[currentChapter].content}</Text>
      </ScrollView>

      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={[
            styles.navButton,
            currentChapter === 0 && styles.disabledButton,
          ]}
          onPress={goToPreviousPage}
          disabled={currentChapter === 0}
        >
          <Text style={styles.navButtonText}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navButton,
            currentChapter === chapters.length - 1 && styles.disabledButton,
          ]}
          onPress={goToNextPage}
          disabled={currentChapter === chapters.length - 1}
        >
          <Text style={styles.navButtonText}>Próxima Página</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f2fc',
    padding: 20,
  },
  chapterTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#5e2d89',
    marginBottom: 20,
    textAlign: 'center',
  },
  chapterContent: {
    fontSize: 18,
    color: '#5e2d89',
    lineHeight: 28,
    marginBottom: 30,
    textAlign: 'justify',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  navButton: {
    backgroundColor: '#5e2d89',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#d1b3e6',
  },
});
