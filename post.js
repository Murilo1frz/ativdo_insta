import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const screenWidth = Dimensions.get('window').width;

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curtido: false,
      likers: Math.floor(Math.random() * 10000) + 1,
      showHeart: false,
    };
  }

  carregaIcone(curtido) {
    return curtido
      ? require('./assets/likeada.png')
      : require('./assets/like.png');
  }

  like = () => {
    const { curtido, likers } = this.state;
    this.setState({
      curtido: !curtido,
      likers: curtido ? likers - 1 : likers + 1,
    });
  };

  handleDoubleTap = () => {
    if (!this.state.curtido) {
      this.setState({ curtido: true, likers: this.state.likers + 1 });
    }

    this.setState({ showHeart: true }, () => {
      setTimeout(() => this.setState({ showHeart: false }), 800);
    });
  };

  mostraLikers(likers) {
    if (likers <= 0) return null;
    return (
      <Text style={styles.likers}>
        {likers} {likers === 1 ? 'curtida' : 'curtidas'}
      </Text>
    );
  }

  render() {
    const { data } = this.props;
    const { curtido, likers, showHeart } = this.state;

    return (
      <View style={styles.postContainer}>
   
        <View style={styles.viewPerfil}>
          <Image
            source={{ uri: data.imagem }}
            style={styles.fotoPerfil}
          />
          <Text style={styles.nomeUsuario}>{data.nome}</Text>
        </View>
        <TapGestureHandler numberOfTaps={2} onActivated={this.handleDoubleTap}>
          <View style={styles.imgContainer}>
            <Image
              source={{ uri: data.imagem }}
              style={styles.fotoPublicacao}
            />

            {showHeart && (
              <Animatable.Image
                animation="zoomIn"
                duration={500}
                source={require('./assets/likeada.png')}
                style={styles.heartAnimation}
              />
            )}
          </View>
        </TapGestureHandler>

        {/* Área dos botões */}
        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.like}>
            <Image
              source={this.carregaIcone(curtido)}
              style={styles.iconeLike}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require('./assets/send.png')}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
        </View>

     
       {this.mostraLikers(likers)}
        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{data.nome}</Text>
          <Text style={styles.descRodape}>{data.descricao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 postContainer: {
  width: '100%',
  marginBottom: 15,
  backgroundColor: '#fff',
  borderBottomColor: '#eee',
  borderBottomWidth: 1,
},

  viewPerfil: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  fotoPerfil: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  nomeUsuario: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
  imgContainer: {
    position: 'relative',
  },
  fotoPublicacao: {
  width: '100%',
  height: 400,
  resizeMode: 'cover',
},

  heartAnimation: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    width: 100,
    height: 100,
    opacity: 0.9,
  },
  areaBtn: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingTop: 8,
  },
  iconeLike: {
    width: 26,
    height: 26,
  },
  btnSend: {
    paddingLeft: 10,
  },
  likers: {
    fontWeight: '600',
    marginTop: 5,
    paddingHorizontal: 12,
    color: '#222',
  },
  viewRodape: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  nomeRodape: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
    marginRight: 6,
  },
  descRodape: {
    fontSize: 15,
    color: '#444',
  },
});

export default Post;
