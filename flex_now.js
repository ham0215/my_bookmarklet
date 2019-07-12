javascript:(function(){
    const kinm = Number($($('.infotpl tr')[7]).children('td').text());
    const sumIndex = $('.note tr').length - 1;
    const sum = $.trim($($($('.note tr')[sumIndex]).children('td')[4]).text());
    const ms = sum.split(':');
    const nt = Number(ms[0]) * 60 + Number(ms[1]);
    const t = kinm * 8 * 60;
    if (t < nt) {
        alert((nt - t) + '分、余裕があります');
    } else {
        alert((t - nt) + '分、マイナスです');
    }
})()
