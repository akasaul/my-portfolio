import {  motion } from 'framer-motion'

const PageProgress = ({width}) => {
  return (
    <motion.div style={{ scaleX: width, transformOrigin: '0%' }} className={`h-[8px] bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] fixed top-0 left-0 w-full z-10 `}>
    </motion.div>
  )
}

export default PageProgress