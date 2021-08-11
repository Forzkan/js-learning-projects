// adding new chat documents

// setting up a real time listener to get new chats

// updating the username

// updating the room


class Chatroom {
    constructor(room, username){
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats')
        this.unsubscribe;
    }

    async addChat(message){
        const now = new Date();
        const chat = {
            message,
            username:this.username,
            room:this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };
        // save the chat document to the database.
        const response = await this.chats.add(chat);
        return response;
    }

    getChats(callback){
        this.unsubscribe = this.chats
        .where('room', '==', this.room)
        .orderBy('created_at')
        .onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type === 'added'){
                    callback(change.doc.data());
                }
            });
        });
    }

    updateName(username){
        this.username = username;
        localStorage.setItem('username', username);
    }

    updateRoom(room){
        this.room = room;
        console.log('room updated to:', room);
        
        if(this.unsubscribe){
            this.unsubscribe();
        }
    }
}


/* chatroom.addChat('hello my dudes')
    .then(() => console.log('chat added'))
    .catch(err => console.log(err)); */


/* 
setTimeout(() => {
    chatroom.updateRoom('gaming');
    chatroom.updateName('kalle');
    chatroom.getChats(data => {
        console.log('new message detected, updating ui.', data);
    });
    chatroom.addChat('hello');
}, 3000);
 */