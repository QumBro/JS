let timerId = setTimeout(function tick() {
    if (timerId <= 5) {
        alert(`Прошло: ${timerId} сек`);
        timerId = setTimeout(tick, 1000);
    } else {
        clearTimeout(timerId);
    }
}, 1000);