import { motion } from 'framer-motion'
import styled from 'styled-components'
import PlayButtonIcon from '../../assets/playButtonIcon'
import PauseButtonIcon from '../../assets/pauseButtonIcon'
import Progressbar from './_progressbar'

const Controls = ({ className, isPlaying, progress, handleClick }) => {
  const container = {
    play: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      transition: {
        duration: .5,
      }
    },
    pause: {
      backgroundColor: 'rgba(0, 0, 0, .3)',
      transition: {
        duration: .5,
      }
    }
  }

  const outer = {
    play: {
      opacity: 0,
    },
    hover: {
      scale: 0,
    }
  }

  const inner = {
    play: { opacity: 0 },
    hover: {
      opacity: 1,
      scale: 2,
    }
  }

  const button = {
    pause: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: {
        staggerChildren: .15
      }
    }
  }

  // Whats this??
  const icon = {
    play: { opacity: 0 },
    hover: { opacity: 1 }
  }

  return (
    <motion.div
      className={className}
      animate={ isPlaying ? 'play' : 'pause' }
      variants={container}
    >
      <motion.div
        className='play-button'
        whileHover='hover'
        variants={button}
        animate={isPlaying ? {opacity: 0} : {}}
        initial={{
          opacity: 1,
        }}
      >
        <motion.div
          className='play-button__progression'
          initial={{
            scale: 1,
          }}
          variants={ isPlaying ? outer : {opacity: 0}}
          animate={ isPlaying ? {opacity: 0} : {}}
        >
          <Progressbar percent={progress} />
        </motion.div>

        <motion.div className='play-button__inner'
          initial={{
            opacity: 1,
            x: '-50%',
            y: '-50%'
          }}
          variants={inner}
        />

        <motion.div
          className='play-button__icon'
          onClick={handleClick}
          variants={icon}
        >
          {isPlaying ? (<PauseButtonIcon />) : (<PlayButtonIcon />)}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

const centerContent = `
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`

export default styled(Controls)`
width: 800px;
height: 450px;
position: absolute;
top: 50%;
transform: translateY(-51%);

.play-button {
  ${centerContent}
  cursor: pointer;
  width: 150px;
  height: 150px;

  &__progression {
    height: 100%;
  }

  &__outer {
    ${centerContent}
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;
  }

  &__inner {
    ${centerContent}
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => `${theme.colors.secondary}75`};
    border-radius: 50%;
  }

  &__icon {
    ${centerContent}
    width: 42px;
    height: 42px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;

    svg {
      ${centerContent}
      width: 8px;
      height: 8px;
    }
  }
}
`
