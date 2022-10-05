import './App.css';
import {
  AccountCircleRounded,
  AssignmentTurnedInRounded,
  AttachMoneyRounded,
  BarChartRounded,
  ColorLensRounded,
  DashboardRounded,
  SettingsRemoteRounded,
  TocRounded,
} from '@mui/icons-material';
import { Item } from './components/Item';
import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  const sideContainerVariantes = {
    true: {
      width: '15rem',
    },
    false: {
      transition: {
        delay: 0.6,
      },
    },
  };

  const sidebarVariants = {
    true: {},
    false: {
      width: '3rem',
      transition: {
        delay: 0.4,
      },
    },
  };

  const profileVariants = {
    true: {
      alignSelf: 'center',
      width: '4rem',
    },
    false: {
      alignSelf: 'flex-start',
      marginTop: '2rem',
      width: '3rem',
    },
  };

  return (
    <div className='App'>
      <motion.div
        data-Open={open}
        variants={sideContainerVariantes}
        initial={`${open}`}
        animate={`${open}`}
        className='sidebar_container'>
        {/** Sidebar */}
        <motion.div
          className='sidebar'
          initial={`${open}`}
          animate={`${open}`}
          variants={sidebarVariants}>
          {/** Icons */}
          <motion.div
            whileHover={{
              scale: 1.2,
              rotate: 180,
              backgroundColor: 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(3.5px)',
              webkitBackdropFilter: 'blur(3.5px)',
              border: '1px solid rgba(255,255,255,0.18)',
              transition: {
                delay: 0.2,
                duration: 0.4,
              },
            }}
            onClick={handleToggle}
            className='lines_icon'>
            <TocRounded />
          </motion.div>

          {/** Profile */}
          <motion.div
            className='profile'
            initial={`${open}`}
            animate={`${open}`}
            variants={profileVariants}
            transition={{ duration: 0.4 }}
            whileHover={{
              background: 'rgba( 255, 255, 255, 0.3 )',
              boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              backdropFilter: 'blur( 5.5px )',
              webkitBackdropFilter: 'blur( 5.5px )',
              border: '1px solid rgba( 255, 255, 255, 0.18 )',
              cursor: 'pointer',
            }}>
            <img
              src='https://ae01.alicdn.com/kf/H5be6a0fa5f584a8a8420da2a7d4bc809r/RBRARE-Polaroid-Men-s-Goggle-Driving-Sunglasses-Men-Classic-Low-Profile-Sun-Glasses-For-Men-High.jpg'
              alt='profile_img'
            />
          </motion.div>

          {/** Groups */}
          <div className='groups'>
            <div className='group'>
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}>
                ANALYTICS
              </motion.h3>
              <Item icon={<DashboardRounded />} name='Dashboard' />
              <Item icon={<BarChartRounded />} name='Performance' />
            </div>

            <div className='group'>
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}>
                CONTENT
              </motion.h3>
              <Item icon={<AttachMoneyRounded />} name='Sales' />
              <Item icon={<AssignmentTurnedInRounded />} name='Checklist' />
              <Item icon={<AccountCircleRounded />} name='Customers' />
            </div>

            <div className='group'>
              <motion.h3
                animate={{ opacity: open ? 1 : 0, height: open ? 'auto' : 0 }}>
                CUSTOMIZATION
              </motion.h3>
              <Item icon={<SettingsRemoteRounded />} name='Segments' />
              <Item icon={<ColorLensRounded />} name='Themems' />
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className='body_container'></div>
    </div>
  );
}

export default App;
