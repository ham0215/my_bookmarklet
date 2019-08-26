javascript:(function(){
  const html = `
    <div>url to slack</div>
    <script type="text/javascript">
        const url = 'https://hooks.slack.com/services/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';
        const body = JSON.stringify({ payload: { text: "hogehoge" } });
        const method = "POST";
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        fetch(url, {method, headers, body}).then((res)=> res.json()).then(console.log).catch(console.error);
    </script>
  `;
  const fhtml = new Blob([html], { type: 'text/html' });

  obj = document.createElement("iframe");
  obj.setAttribute("frameBorder", "1");
  obj.setAttribute("scrolling", "no");
  obj.style.position = "relative";
  obj.style.width = "500px";
  obj.style.height = "500px";
  obj.src = URL.createObjectURL(fhtml);
  document.body.appendChild(obj);
})()
