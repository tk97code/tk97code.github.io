const socket = io('https://videochat0101.herokuapp.com/');

$('#div-chat').hide();

let customConfig;

$ajax({
    url: "https://service.xirsys.com/ice",
    data: {
        ident: "tk97code",
        secret: "5d409206-7f8b-11ea-9280-0242ac110004",
        domain: "tk97code.github.io",
        application: "default",
        room: "default",
        secure: 1
    },
    success: function (data, status) {
        customConfig = data.d;
        console.log(customConfig);
    },
    asyn: false
});

socket.on('ONLINE_LIST', arrUserInfo => {
    $('#div-chat').show();
    $('#div-rigister').hide();

    arrUserInfo.forEach(user => {
        const { ten, peerID } = user;
        $('#listUser').append(`<li id="${peerID}">${ten}</li>`);
    });

    socket.on('HAVE_NEW_USER', user => {
        const { ten, peerID } = user;
        $('#listUser').append(`<li id="${peerID}">${ten}</li>`);
    });

    socket.on('SOMEONE_DISCONNECT', peerID => {
        $(`#${peerID}`).remove();
    });
});

socket.on('RIGISTER_FAIL', () => alert('Plaese choose other username'));

function openStream() {
    const config = { audio: true, video: true };
    return navigator.mediaDevices.getUserMedia(config);
    // var constrains = {
    //     video: { facingmode: 'user'}
    // }
    // return navigator.mediaDevices.getUserMedia(constrains);
}

function playStream(idVideoTag, stream) {
    const video = document.getElementById(idVideoTag);
    video.srcObject = stream;
    video.play();
}

// openStream()
// .then(stream => playStream('localStream', stream));

const peer = new Peer({ 
    key: 'peerjs', 
    host: 'newpeersever.herokuapp.com', 
    secure: true, 
    port: 443, 
    config: customConfig 
}); 

peer.on('open', id => {
    $('#btnSignUp').click(() => {
        const username = $('#txtUsername').val();
        socket.emit('REGISTER', { ten: username, peerID: id });
    });
    $('#myPeer').append(id)
});

// Caller
$('#btnCall').click(() => {
    const id = $('#remoteID').val();
    openStream()
    .then(stream => {
        playStream('localStream', stream);
        const call = peer.call(id, stream);
        call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
    });
});


// Answer
peer.on('call', call => {
    openStream()
    .then(stream => {
        call.answer(stream);
        playStream('localStream', stream);
        call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
    });
});

$('#listUser').on('click', 'li', function() {
    const id = $(this).attr('id');
    openStream()
    .then(stream => {
        playStream('localStream', stream);
        const call = peer.call(id, stream);
        call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
    });
});
