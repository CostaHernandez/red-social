document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('MessageForm');
    const messageInput = document.getElementById('MessageInput');
    const messageContainer = document.querySelector('.MessageContainer');
    const deleteAllMessagesButton = document.getElementById('CustomDeleteAllMessagesButton');
    const chatList = document.getElementById('chatList');
    const searchInput = document.getElementById('searchInput');

    // Handle form submission to add new messages
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const messageContent = messageInput.value.trim();
        if (messageContent !== '') {
            addMessage('me', messageContent);
            messageInput.value = '';
        }
    });

    // Function to add a new message to the chat
    function addMessage(sender, content) {
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', sender === 'me' ? 'me' : 'you');
        newMessage.innerHTML = `
            <p class="messageContent">${content}</p>
            <div class="messageDetails">
                <div class="messageTime">${getCurrentTime()}</div>
                <i class="fa-solid fa-check"></i>
            </div>
            <div class="messageActions">
                <button class="editButton">Edit</button>
                <button class="deleteButton">Delete</button>
                <button class="favoriteButton">Favorite</button>
            </div>
        `;
        messageContainer.appendChild(newMessage);
        messageContainer.scrollTop = messageContainer.scrollHeight;

        // Add event listeners for the new message actions
        newMessage.querySelector('.editButton').addEventListener('click', editMessage);
        newMessage.querySelector('.deleteButton').addEventListener('click', deleteMessage);
        newMessage.querySelector('.favoriteButton').addEventListener('click', toggleFavorite);
    }

    // Function to get current time in HH:mm format
    function getCurrentTime() {
        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} ${ampm}`;
    }

    // Function to edit a message
    function editMessage(event) {
        const message = event.target.closest('.message');
        const content = message.querySelector('.messageContent').textContent;
        const newContent = prompt('Edit your message:', content);
        if (newContent !== null) {
            message.querySelector('.messageContent').textContent = newContent;
        }
    }

    // Function to delete a message
    function deleteMessage(event) {
        const message = event.target.closest('.message');
        message.remove();
    }

    // Function to toggle favorite status of a message
    function toggleFavorite(event) {
        const message = event.target.closest('.message');
        message.classList.toggle('favorite');
    }

    // Handle deleting all messages
    deleteAllMessagesButton.addEventListener('click', function() {
        messageContainer.innerHTML = '';
    });

    // Filter chats by name based on search input
    searchInput.addEventListener('input', function(event) {
        const searchQuery = event.target.value.trim().toLowerCase();
        Array.from(chatList.children).forEach(function(chat) {
            const groupName = chat.querySelector('.GroupName').textContent.trim().toLowerCase();
            if (groupName.includes(searchQuery)) {
                chat.style.display = 'block';
            } else {
                chat.style.display = 'none';
            }
        });
    });

    // Initial click on the first chat group (for demonstration purposes)
    const firstChatGroup = chatList.querySelector('.group');
    if (firstChatGroup) {
        firstChatGroup.click();
    }
});

    

    //buscar

    document.addEventListener('DOMContentLoaded', function() {
        // Handle form submission
        document.getElementById('CustomMessageForm').addEventListener('submit', function(event) {
            event.preventDefault();
            var messageInput = document.getElementById('CustomMessageInput').value;
            if (messageInput.trim()) {
                addMessage('me', messageInput);
                document.getElementById('CustomMessageInput').value = '';
            }
        });

        function addMessage(sender, content) {
            var messageContainer = document.querySelector('.MessageContainer');
            var newMessage = document.createElement('div');
            newMessage.classList.add('message', sender);
            newMessage.innerHTML = `
                <p class="messageContent">${content}</p>
                <div class="messageDetails">
                    <div class="messageTime">${getCurrentTime()}</div>
                    <i class="fa-solid fa-check"></i>
                </div>
                <div class="messageActions">
                    <button class="editButton">Edit</button>
                    <button class="deleteButton">Delete</button>
                    <button class="favoriteButton">Favorite</button>
                </div>
            `;

            messageContainer.appendChild(newMessage);
            messageContainer.scrollTop = messageContainer.scrollHeight;

            // Add event listeners for the new message
            newMessage.querySelector('.editButton').addEventListener('click', editMessage);
            newMessage.querySelector('.deleteButton').addEventListener('click', deleteMessage);
            newMessage.querySelector('.favoriteButton').addEventListener('click', toggleFavorite);
        }

        function getCurrentTime() {
            var now = new Date();
            var hours = now.getHours();
            var minutes = now.getMinutes();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12;
            minutes = minutes < 10 ? '0'+minutes : minutes;
            return hours + ':' + minutes + ' ' + ampm;
        }

        function editMessage(event) {
            var message = event.target.closest('.message');
            var content = message.querySelector('.messageContent').textContent;
            var newContent = prompt('Edit your message:', content);
            if (newContent !== null) {
                message.querySelector('.messageContent').textContent = newContent;
            }
        }

        function deleteMessage(event) {
            var message = event.target.closest('.message');
            message.remove();
        }

        function toggleFavorite(event) {
            var message = event.target.closest('.message');
            message.classList.toggle('favorite');
        }

        function deleteAllMessages() {
            var messageContainer = document.querySelector('.MessageContainer');
            messageContainer.innerHTML = '';
        }

        document.getElementById('CustomDeleteAllMessagesButton').addEventListener('click', deleteAllMessages);

        // Filtrar chats por nombre
        document.getElementById('searchInput').addEventListener('input', function(event) {
            var searchQuery = event.target.value.toLowerCase();
            var chatGroups = document.querySelectorAll('#chatList .group');
            chatGroups.forEach(function(chat) {
                var chatName = chat.querySelector('.GroupName').textContent.toLowerCase();
                if (chatName.includes(searchQuery)) {
                    chat.style.display = '';
                } else {
                    chat.style.display = 'none';
                }
            });
        });

        // Initial click on the first chat group
        var chatGroups = document.querySelectorAll('.group');
        if (chatGroups.length > 0) {
            chatGroups[0].click();
        }
    });