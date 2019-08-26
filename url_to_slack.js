javascript:(function(){
  const url = '';
  fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    body: JSON.stringify({text: location.href})
  }).then(response => console.log).catch(error => console.error);
})()
