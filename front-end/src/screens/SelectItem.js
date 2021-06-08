import React, {useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Modal,
  Alert,
  Pressable,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Icon,
  Card,
  CardItem,
  Text,
  Body,
  H3,
  H1,
  H2,
  H4,
} from 'native-base';

const items = [
  {
    name: 'Mango',
    info: 'Sweet king fruit.',
    shape: 'Spherical and Conical Bottom',
    color: 'Yellow',
    size: '2-10 inches',
  },
  {
    name: 'Banana',
    info: 'Sweet protein rich fruit.',
    shape: 'Cylindrical structure with a Curve shape',
    color: 'Green or Yellow',
    size: '7-8 inches',
  },
];

function SelectItem({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState({});
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Item</Text>
      <View style={styles.container2}>
        {items.map((i, index) => {
          return (
            <Card key={index} style={styles.cardstyle}>
              <CardItem
                header
                button
                onPress={() => {
                  setModalVisible(true);
                  setName(i);
                }}>
                <Text>{i.name}</Text>
              </CardItem>
            </Card>
          );
        })}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Button
                style={{
                  position: 'absolute',
                  right: 0,
                  top: 0,
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 15,
                }}
                iconLeft
                primary
                onPress={() => setModalVisible(!modalVisible)}>
                <Icon
                  style={{
                    // backgroundColor: 'red',
                    marginRight: 15,
                  }}
                  name="close-sharp"
                />
              </Button>
              <Text style={styles.modalText}>{name.name} Information</Text>
              <View style={styles.infoText}>
                <Text>
                  <H3>Info :</H3> {name.info}
                </Text>
                <Text>
                  <H3>Shape : </H3> {name.shape}
                </Text>
                <Text>
                  <H3>Color : </H3> {name.color}
                </Text>
                <Text>
                  <H3>Size : </H3> {name.size}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignContent: 'space-between',
                  backgroundColor: 'red',
                }}>
                <Button
                  iconRight
                  onPress={() => {
                    setModalVisible(!modalVisible);
                    navigation && navigation.navigate('DrawField');
                  }}>
                  <Text style={{alignSelf: 'center'}}>Try Doodle it!</Text>
                  <Icon
                    style={{
                      marginLeft: -5,
                      marginRight: 10,
                    }}
                    name="arrow-forward"
                  />
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

export default SelectItem;

const styles = StyleSheet.create({
  cardstyle: {
    // width: '100%',
    // height: 300,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  infoText: {
    // flex: 1,
    padding: 20,
    // display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // alignContent: 'center',
  },
  text: {
    // color: 'rgb(59,108,212)',
    // fontSize: 42,
    // fontWeight: '100',
    // textAlign: 'center',
  },
  heading: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    margin: 10,
    padding: 10,
    // textAlign: 'center',
  },
  button: {
    margin: 5,
    alignSelf: 'center',
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
