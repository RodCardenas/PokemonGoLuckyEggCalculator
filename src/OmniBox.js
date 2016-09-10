import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PokemonModel from './PokemonModel';
import PokemonService from './PokemonService';
import Util from './Util';

class OmniBox extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.setState({
      newValue: ''
    });
  }

  onChange(event){
    var name = event.nativeEvent.text;
    var dataList = this.props.data.filter((pokemon) => pokemon.name.match(new RegExp('.*' + name +'.*', 'gi')));

    this.setState({
      newValue: name
    });

    this.props.updateDataList(dataList);
  }

  render() {
    return (
      <TextInput style={{height: 36, padding: 4, marginBottom: 0, fontSize: 16, borderWidth: 1, borderColor: '#eee', borderRadius: 8, backgroundColor: '#fff'}}
        placeholder='Search Pokemon'
        blurOnSubmit={false}
        value={this.state.newValue}
        onChange={this.onChange}>
      </TextInput>
    );
  }
}

module.exports = OmniBox;
