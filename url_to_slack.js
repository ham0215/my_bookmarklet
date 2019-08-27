javascript:(function(){
  const url = ''; // TODO: set WebhookURL
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: JSON.stringify({ text: location.href })
  }).then(response => console.log).catch(error => console.error);
})()
