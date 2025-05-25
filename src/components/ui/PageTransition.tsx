import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface PageTransitionProps {
  children: ReactNode;
  id: string;
}
export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  id
}) => {
  return <AnimatePresence mode="wait">
      <motion.div key={id} initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -10
    }} transition={{
      duration: 0.3
    }}>
        {children}
      </motion.div>
    </AnimatePresence>;
};