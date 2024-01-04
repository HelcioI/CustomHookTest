import { Modal } from "react-native";
import Button from "../../components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../store/modalSlice";
import { RootState } from "../../store/store";

const GlobalModal = () => {
  const dispatch = useDispatch()
  const {isOpen} = useSelector((state : RootState) => state.modalSlice);

  console.log('render GlobalModal')

  return (
    <>
      <Button onPress={() => dispatch(openModal())} label="Open GlobalModal"/>

      <Modal 
        presentationStyle="pageSheet"
        style={{backgroundColor: 'red'}}
        animationType="slide"
        visible={isOpen}
        onRequestClose={() => dispatch(closeModal())}
      >
        <Button onPress={() => dispatch(closeModal())} label="Close GlobalModal"/>
      </Modal>
    </>
  )
};

export default GlobalModal