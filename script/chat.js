let messageInput, messagesValue;
const getButtonChat = () => {
    const btnSend = document.querySelector("#btnSend");
    messageInput = document.querySelector("#message-input");
    messagesValue = document.querySelector("#messages");
    btnSend.addEventListener("click", handleSubmit);
    messageInput.addEventListener("keyup", handleSendMessage);
    showMessage();
};

const handleSendMessage = (e) => {
    if (e.keyCode == 13) {
        handleSubmit();
    }
};

const handleSubmit = () => {
    let data = {
        message: messageInput.value,
        sender: nama,
    };
    firebaseDatabase.ref(`messages/${nama_kelompok}`).push(data, (err) => {
        if (err) {
            console.error(err);
        }
    });
    messageInput.value = "";
};

const showMessage = () => {
    messagesValue.innerHTML = "";
    let idMessage = 0;
    firebaseDatabase.ref(`messages/${nama_kelompok}`).on("child_added", (snapshot) => {
        const data = snapshot.val();
        let dummyMessage = "";
        idMessage++;
        if (nama === data.sender) {
            dummyMessage += `
                <div class="row" id="chat${idMessage}">
                    <div class="right">
                        <div class="teal chat">${data.message}</div>
                    </div>
                </div>
                `;
        }else{
            dummyMessage += `
            <div class="row" id="chat${idMessage}">
                <div class="left">
                    <div class="sender">${data.sender}</div>
                    <div class="grey chat">${data.message}</div>
                </div>
            </div>
            `;
        }
        messagesValue.innerHTML += dummyMessage;
        document.getElementById(`chat${idMessage}`).scrollIntoView(true);
    });
};

export { getButtonChat };
