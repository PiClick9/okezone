var API_KEY;
var aedi;
var interval = setInterval(() => {
  if (!aedi && typeof Aedi !== 'undefined') {
    aedi = new Aedi();
  }
  if (aedi) {
    clearInterval(interval);

    if (navigator.userAgentData) {
      if (navigator.userAgentData.mobile) {
        API_KEY = '779efbd24d5a7e37ce8dc93e7c04d572';
      } else {
        API_KEY = 'b91b1facf3b3a7890177f02ac188f14c';
      }
    } else {
      var filter = 'win16|win32|win64|mac';
      if (navigator.platform) {
        if (0 > filter.indexOf(navigator.platform.toLowerCase())) {
          API_KEY = '779efbd24d5a7e37ce8dc93e7c04d572';
        } else {
          API_KEY = 'b91b1facf3b3a7890177f02ac188f14c';
        }
      }
    }

    var aediWritingTime = document.querySelector('meta[property="article:published_time"]').content;
    var imgSelector = document.querySelectorAll(
      '.img-article > img, .c-detail > p > img, .box-detail > figure > .img, #article-box > p > img, .c-detail figure img, #article-box figure img'
    );
    var captionSelector = null;

    aedi.adOpen(API_KEY, imgSelector, aediWritingTime, captionSelector);
  }
}, 200);
