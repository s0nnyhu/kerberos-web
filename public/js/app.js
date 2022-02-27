function getTaskUrl(task) {
    switch (task) {
        case 'instant-shutdown':
            return window.location.href + 'shutdown/instant';
        case 'shutdown-30':
            return window.location.href + 'shutdown/30';
        case 'shutdown-45':
            return window.location.href + 'shutdown/45';
        case 'kill-firefox':
            return window.location.href + 'kill/firefox';
        case 'reduce-vol-30':
            return window.location.href + 'others/reduce-vol/30';
        case 'mute':
            return window.location.href + 'others/mute';
        case 'unmute':
            return window.location.href + 'others/unmute';
    }
}

function displayTaskResult(event, text, strClass) {
    event.target.nextElementSibling.innerHTML = text;
    event.target.nextElementSibling.classList.add(strClass);
    setTimeout(() => {
        event.target.nextElementSibling.innerHTML = '';
        event.target.nextElementSibling.classList.remove(strClass);
    }, 5000);
}

function performTask(task) {
    let eventSrc = event
    fetch(getTaskUrl(task), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => {
            if (data.status == 'ok') {
                displayTaskResult(eventSrc, 'OK', 'bg-green-400');
            } else {
                displayTaskResult(eventSrc, 'NOK', 'bg-red-400');
            }
        })
        .catch((error) => {
            console.log(error)
            displayTaskResult(eventSrc, 'NOK', 'bg-red-400');
        });
}

