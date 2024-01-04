import { Modal } from "react-native";
import Button from "../../components/Button/Button";
import { useState } from "react";

const InnerModal = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);

  console.log('render InnerModal')

  return (
    <>
      <Button onPress={() => setIsVisible(true)} label="Open InnerModal"/>

      <Modal 
        presentationStyle="pageSheet"
        style={{backgroundColor: 'red'}}
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      >
        <Button onPress={() => setIsVisible(false)} label="Close InnerModal"/>
        {children}
      </Modal>
    </>
  )
};

export default InnerModal