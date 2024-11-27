import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { Banner } from "../../components/Banner";

export default function Home() {
  const [selectedBook, setSelectedBook] = useState(null); // Estado para armazenar o livro selecionado

  const premiumBooks = [
    {
      id: "1",
      title: "Refatoração de CSS - Organize suas folhas de estilo",
      description: "Revisar seu código a fim de remover redundâncias e inconsistências – processo conhecido como refatoração...",
      cover: "https://a-static.mlcdn.com.br/800x560/livro-refatoracao-de-css-organize-suas-folhas-de-estilo-com-sucesso-novatec-editora/livrdavila/837982/dc358381058f9d432ab201dd415f4d26.jpeg",
      ratings: [5, 4, 4, 5, 3]
    },
    {
      id: "2",
      title: "A era da IA",
      description: "“Os três autores de A Era da IA têm alegações fortes que fazem com que sejam levados a sério…",
      cover: "https://a-static.mlcdn.com.br/800x560/livro-a-era-da-ia/authenticlivros/1223978/52db21db9e1397636a28012e8c7c1b8c.jpg",
      ratings: [4, 5, 4, 4, 5]
    },
    {
      id: "3",
      title: "PHP&MYSQL",
      description: "PHP é uma linguagem de programação usada para controlar muitos dos principais sites no mundo...",
      cover: "https://a-static.mlcdn.com.br/800x560/livro-php-mysql/boaviagemdistribuidora/390775/32b5d976c8a692fae983304f13c3d0c9.jpg",
      ratings: [3, 4, 4, 4, 3]
    },
  ];

  const recommendedBooks = [
    { id: "1", cover: "https://i.pinimg.com/736x/a5/a9/95/a5a99588bfcae6e475818dea64f32c39.jpg", tag: "Banco de Dados" },
    { id: "2", cover: "https://i.pinimg.com/736x/a8/07/3c/a8073ceb2cc21456b8c64d6156d59cca.jpg", tag: "Inteligência Artificial" },
    { id: "3", cover: "https://i.pinimg.com/736x/5f/26/b5/5f26b5d600da3fd837656cb319e54e2a.jpg", tag: "React Native" },
    { id: "4", cover: "https://i.pinimg.com/736x/09/16/95/091695735c582945190414001e69e226.jpg", tag: "PHP" },
    { id: "5", cover: "https://i.pinimg.com/736x/21/4f/dc/214fdcdb5879a4257a5d127dc1fe7f7f.jpg", tag: "Javascript" },
    { id: "6", cover: "https://i.pinimg.com/736x/b7/db/2d/b7db2d940d4fa2cb08e61dbfb530b71d.jpg", tag: "Java" },
    { id: "7", cover: "https://i.pinimg.com/736x/15/c6/97/15c697b689a97ef1ee9fc03902334a93.jpg", tag: "HTML" },
    { id: "8", cover: "https://i.pinimg.com/736x/38/cd/1c/38cd1ca86a210916a69235f1c324a75b.jpg", tag: "Linguagem C" },
  ];

  const popularBooks = [
    { id: "1", cover: "https://www.bing.com/th?id=OPHS.Rl6%2fdo2d0eEHpw474C474&o=5&pid=21.1&w=160&h=235&qlt=100&dpr=1,3&c=8&pcl=f5f5f5", tag: "Desenvolvimento Web" },
    { id: "2", cover: "https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/fafe6b6b55ecab179c5976e5413851c4/thumb_1200_1697.png", tag: "C# Avançado" },
    { id: "3", cover: "https://img.wook.pt/images/introducao-ao-cloud-computing-antonio-miguel-ferreira/MXwxNjIzMDE2MXwxMTgwOTk0NnwxNDI1MzE2NDU4MDAw/500x", tag: "Cloud Computing" },
    { id: "4", cover: "https://http2.mlstatic.com/D_NQ_NP_639574-MLU77444329707_072024-O.webp", tag: "Python para Dados" },
  ];

  const handleBookPress = (book) => {
    setSelectedBook(book);
  };

  const renderBookDetails = () => {
    if (!selectedBook) return null;

    const averageRating = selectedBook.ratings.reduce((a, b) => a + b, 0) / selectedBook.ratings.length;

    return (
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{selectedBook.title}</Text>
        <Text style={styles.bookDescription}>{selectedBook.description}</Text>
        <Text style={styles.rating}>Avaliação média: {averageRating.toFixed(1)} / 5</Text>
        <Text style={styles.ratings}>Avaliações: {selectedBook.ratings.join(", ")}</Text>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Banner />

      {/* Seção Seleção Premium */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Em alta</Text>
        <FlatList
          horizontal
          data={premiumBooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleBookPress(item)} style={styles.premiumItem}>
              <Image source={{ uri: item.cover }} style={styles.premiumImage} />
              <Text style={styles.premiumTitle}>{item.title}</Text>
              <Text style={styles.premiumDescription} numberOfLines={2}>
                {item.description}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Exibe os detalhes do livro selecionado */}
      {renderBookDetails()}

      {/* Seção Recomendados */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recomendados</Text>
        <FlatList
          horizontal
          data={recommendedBooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.recommendItem}>
              <Image source={{ uri: item.cover }} style={styles.recommendImage} />
              <Text style={styles.recommendTag}>{item.tag}</Text>
            </View>
          )}
        />
      </View>

      {/* Seção Mais Populares */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mais Populares</Text>
        <FlatList
          horizontal
          data={popularBooks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.popularItem}>
              <Image source={{ uri: item.cover }} style={styles.popularImage} />
              <Text style={styles.popularTag}>{item.tag}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F8FF",
  },
  section: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  premiumItem: {
    marginRight: 15,
    width: 150,
  },
  premiumImage: {
    width: "100%",
    height: 140,
    borderRadius: 8,
  },
  premiumTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
  },
  premiumDescription: {
    fontSize: 12,
    color: "gray",
  },
  recommendItem: {
    marginRight: 10,
    alignItems: "center",
  },
  recommendImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  recommendTag: {
    marginTop: 5,
    fontSize: 12,
    color: "gray",
  },
  popularItem: {
    marginRight: 10,
    alignItems: "center",
  },
  popularImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  popularTag: {
    marginTop: 5,
    fontSize: 12,
    color: "gray",
  },
  bookDetails: {
    paddingHorizontal: 15,
    marginTop: 20,
  },
  bookTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bookDescription: {
    marginTop: 10,
    fontSize: 16,
    color: "gray",
  },
  rating: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  ratings: {
    marginTop: 5,
    fontSize: 12,
    color: "gray",
  },
});
