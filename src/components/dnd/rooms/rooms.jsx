//this component uses dummy state to contain and render the 'rooms' for now
import React, {useState, createContext} from 'react'
import RoomCard from '../roomcard/roomcard'
import Dropzone from '../dropzone/dropzone'

//defining the context in which we will use markAsConnected in the components below:
export const RoomContext = createContext({
    markAsConnected: null
})

export default function Rooms() {
    //using disconn and conn as status for each room will tell react which one to render into jitsiframe. this data structure should be able to handle all permutations of our rooms, once the join is brought back. It will involve some minor manipulation on the backend side to pare down the data to an array of the rooms. HALL needs to exist as an owner table-style but NOT as an actual room itself. bad form, evan. will fix, Halls need just an ID and a password and the FK to user id. password passed to each assoc/child room, so is user ID, so is hall ID. then no 'join' likely even necessary, just search rooms by id filter.

    const [roomList, setRoomList] = useState([
        {
            _id: (Math.random()*100).toFixed(0),
            status: 'disconn',
            name: 'Main hall',
            jitsiName: 'epachols-mainhall-aofwoiejrj2',
            description: 'welcome, welcome, can I take your coat?'
        },
        {
            _id: (Math.random()*100).toFixed(0),
            status: 'disconn',
            name: 'Play Room',
            jitsiName: 'epachols-playroom-aof5566ggsdfxvc2',
            description: 'we like to have fun here'
        },
        {
            _id: (Math.random()*100).toFixed(0),
            status: 'disconn',
            name: 'workouts',
            jitsiName: 'epachols-workouts-asdfsdfr32rtbvxbvde',
            description: 'sweat baby sweat'
        },
        {
            _id: (Math.random()*100).toFixed(0),
            status: 'disconn',
            name: 'study hall',
            jitsiName: 'epachols-studyhall-mymu5y34ybnfgb',
            description: 'SHHHHHHHHHH'
        },

    ]);

    //applied styling only for demo purposes.
    const styles = {
        rooms: {
            width: '20%',
            margin: '10px 10px',
            padding: '25px',
            backgroundColor: '#789482'
        },
        connected: {
            display: 'flex',
            justifyContent: 'center',
            width: '70%',
            margin: '10px 10px',
            padding: '25px',
            backgroundColor: '#00a7bd'
        },
        dropbox: {
            backgroundColor: '#d5dfe0',

        }
    }

    //marking a room as connected - filters for the one we are changing, sets its status to connected, concats it back onto the roomlist filtered for the one we changed (switcheroo).
    const markAsConnected = _id => {
        const room = roomList.filter((room, i) => room._id === _id);
        console.log('71', room)
        room[0].status ='conn';
        setRoomList(roomList.filter((room, i)=> room._id !== _id).concat(room[0]))
    }

    // at the begin of the return below, we pass in the context provider wrapper to use the function from above, below. 
    return (

        <RoomContext.Provider value={{markAsConnected}}>

        
        <div style={{display: 'flex', minHeight: '100vh'}}>
            <div style={styles.rooms}>
                <h2>Hallway</h2>
                {roomList
                    .filter((room, i) => room.status === 'disconn')
                    .map((room, i) => (
                        <RoomCard
                            key={room._id.toString()}
                            id={room._id}
                            name={room.name}
                            jitsiName={room.jitsiName}
                            description={room.description}
                            />
                    ))}
            </div>
        
            
            <div style={styles.connected}>
                {/* the below div takes the place of the 'stack' in the video */}
                <div>
                    <h2>Currently Connected Room</h2>

                    {/* HERE we render a box to actually drop into - this will be the dropzone component. */}

                    <Dropzone>

                       
                        {roomList
                        .filter((room, i) => room.status === 'conn')
                        .map((room, i) => (
                            <RoomCard
                                key={room._id.toString()}
                                id={room._id}
                                name={room.name}
                                jitsiName={room.jitsiName}
                                description={room.description}
                                />
                        ))}
                    </Dropzone>

                    

                </div>
            </div>
        
        </div>
        </RoomContext.Provider>
    )
}
