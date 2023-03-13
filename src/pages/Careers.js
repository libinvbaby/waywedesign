import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Careers = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
    >
      <Helmet>
        <title>Careers - Way WeDesign</title>
        <meta name="description" content="Careers" />
      </Helmet>
      <Breadcrumbs pageurl="careers" subtitle="CAREERS" />
    </motion.div>
  );
};

export default Careers;
