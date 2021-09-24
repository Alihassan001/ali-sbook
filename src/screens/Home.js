import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

//Redux
import {useDispatch, useSelector} from 'react-redux';
import {setLogin, setPost} from '../store/action';

//Services
import {getPost} from '../services/PostServices';

//Components
import {Header, Button} from '../components';

//Utils
import {Navigator} from '../utils';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer.posts);

  useEffect(() => {
    getSocialPosts();
  }, []);

  const getSocialPosts = () => {
    setLoading(true);
    getPost()
      .then(res => {
        if (res.status === 200) {
          setLoading(false);
          dispatch(setPost(res.data));
        } else {
          setLoading(false);
        }
      })
      .catch(err => {
        setLoading(false);
        console.log('err', err);
      });
  };

  return (
    <View style={styles.container}>
      <Header onPress={() => dispatch(setLogin(false))} />
      <Text style={styles.feed}>Posts</Text>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <View style={styles.flatlist}>
          <FlatList
            data={posts}
            keyExtractor={item => item?.id}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={styles.postContainer}>
                  <Text style={styles.postTitle}>{item.title}</Text>
                  <Text style={styles.postDesc}>{item.body}</Text>
                  <View style={styles.postNo}>
                    <Text style={styles.postNoText}>Post No {item.id}</Text>
                  </View>
                </View>
              );
            }}
            ListEmptyComponent={
              <View style={styles.empty}>
                <Text style={styles.emptyText}>No Post.</Text>
              </View>
            }
          />
        </View>
      )}

      <Button
        containerStyle={styles.btn}
        textStyle={styles.btnText}
        label="Add new post"
        onPress={() => Navigator.navigate('NewPostScreen')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  empty: {
    marginTop: 50,
  },
  emptyText: {
    fontSize: 20,
  },
  postContainer: {
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 10,
    paddingHorizontal: 10,
    fontFamily: 'AdobeFanHeitiStd-Bold',
  },
  postNo: {
    backgroundColor: '#000',
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 10,
    fontFamily: 'AdobeFanHeitiStd-Bold',
  },
  postNoText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'AdobeFanHeitiStd-Bold',
  },
  feed: {
    marginVertical: 10,
    textAlign: 'center',
    fontFamily: 'AdobeFanHeitiStd-Bold',
  },
  btn: {
    width: '100%',
    paddingVertical: 20,
  },
  btnText: {
    fontSize: 16,
    fontFamily: 'AdobeFanHeitiStd-Bold',
  },
  postDesc: {
    paddingHorizontal: 10,
    textAlign: 'justify',
    fontFamily: 'AdobeFanHeitiStd-Bold',
  },
  flatlist: {
    flex: 1,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
