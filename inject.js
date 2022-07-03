(function () {
  const GetAndCleanShit = (getBy, typeOfShit) => {
    if (getBy === 'id') {
      const shitToRemove = document.getElementById(typeOfShit);
      if (shitToRemove) {
        shitToRemove.remove();
      }
    } else if (getBy === 'className') {
      const shitsToRemove = document.getElementsByClassName(typeOfShit);
      if (shitsToRemove.length > 0) {
        shitsToRemove.forEach((shiit) => {
          shiit.remove();
        });
      } else if (getBy === 'lastIframe') {
        const shitToRemove = document.getElementsByTagName('iframe');
        if (shitToRemove) {
          shitToRemove[shitToRemove.length - 1].remove();
        }
      }
    }
  };

  const appContainer = document.getElementById('app');
  appContainer.style.backgroundColor = 'rgba(0,0,0,0.5)';

  // const el = document.getElementsByTagName('iframe');
  // if (el.length > 1) {
  //   el[el.length - 1].remove();
  // }

  const notif = document.getElementById('onesignal-slidedown-dialog');
  if (notif) {
    notif.remove();
  }

  const scripts = document.scripts;
  const arrScript = [...scripts];

  for (let i = 0; i < arrScript.length; i++) {
    if (
      arrScript[i].src ===
      'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5da59293a14f83e9'
    ) {
      arrScript[i].remove();
    } else if (
      arrScript[i].src === 'https://www.google-analytics.com/analytics.js'
    ) {
      arrScript[i].remove();
    } else if (
      arrScript[i].src ===
      'https://s7.addthis.com/static/layers.fa6cd1947ce26e890d3d.js'
    ) {
      arrScript[i].remove();
    } else if (
      arrScript[i].src === 'https://curtlychit.com/fvkGRhTy6s99UV/29270'
    ) {
      arrScript[i].remove();
    } else if (
      arrScript[i].src ===
      'https://static.zdassets.com/ekr/snippet.js?key=77196c29-9d2b-4414-bc79-7543a13d07e3'
    ) {
      arrScript[i].remove();
    } else if (
      arrScript[i].src ===
      'https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.8/postscribe.min.js'
    ) {
      arrScript[i].remove();
    }
  }

  GetAndCleanShit('className', 'modal-backdrop');
  GetAndCleanShit('id', 'onesignal-slidedown-container');
  GetAndCleanShit('id', '_atssh');
  GetAndCleanShit('id', 'modalshare');
  GetAndCleanShit('id', 'gift-top');
  GetAndCleanShit('id', 'mask-player');
  GetAndCleanShit('id', 'watch-player');
  GetAndCleanShit('id', 'fb-root');
  GetAndCleanShit('id', 'overlay-center');
  GetAndCleanShit('id', 'overlay-container');
})();
