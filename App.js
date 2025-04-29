import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Post from './post';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: '1',
          nome: 'tung_tung_sahur',
          descricao: 'Tung tung tung tung sahur 🥁🌙',
          imagem: 'https://i1.sndcdn.com/artworks-qJ5IFyKat8H70Vkz-tYUbnQ-t1080x1080.jpg',
        },
        {
          id: '2',
          nome: 'chipamzini_bananini',
          descricao: 'Chipamzini bananini 🍌🎶',
          imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0QU7PJ6YXWBOAwLIoBdq1mtYnkN4EFpNXqA&s',
        },
        {
          id: '3',
          nome: 'brr_brr_patapim',
          descricao: 'BRR BRR PATAPIM 🔫🥁',
          imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2gZTBFxULeB86fPu19KRjW9VAApq5OY_BZA&s',
        },
        {
          id: '4',
          nome: 'tralalero_tralala',
          descricao: 'tralalero tralala🦈🦈 ',
          imagem: 'https://cdn.thingiverse.com/assets/2c/18/d4/b8/d4/featured_preview_ab67616d00001e026267a426d1ca9c22b813835a1.jpg',
        },
        {
          id: '5',
          nome: 'cappuccino_assassino',
          descricao: 'Cappuccino Assassino ☕🔪',
          imagem: 'https://media.sketchfab.com/models/f0f6ed43c05142dd82bceea3061f4103/thumbnails/f44c93e7ad4e43e08ccd69ddc977d25b/4c0db96c306d4280ad43d3a650f62c75.jpeg',
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require('./assets/logo.png')}
              style={styles.logo}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require('./assets/send.png')}
              style={styles.send}
            />
          </TouchableOpacity>
        </View>

        <FlatList 
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    height: 55,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
    elevation: 1,
  },
  logo: {
    width: 110,
    height: 30,
  },
  send: {
    width: 23,
    height: 23,
  },
});

export default App;
