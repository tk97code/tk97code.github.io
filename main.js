const socket = io('https://videochat0101.herokuapp.com/');

$('#div-chat').hide();

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
}

function playStream(idVideoTag, stream) {
    const video = document.getElementById(idVideoTag);
    video.srcObject = stream;
    video.play();
}

// openStream()
// .then(stream => playStream('localStream', stream));

var peer = new Peer(); 

peer.on('open', id => {
    $('#myPeer').append(id)
    $('#btnSignUp').click(() => {
        const username = $('#txtUsername').val();
        socket.emit('REGISTER', { ten: username, peerID: id });
    });
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
