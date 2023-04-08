import {  motion } from 'framer-motion'

const PageProgress = ({width}) => {
  console.log(width)
  return (
    <motion.div className={`h-2 scale-x-[${width}] right-[${width}] bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] fixed top-0 right-0 left-0 `}>
      
    </motion.div>
  )
}

export default PageProgress