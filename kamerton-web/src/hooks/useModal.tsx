import type { ReactNode } from "react";
import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";

interface UseModalWithAnimationOptions {
  children: ReactNode;
}

export const useModalWithAnimation = ({ children }: UseModalWithAnimationOptions) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  const Modal = isOpen
    ? createPortal(
        <AnimatePresence>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
            }}
          >
            <div
              style={{ width: '100%', height: '100%' }}
              onClick={closeModal}
            />
          </motion.div>

          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1001,
            }}
          >
            <div
            className="modalFormHook"
              style={{
                position: 'relative',
                background: '#fff',
               padding: '20px',
                borderRadius: '20px',
                maxWidth: '440px',
                width: 'clamp(200px, 90vw, 440px)',
                // aspectRatio: '440 / 540',
                boxSizing: 'border-box',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }}
            >
              {children}
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              position: 'fixed',
              top: '16px',
              right: '16px',
              zIndex: 1002,
            }}
          >
            <button
              type="button"
              onClick={closeModal}
              style={{
                background: 'transparent',
                border: 'none',
                fontSize: '50px',
                fontWeight: 100,
                cursor: 'pointer',
                lineHeight: 1,
                color: '#fff',
              }}
              aria-label="Close modal"
            >
              ×
            </button>
          </motion.div>
        </AnimatePresence>,
        document.body
      )
    : null;

  return { isOpen, openModal, closeModal, Modal };
};
