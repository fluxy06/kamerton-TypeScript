import { AnimatePresence, motion } from "framer-motion";
import '@modal/AlertProp.css'

interface AlertProps {
  show: boolean;
  message: string;
  onClose: () => void;
}

const AlertPopup: React.FC<AlertProps> = ({ show, message, onClose }) => {
  const MotionDiv = motion.div as React.FC<any>;
  
  return (
    <AnimatePresence>
      {show && (
        <MotionDiv
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="alert-popup"
          onClick={onClose}
        >
          {message}
        </MotionDiv>
      )}
    </AnimatePresence>
  );
};

export default AlertPopup;
