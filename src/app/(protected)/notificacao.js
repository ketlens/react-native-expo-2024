import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';

const quizQuestions = [
  {
    id: '1',
    question: 'Qual é o comando para criar um banco de dados em SQL?',
    options: ['CREATE DATABASE', 'INSERT DATABASE', 'MAKE DATABASE', 'NEW DATABASE'],
    answer: 'CREATE DATABASE',
  },
  {
    id: '2',
    question: 'Qual é a chave primária em uma tabela?',
    options: [
      'Uma coluna que armazena dados duplicados',
      'Uma coluna que identifica cada linha de forma única',
      'Uma chave para proteger a tabela',
      'Um índice para acelerar consultas',
    ],
    answer: 'Uma coluna que identifica cada linha de forma única',
  },
  {
    id: '3',
    question: 'Qual comando é usado para apagar uma tabela?',
    options: ['DELETE TABLE', 'DROP TABLE', 'REMOVE TABLE', 'CLEAR TABLE'],
    answer: 'DROP TABLE',
  },
];

export default function DatabaseQuiz() {
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleAnswer = (questionId, selectedOption) => {
    setAnswers({ ...answers, [questionId]: selectedOption });
  };

  const handleFinish = () => {
    let score = 0;
    quizQuestions.forEach((question) => {
      if (answers[question.id] === question.answer) {
        score++;
      } else {
        Alert.alert('Resposta Errada!', `A resposta correta para a pergunta: "${question.question}" é "${question.answer}"`);
      }
    });
    setCorrectAnswers(score);
    setCompleted(true);

    Alert.alert('Parabéns!', `Você acertou ${score} de ${quizQuestions.length} questões! 🎉`);
  };

  const renderQuestion = ({ item }) => (
    <View style={styles.questionContainer}>
      <Text style={styles.questionText}>{item.question}</Text>
      {item.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.optionButton, answers[item.id] === option && styles.selectedOption]}
          onPress={() => handleAnswer(item.id, option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {!completed ? (
        <>
          <FlatList
            data={quizQuestions}
            renderItem={renderQuestion}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
            <Text style={styles.finishButtonText}>Finalizar</Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>🎉 Parabéns! 🎉</Text>
          <Text style={styles.scoreText}>
            Você acertou {correctAnswers} de {quizQuestions.length} questões.
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f2fc',
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5e2d89',
    marginBottom: 10,
  },
  optionButton: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#9c6df3',
  },
  optionText: {
    fontSize: 16,
    color: '#5e2d89',
  },
  finishButton: {
    backgroundColor: '#5e2d89',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  finishButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5e2d89',
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 20,
    color: '#9c6df3',
  },
});
