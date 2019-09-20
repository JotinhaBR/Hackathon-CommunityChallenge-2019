import React from 'react';
import {
  AppRegistry,
  Environment,
  staticAssetURL,
} from 'react-360';
import 'localstorage-polyfill';
import estilo from '../style/estiloGlobal';
import LayoutQuadro from '../layout/quadro';
import LayoutTexto from '../layout/texto';
import LayoutBotao from '../layout/botao';
import ScreenCreditos from './creditos';
import ScreenFimDoJogo from './fimDoJogo';
import ScreenJogando from './jogando';

export default class ScreenInicio extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Environment.setBackgroundImage(staticAssetURL('backgroundScreenHome.jpg'));
    try {
      ScreenCreditos.prototype.componentDestroy();
      ScreenFimDoJogo.prototype.componentDestroy();
      ScreenJogando.prototype.componentDestroy();
    } catch (error) {
      
    }
  }

  clickJogar(){
    global.localStorage.setItem("telaAtual", "ScreenJogando");
  }

  render() {
    return (
      <LayoutQuadro style={[estilo.prototype.global().fundoTransparente, estilo.prototype.global().quadroInicio]}>
        <LayoutTexto style={estilo.prototype.global().h1}>Bem vindo</LayoutTexto>
        <LayoutBotao onClick={this.clickJogar}>Jogar</LayoutBotao>
      </LayoutQuadro>
    );
  }


};

AppRegistry.registerComponent('ScreenInicio', () => ScreenInicio);
