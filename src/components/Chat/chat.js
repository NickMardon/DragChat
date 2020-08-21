import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';
import "./index.css"
const chatClient = new StreamChat('xr2dj8myjefh');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiaG9seS1iYW5kLTQifQ.NBCkzsYxwH7MHuOESl0y20CnEBHo9wDqlBL8fRLqvg8';

chatClient.setUser(
  {
       id: 'holy-band-4',
       name: 'Mike',
       image: 'https://scontent-sea1-1.xx.fbcdn.net/v/t31.0-8/461748_3727323625365_1673320337_o.jpg?_nc_cat=110&_nc_sid=ba80b0&_nc_ohc=kYkz1_3i7vYAX-Bv-4A&_nc_ht=scontent-sea1-1.xx&oh=69b6232dc4326e98c56c2f042e8d75b7&oe=5F601122/>'
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
  // add as many custom fields as you'd like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'chat and video?',
});

const Chats = () => (
  <div className="chat">
  <Chat client={chatClient} theme={'messaging light'}>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  </Chat>
  </div>
);

export default Chats;
