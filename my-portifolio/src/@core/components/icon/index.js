// // ** Icon Imports
// import { Icon } from '@iconify/react'

// const IconifyIcon = ({ icon, ...rest }) => {
//   return <Icon icon={icon} fontSize='1.375rem' {...rest} />
// }

// export default IconifyIcon
import React from 'react';
import Icon from '@mui/material/Icon';

const CustomIcon = ({ icon, ...props }) => {
  return <Icon {...props}>{icon}</Icon>;
};

export default CustomIcon;
