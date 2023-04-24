setInterval (function () {
    var time = new Date ()
    h = time.getHours ()
    m = time.getMinutes ()
    s = time.getSeconds ()
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    hours.innerHTML = h + ":"
    minutes.innerHTML = m + ":"
    seconds.innerHTML = s;
    newformat = h >=12 ? 'PM' : 'AM'
    h = h % 12;
    h = h ? h : 12;
    document.getElementById('ampm').innerHTML = newformat;
}, 1000)