import React, { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";

const vocabularyData = [
  { id: "1", chapter: "Chapter 1", word: "شَرِبْنُ", meaning: " I drank" },
  {
    id: "2",
    chapter: "Chapter 1",
    word: "شَرِبْناَ",
    meaning: "we Drank",
  },
  {
    id: "3",
    chapter: "Chapter 1",
    word: "شَرِبْتَ",
    meaning: " you (singular masculine) drank",
  },
  {
    id: "4",
    chapter: "Chapter 2",
    word: "شَرِبْتِ",
    meaning: "you (singular feminiline) drank",
  },
  {
    id: "5",
    chapter: "Chapter 2",
    word: "شَرِبْتُماَ",
    meaning: "you drank (dual, both gender)",
  },
  {
    id: "6",
    chapter: "Chapter 2",
    word: "شَرِبْتُمْ",
    meaning: "you drank (plural masculine)",
  },
  {
    id: "7",
    chapter: "Chapter 2",
    word: "شَرِبْتُنَّ",
    meaning: "you drank (plural femininine)",
  },
  {
    id: "8",
    chapter: "Chapter 2",
    word: "شَرِبَ",
    meaning: "He drank (singular masculine)",
  },
  {
    id: "9",
    chapter: "Chapter 2",
    word: "شَرِبَتْ",
    meaning: "she drank (singular feminine)",
  },

  {
    id: "10",
    chapter: "Chapter 2",
    word: "شَرِباَ",
    meaning: "they drank (dual / 2 boys)",
  },

  {
    id: "11",
    chapter: "Chapter 2",
    word: "شَرِبَتاَ",
    meaning: " they drank (dual /2 girls)",
  },
  {
    id: "12",
    chapter: "Chapter 2",
    word: "شَرِبٌوا",
    meaning: "they drank (plural masculine)",
  },
  {
    id: "13",
    chapter: "Chapter 2",
    word: "شَرِبْنَ",
    meaning: "they drank (plural feminine)",
  },
  // Add more words as needed
];

export default function App() {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleWordPress = (word) => {
    setSelectedWord(word);
  };

  const renderChapterWords = (chapter) => {
    return vocabularyData
      .filter((item) => item.chapter === chapter)
      .map((wordItem) => (
        <TouchableOpacity
          key={wordItem.id}
          onPress={() => handleWordPress(wordItem)}
        >
          <Text style={styles.wordItem}>{wordItem.word}</Text>
        </TouchableOpacity>
      ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Vocabulary Study App</Text>
      <ScrollView style={styles.wordList}>
        {renderChapterWords("Chapter 1")}
        {renderChapterWords("Chapter 2")}
        {/* Add more chapters as needed */}
      </ScrollView>
      {selectedWord && (
        <View style={styles.meaningContainer}>
          <Text style={styles.meaningText}>
            <Text style={styles.boldText}>Word: </Text>
            {selectedWord.word}
          </Text>
          <Text style={styles.meaningText}>
            <Text style={styles.boldText}>Meaning: </Text>
            {selectedWord.meaning}
          </Text>
        </View>
      )}
      <View style={styles.footer}>
        <Text style={styles.footerText}>@ibrahim</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Droid Arabic Kufi",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontFamily: "Droid Arabic Kufi",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  wordList: {
    fontFamily: "Droid Arabic Kufi",
    width: "100%",
    flexGrow: 1,
    marginBottom: 20,
  },
  wordItem: {
    fontSize: 30,
    marginBottom: 10,

    fontFamily: "Droid Arabic Kufi",

    color: "blue",
  },
  meaningContainer: {
    fontFamily: "Droid Arabic Kufi",
    padding: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginBottom: 20,
  },
  meaningText: {
    fontFamily: "Droid Arabic Kufi",
    fontSize: 30,
    marginBottom: 10,
  },
  boldText: {
    fontFamily: "Droid Arabic Kufi",
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 10,
  },
  footerText: {
    fontSize: 14,
  },
});
