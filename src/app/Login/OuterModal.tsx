import { Modal } from "react-native";
import Button from "../../components/Button/Button";

const OuterModal = ({visible, closeModal}) => {

  console.log('render OuterModal')

  return (
    <>
      <Modal 
        presentationStyle="pageSheet"
        style={{backgroundColor: 'red'}}
        animationType="slide"
        visible={visible}
        onRequestClose={closeModal}
      >
        <Button onPress={closeModal} label="Close OuterModal"/>
      </Modal>
    </>
  )
};

export default OuterModal