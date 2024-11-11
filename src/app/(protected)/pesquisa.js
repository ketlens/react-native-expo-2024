import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BusinessCardApp = () => {
  // Lista de categorias com ícones e cores
  const categories = [
    { name: 'Inteligência Artificial', icon: 'code-slash', color: '#845ec2' },
    { name: 'Desenvolvimento Web', icon: 'terminal-sharp', color: '#c2c5fa' },
    { name: 'Ciência de Dados', icon: 'create-sharp', color: '#82fc' },
    { name: 'Marketing Digital', icon: 'bar-chart', color: '#0081cf' },
    { name: 'Gestão de Projetos', icon: 'list', color: '#2c73d2' },
    { name: 'Design UX/UI', icon: 'color-palette-sharp', color: '#86f' },
    { name: 'Programação Mobile', icon: 'call', color: '#86e3ff' },
    { name: 'Negócios e Empreendedorismo', icon: 'briefcase', color: '#ebaff2' },
    { name: 'Desenvolvimento de Jogos', icon: 'game-controller', color: '#9a6697' },
    { name: 'Blockchain e Criptomoedas', icon: 'key', color: '#00c4cc' },
    { name: 'Computação Quântica', icon: 'flask', color: '#a15ecf' },
    { name: 'Automação e Robótica', icon: 'code-slash', color: '#cf98cb' },
    { name: 'Segurança Cibernética', icon: 'shield-checkmark', color: '#8cbfe6' },
    { name: 'DevOps', icon: 'cloud-upload', color: '#d973fc' },
    { name: 'Testes de Software', icon: 'checkmark-circle', color: '#7f93e0' },
    { name: 'Data Engineering', icon: 'code-slash', color: '#6b92e6' },
    { name: 'Realidade Aumentada (AR)', icon: 'eye', color: '#b39cd0' },
    { name: 'Computação na Nuvem', icon: 'cloud', color: '#58a6ff' },
    { name: 'Processamento de Linguagem Natural (NLP)', icon: 'chatbox-ellipses', color: '#f9a8d4' },
    { name: 'Internet das Coisas (IoT)', icon: 'wifi', color: '#953890' },
  ];
//falta arrumar a parte de pesquisa, filtro e na hora de clicar na categoria ir para a pagina a onde esta a categoria desejada
  // Função para lidar com o clique na categoria
  const handleCategoryPress = (category) => {
    Alert.alert('Categoria Selecionada', `Você escolheu: ${category.name}`);
    // Aqui você pode adicionar a navegação ou abrir a página da categoria
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>Pesquisa de livros</Text>
        <Ionicons name="settings-outline" size={24} color="black" />
      </View>

      {/* Conteúdo com rolagem vertical */}
      <ScrollView style={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search and Filter */}
        <View style={styles.searchContainer}>
          <TextInput placeholder="Pesquise" style={styles.searchInput} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
            {/* Lista de pesquisas recentes */}
            {['IA', 'Pai Rico, Pai Pobre', 'Mercado digital'].map((recentSearch) => (
              <TouchableOpacity key={recentSearch} style={styles.filterButton}>
                <Text style={styles.filterText}>{recentSearch}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Título de Categorias */}
        <Text style={styles.sectionTitle}>Categorias:</Text>

        {/* Lista de Categorias em Duas Colunas */}
        <FlatList
          data={categories}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.card, { backgroundColor: item.color }]}
              onPress={() => handleCategoryPress(item)}
              activeOpacity={0.7}  // Feedback visual ao clicar
            >
              <Ionicons name={item.icon} size={22} color="#fff" style={styles.cardIcon} />
              <Text style={styles.cardTitle}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContainer}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  appTitle: {
    fontSize: 24,
  },
  scrollContent: {
    flex: 1,
  },
  searchContainer: {
    marginVertical: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 40,
  },
  filterContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  filterButton: {
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
  },
  filterText: {
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  listContainer: {
    paddingHorizontal: 5,
    paddingBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 5,
    maxWidth: '48%',
    alignItems: 'center',
  },
  cardIcon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default BusinessCardApp;
