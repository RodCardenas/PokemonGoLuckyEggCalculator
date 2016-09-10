import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';

class ListViewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      data: props.data
    });
  }

  render() {
    let data = this.state.data;
    return (
      <TouchableHighlight underlayColor={'#eee'} style={{paddingTop: 6, paddingBottom: 6, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize:18}}>{data.name}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

module.exports = ListViewItem;
