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

  today = window.prompt("本日の時間をxx:xxで入力してください", "");
  const ms2 = today.split(':');
  if (ms2.length == 2) {
    const nt2 = nt - (Number(ms2[0]) * 60 + Number(ms2[1]));
    const t2 = (kinm - 1) * 8 * 60;
    if (t2 < nt2) {
      alert('前日時点で' + (nt2 - t2) + '分、余裕があります');
    } else {
      alert('前日時点で' + (t2 - nt2) + '分、マイナスです');
    }
  }
})()
