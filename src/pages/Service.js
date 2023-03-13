import React from 'react'
import BlogHome from '../components/home/BlogHome'
import { Helmet } from 'react-helmet';
import {motion} from 'framer-motion'

const Service = () => {
  return (

    <motion.div  initial={{opacity:0, x: 100 }}
    animate={{ opacity:1, x: 0 }}
    exit={{ opacity:0, x: 100}}
    transition={{ duration: 1 }}>
       <Helmet>
              
              <title>Services -  Way WeDesign</title>
              <meta name="description" content="Service" />
</Helmet>
        <BlogHome/>
    </motion.div>
  )
}

export default Service