import React from 'react'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


export default function avatar(props) {
    const initial = props.currentUser[0];
    
    return (
        <div>
            {/* <Avatar icon={<UserOutlined />} />
            <Avatar>U</Avatar>*/}
            {props.currentUser?
            <Avatar size={40}>{initial}</Avatar>:
            <Avatar>U</Avatar>}
            {/* <Avatar size={60}src="https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/461748_3727323625365_1673320337_o.jpg?_nc_cat=110&_nc_sid=ba80b0&_nc_ohc=kYkz1_3i7vYAX-Bv-4A&_nc_ht=scontent-sea1-1.xx&oh=69b6232dc4326e98c56c2f042e8d75b7&oe=5F601122" /> */}
            {/* <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
            <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> */}
        </div>
    )
}
