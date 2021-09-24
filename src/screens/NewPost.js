import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

//Components
import {Header, Button, Input} from '../components';

//Services
import {uploadPost} from '../services/PostServices';

//Utils
import {Navigator} from '../utils';

//Redux
import {useDispatch, useSelector} from 'react-redux';
import {setPost} from '../store/action';

const NewPost = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(false);
  const [description, setDescription] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postReducer.posts);

  const publishPost = () => {
    if (!title) return;
    if (!description) return;
    setLoading(true);
    uploadPost({
      title,
      body: description,
      userId: 1,
    })
      .then(res => {
        if (res.status === 201) {
          let ab = posts.push(res.data);
          dispatch(setPost([res.data]));
          setLoading(false);
          Navigator.navigate('HomeScreen');
          setTitle('');
          setDescription('');
        }
      })
      .catch(err => {
        console.log('err', err);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Header
        onPress={() => Navigator.goBack()}
        isIcon={false}
        rightIcon={true}
        title="New Post"
      />
      <View style={styles.inputWrapper}>
        <Input
          value={title}
          onChangeText={e => setTitle(e)}
          styling={styles.inputContainer}
          inputStyling={styles.input}
          placeholder="Title"
          isLeftIcon={false}
        />
        <Input
          value={description}
          onChangeText={e => setDescription(e)}
          styling={styles.inputContainer}
          inputStyling={styles.input}
          placeholder="Description"
          isLeftIcon={false}
        />
      </View>
      <Button
        containerStyle={styles.btn}
        loading={loading}
        label="Upload"
        onPress={publishPost}
      />
    </View>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputContainer: {
    borderWidth: 1,
    marginVertical: 10,
    height: 50,
  },
  inputWrapper: {
    width: '100%',
    paddingHorizontal: 10,
    height: '50%',
    justifyContent: 'center',
  },
  input: {
    color: '#000',
  },
  btn: {
    width: '90%',
  },
});
