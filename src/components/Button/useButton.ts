import { createStyles } from "./styles";

const useButton = ({ isDisable }) => {
  const styles = createStyles({isDisable});
  return { styles }
};

export default useButton;