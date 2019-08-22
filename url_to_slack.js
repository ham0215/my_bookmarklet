javascript:(function(){
  const url = '';
  const body = JSON.stringify({ payload: { text: "hogehoge" } });
  const method = "POST";
  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  fetch(url, {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);
})()
