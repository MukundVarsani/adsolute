
var player = videojs('content_video', {
  controls: true
});
const p3 = document.querySelector(".p3");
var hide = document.getElementsByClassName('target')[0];
var size = document.getElementsByTagName('div')[2];
var closeBtn = document.getElementsByTagName('button')[0];
var url
var check = document.getElementsByClassName('video')[0];
closeBtn.addEventListener('click' , ()=>{
  hide.style.display = "none";
  
})

window.addEventListener("scroll", function () {
  console.log(check);
    const rect = p3.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.6) {
        hide.classList.remove("video-container");
        hide.classList.add("video");
        size.classList.add('v');
      
      }else{
        hide.classList.add("video-container");
        hide.classList.remove("video");
        size.classList.remove('v');
      }

    }
);
url = 'http://securepubads.g.doubleclick.net/gampad/ads?sz=640x480&' +
'iu=/124319096/external/ad_rule_samples&ciu_szs=300x50&ad_rule=1&' +
'impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&' +
'cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&' +
'vid=short_onecue&correlator='

var options = {
  id: 'content_video',
  adTagUrl: url
};


player.ima(options);
var initAdDisplayContainer = function () {
  player.ima.initializeAdDisplayContainer();
  wrapperDiv.removeEventListener(startEvent, initAdDisplayContainer);
}

var startEvent = 'click';

// var wrapperDiv = document.getElementById('content_video');
// wrapperDiv.addEventListener(startEvent, initAdDisplayContainer);

