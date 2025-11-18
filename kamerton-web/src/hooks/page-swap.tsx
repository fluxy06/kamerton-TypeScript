import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PageTransitionWrapperProps {
  children: ReactNode;
  locationKey: string;
}

export const PageTransitionWrapper: React.FC<PageTransitionWrapperProps> = ({ children, locationKey }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={locationKey}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.98 }}
        transition={{
          duration: 0.5,
          ease: "easeOut"
        }}
        style={{
          width: "100%",
          willChange: "opacity, transform",
          transform: "translateZ(0)"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
