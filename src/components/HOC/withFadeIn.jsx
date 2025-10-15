import React from 'react';
import { motion } from 'framer-motion';

const withFadeIn = (WrappedComponent) => {
  const WithFadeIn = (props) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <WrappedComponent {...props} />
    </motion.div>
  );

  // Assign a display name for easier debugging
  const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithFadeIn.displayName = `WithFadeIn(${wrappedComponentName})`;

  return WithFadeIn;
};

export default withFadeIn;
