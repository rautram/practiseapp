import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import axios from 'axios';
import FastImage from 'react-native-fast-image';

const NewsScreen = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url =
        'http://newsapi.org/v2/everything?q=bitcoin&from=2020-08-10&sortBy=publishedAt&apiKey=5fd12ff54dcc454a97619c790348e8d2';

      const response = await axios.get(url);
      console.log(response.data);
      setData(response.data.articles);
    } catch (error) {}
  };
  const _renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <FastImage
          source={{uri: item.urlToImage}}
          style={{height: 200, width: '100%'}}
        />
        <View style={{paddingHorizontal: 10}}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
          <View style={styles.row}>
            <Text>{item.publishedAt}</Text>
            <Text>{item.author}</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item) => item.title}></FlatList>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 3,
    marginBottom: 10,
    paddingBottom: 10,
  },
});
