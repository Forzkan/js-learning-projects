const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const updateMsg = document.querySelector('.update-mssg');
const chatRooms = document.querySelector('.chat-rooms');

// add a new chat
newChatForm.addEventListener('submit', e=>{
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    if(message){
        chatroom.addChat(message)
        .then(()=> newChatForm.reset())
        .catch(err => console.log(err));
    }
});

// update username
newNameForm.addEventListener('submit', e=>{
    e.preventDefault();
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    
    newNameForm.reset();

    // show then hide the update message.
    updateMsg.innerText = `
        Your name was updated to ${newName}
    `;

     setTimeout(e=> {
        updateMsg.innerText = "";
     }, 3000);
});

chatRooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        chatUI.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats(data => chatUI.render(data));
    }
})

const username = localStorage.getItem('username') ? localStorage.getItem('username') : 'unknown';

// class instances
const chatroom = new Chatroom('general', username);
const chatUI = new ChatUI(chatList);

// get the chats and render
chatroom.getChats(data => chatUI.render(data));


 