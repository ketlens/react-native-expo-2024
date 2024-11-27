import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';

const data = [
  {
    id: '1',
    Image: 'https://i.pinimg.com/564x/51/87/2e/51872ebb7c9f0dc31e0c47b73771c01b.jpg',
    title: 'Sistemas de Banco de Dados',
    description:
      'Esta tradução da 8ª edição de Sistemas de Banco de Dados: Projeto, Implementação e administração, referência entre os títulos sobre banco de dados, apresenta aos leitores uma base sólida para a prática de design e implementação de bancos de dados.',
    tags: ['Banco de dados', 'Estrutura básica', 'Desenvolvimento web'],
  },
  {
    id: '2',
    Image: 'https://i.pinimg.com/736x/1f/16/ab/1f16abeb393956b414824e62037bfa9c.jpg',
    title: 'Hackers: Heroes of the Computer Revolution',
    description:
      'This 25th anniversary edition of Steven Levy s classic book traces the exploits of the computer revolutions original hackers -- those brilliant and eccentric nerds from the late 1950s through the early 80s who took risks, bent the rules, and pushed the world in a radical new direction.',
    tags: ['Computação', 'Informática', 'Mídias Digitais em Línguas Estrangeiras'],
  },
  {
    id: '3',
    Image: 'https://i.pinimg.com/736x/7c/c0/57/7cc057cc9a5aa99a257352387ab2df27.jpg',
    title: 'The Road to React',
    description:
      'The Road to React: The React.js with Hooks in JavaScript Book (2024 Edition) - is a comprehensive and pragmatic yet concise React 18 with Hooks (+ opt-in TypeScript) book. ',
    tags: [' Programação JavaScript', ' Desenvolvimento de Aplicativos', 'Mídias Digitais em Línguas Estrangeiras'],
  },
];

const tagsList = ['Todos', 'Banco de dados', 'Estrutura básica', 'Desenvolvimento web', 'Programação', 'Lógica'];

export default function BookListPage() {
  const [selectedTag, setSelectedTag] = useState('Todos');

  const filterBooksByTag = () => {
    if (selectedTag === 'Todos') return data;
    return data.filter((book) => book.tags.includes(selectedTag));
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.sectionTitle}>Livros para ler</Text>

      {/* Filtros horizontais */}
      <FlatList
        data={tagsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.filterContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedTag(item)}
            style={[
              styles.filterButton,
              selectedTag === item && styles.selectedFilterButton,
            ]}
          >
            <Text
              style={[
                styles.filterText,
                selectedTag === item && styles.selectedFilterText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Lista de Livros */}
      <FlatList
        data={filterBooksByTag()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.storyItem}>
            <Image source={{ uri: item.Image }} style={styles.storyImage} />
            <View style={styles.storyContent}>
              <TouchableOpacity>
                <Text style={styles.storyTitle}>{item.title}</Text>
              </TouchableOpacity>
              <Text style={styles.storyDescription}>{item.description}</Text>
              <View style={styles.tagsContainer}>
                {item.tags.map((tag, index) => (
                  <Text key={index} style={styles.tag}>
                    {tag}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  filterContainer: {
    marginBottom: 15,
    paddingHorizontal: 5,
    height: 40,
  },
  filterButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 8,
    backgroundColor: '#e0e0e0',
    borderRadius: 6,
    alignItems: 'center',
  },
  selectedFilterButton: {
    backgroundColor: '#6200ee',
  },
  filterText: {
    fontSize: 12,
    color: '#000',
  },
  selectedFilterText: {
    color: '#fff',
  },
  storyItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 10, // Espaço interno reduzido
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  storyImage: {
    width: 80,
    height: 140,
    marginTop: 25, // Espaçamento menor acima da imagem
    marginRight: 5, // Espaçamento menor entre imagem e conteúdo
    borderRadius: 4,
  },
  storyContent: {
    flex: 1,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5, // Espaço menor abaixo do título
  },
  storyDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5, // Espaço reduzido abaixo da descrição
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5, // Pequeno espaçamento acima das tags
  },
  tag: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    fontSize: 12,
    marginRight: 5,
    marginBottom: 5,
  },
});
