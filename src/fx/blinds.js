import { motion } from 'framer-motion'
import styled from 'styled-components'
import theme from '../styles/theme'

const Blinds = ({
  className,
  offsetX = '0',
  offsetY = '0',
  height = '100px',
  initialWidth = '0',
  targetWidth = '100%',
  delay = 0,
  color = theme.colors.white,
  reverse,
  asBackground,
}) => {
  // animation starts right or left from parent
  const starts = reverse ? 'right' : 'left'
  // invert offset when animation should reverse
  const sign = reverse ? '-' : ''

  return (
    <motion.div
      className={className}
      initial={
      {
        [starts]: 0,
        x: `${sign}${offsetX}`,
        y: offsetY,
        height: height,
        width: initialWidth,
        zIndex: asBackground ? '-1' : '20',
        backgroundColor: color
      }}
      animate={{
        width: targetWidth === '100%' ? `calc(100% - ${offsetX})` : targetWidth,
        transition: {
          duration: 2,
          delay: delay,
          ease: 'easeOut'
        }
      }}
    />
  )
}

export default styled(Blinds)`
position: absolute;
top: 0;
`
