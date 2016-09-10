import React, { Component } from 'react';
import { Text, View, TouchableHighlight} from 'react-native';
import PokemonModel from './PokemonModel';
import OmniBox from './OmniBox';
import SortableListView from 'react-native-sortable-listview';
import ListViewItem from './ListViewItem';
import Util from './Util';
import PokemonService from './PokemonService';

let chosenList = [];
let dataList = PokemonService.findAll();
var dataListOrder = getOrder(dataList);

function getOrder(list) {
  return Object.keys(list);
}

function moveOrderItem(listView, fromIndex, toIndex) {
  Util.move(dataListOrder, parseInt(fromIndex), parseInt(toIndex));
  if (listView.forceUpdate) listView.forceUpdate();
}

class ListView extends Component {
  constructor(props) {
    super(props);
    this.updateDataList = this.updateDataList.bind(this);
    this._onCompletedChange = this._onCompletedChange.bind(this);
    this.state = {
      chosenList: chosenList
    };
  }

  updateDataList(theDataList) {
    dataListOrder = getOrder(theDataList);
    this.setState({
      chosenList: theDataList
    });
  }

  _onCompletedChange() {
    if (this.forceUpdate) this.forceUpdate();
  }

  render() {
    let listView = (<View></View>);
    if (this.state.chosenList.length) {
      listView = (
        <SortableListView
          ref='listView'
          style={{flex: 1}}
          data={this.state.chosenList}
          order={dataListOrder}
          onRowMoved={e => moveOrderItem(this, e.from, e.to)}
          renderRow={(dataItem, section, index) => <ListViewItem data={dataItem} onCompletedChange={this._onCompletedChange}/>}
        />
      );
    }

    return (
      <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
        <OmniBox
          data={Array.from(dataList)}
          updateDataList={this.updateDataList}/>
        {listView}
      </View>
    );
  }
}

module.exports = ListView;
