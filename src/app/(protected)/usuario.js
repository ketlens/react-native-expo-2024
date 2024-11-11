import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState("Toque aqui para adicionar uma descrição sobre você…");
  const [inputDescription, setInputDescription] = useState(description);

  const handlePress = () => {
    Linking.openURL('https://www.magazineluiza.com.br/livro-sistemas-de-banco-de-dados/p/6131440/li/liem/?=&seller_id=livrariainternacional&epik=dj0yJnU9WU1PbmhzaS1GSDFHblRFN180Ry1kdzVWbHN6ejMzX0kmcD0wJm49UEZoQS0zWHBPT045a2pkRVA3NzdhUSZ0PUFBQUFBR2N5ZzVz'); // URL que você quer abrir
  };

  const handleSaveDescription = () => {
    setDescription(inputDescription);
    setIsEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
      <Image
          source={{ uri: 'https://i.pinimg.com/736x/64/ca/04/64ca04fd08bc1a5496c81bab34213b90.jpg' }} // URL da imagem de perfil
          style={styles.fundo}
        />
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/66/43/7f/66437fee8584c248d57bf226d3453404.jpg' }} // URL da imagem de perfil
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Teste1</Text>
        <Text style={styles.userHandle}>@teste_super</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statLabel}>Lendo</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>4</Text>
            <Text style={styles.statLabel}>Listas de Leitura</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Atividades</Text>
          </View>
        </View>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab} onPress={() => setIsEditing(!isEditing)}>
          <Text style={styles.tabText}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Atividades</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        {isEditing ? (
          <View>
            <TextInput
              style={styles.input}
              value={inputDescription}
              onChangeText={setInputDescription}
              multiline
              placeholder="Escreva sua descrição..."
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveDescription}>
              <Text style={styles.saveButtonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text style={styles.descriptionText}>{description}</Text>
        )}
        <Text style={styles.registrationDate}>Cadastrado nov. de 2024</Text>
      </View>

      {/* Seção de histórias */}
      <View style={styles.storySection}>
        <Text style={styles.sectionTitle}>Livro que teste_super está lendo</Text>
        <View style={styles.storyItem}>
          <Image
            source={{ uri: 'https://i.pinimg.com/564x/51/87/2e/51872ebb7c9f0dc31e0c47b73771c01b.jpg' }} // URL da imagem da história
            style={styles.storyImage}
          />
          <View style={styles.storyContent}>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.storyTitle}>Sistema de Banco de Dados</Text>
            </TouchableOpacity>
            <Text style={styles.storyDescription}>Esta tradução da 8ª edição de Sistemas de Banco de Dados: Projeto, Implementação e administração, referência entre os títulos sobre banco de dados, apresenta aos leitores uma base sólida para a prática de design e implementação de bancos de dados.</Text>
            <View style={styles.tagsContainer}>
              <Text style={styles.tag}>Banco de dados</Text>
              <Text style={styles.tag}>Estrutura básica</Text>
              <Text style={styles.tag}>Desenvolvimento web</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#F0F8FF',
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 90,
    marginTop: -249,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fff',
  },
  userHandle: {
    fontSize: 16,
    fontFamily: 'sans-serif',
    color: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  statBox: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  statLabel: {
    fontSize: 12,
    color: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  tab: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  section: {
    padding: 15,
  },
  descriptionText: {
    fontSize: 14,
    color: '#777',
  },
  registrationDate: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
  input: {
    fontSize: 14,
    color: '#333',
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  storySection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  storyItem: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  storyImage: {
    width: 140,
    height: 160,
    borderRadius: 5,
    marginRight: 10,
  },
  storyContent: {
    flex: 1,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  storyDescription: {
    fontSize: 12,
    color: '#777',
    marginVertical: 5,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tag: {
    fontSize: 12,
    color: '#333',
    backgroundColor: '#eee',
    padding: 3,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  fundo: {
    width: 500,
    height: 300,
  },
});

export default UserProfile;
