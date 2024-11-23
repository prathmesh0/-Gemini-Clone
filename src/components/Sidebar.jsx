import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div>
      <div>
        <img src={assets.menu_icon} alt="Menu Icon" />
        <div>
          <img src={assets.plus_icon} alt="Add Icon" />
          <p>New Chats</p>
        </div>
        <div>
          <p>Recent</p>
          <div>
            <img src={assets.message_icon} alt="Message Icon" />
            <p>What is react...</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
