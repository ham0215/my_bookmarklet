javascript:(function(){
  const kinm = Number($($('.info-contents tr')[0]).children('td').text());
  const sum = $($('.jbc-table-footer td')[3]).text();
  const ms = sum.split(':');
  const nt = Number(ms[0]) * 60 + Number(ms[1]);
  const t = kinm * 8 * 60;
  if (t < nt) {
    alert((nt - t) + '分、余裕があります');
  } else {
    alert((t - nt) + '分、マイナスです');
  }

  today = $('.jbc-table-bordered td:contains("勤務中")').next().text();
  const ms2 = today.split(':');
  if (ms2.length == 2) {
    const nt2 = nt - (Number(ms2[0]) * 60 + Number(ms2[1]));
    const t2 = (kinm - 1) * 8 * 60;
    if (t2 < nt2) {
      const minutes = nt2 - t2;
      if (minutes >= 60) {
        alert('前日時点で' + (Math.round(minutes / 60, 1)) + 'h、余裕があります');
      } else {
        alert('前日時点で' + (nt2 - t2) + '分、余裕があります');
      }
    } else {
      alert('前日時点で' + (t2 - nt2) + '分、マイナスです');
    }
  }
})()
