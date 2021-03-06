const socket = io('https://videochat0101.herokuapp.com/');

$('#div-chat').hide();

let customConfig;

$.ajax({
    url: "https://service.xirsys.com/ice",
    data: {
        ident: "tk97code",
        secret: "5d409206-7f8b-11ea-9280-0242ac110004",
        domain: "tk97code.github.io",
        application: "default",
        room: "default",
        secure: 1
    },
    success: function(data, status) {
        customConfig = data.d;
        console.log(customConfig);
    },
    asyn: false
});

socket.on('ONLINE_LIST', arrUserInfo => {
    $('#div-chat').show('slow');
    $('#div-rigister').fadeOut('slow');

    arrUserInfo.forEach(user => {
        const { ten, peerID } = user;
        $('#listUser').append(
            `<div id="${peerID}"><li id="${peerID}">${ten}</li><button id="${peerID}">Call</button></div>`
        );
    });

    socket.on('HAVE_NEW_USER', user => {
        const { ten, peerID } = user;
        $('#listUser').append(
            `<div id="${peerID}"><li id="${peerID}">${ten}</li><button id="${peerID}">Call</button></div>`
        );
    });

    socket.on('SOMEONE_DISCONNECT', peerID => {
        $(`#${peerID}`).fadeOut('slow', function() {
            $(this).remove();
        });
        $('#remoteStream').remove();
        $('#remoteCam').append('<video id="remoteStream" width="300px" controls></video>');
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

const peer = new Peer({
    key: 'peerjs',
    host: 'newpeersever.herokuapp.com',
    secure: true,
    port: 443,
    config: customConfig
});

peer.on('open', id => {
    $('#btnSignUp').click(() => {
        var checkName = document.getElementById('txtUsername').value;
        if (checkName.length == 1 || checkName.length == 2 || checkName.length == 3) {
            alert('The name must be at least 4 characters');
        } else if (checkName.length == 0) {
            alert('Please enter a name');
        } else {
            const username = $('#txtUsername').val();
            socket.emit('REGISTER', { ten: username, peerID: id });
        }
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

$('#listUser').on('click', 'button', function() {
    const id = $('button').attr('id');
    openStream()
        .then(stream => {
            playStream('localStream', stream);
            const call = peer.call(id, stream);
            call.on('stream', remoteStream => playStream('remoteStream', remoteStream));
            console.log('called');
        });
});