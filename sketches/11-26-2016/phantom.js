console.log('Loading a web page');

var page = require('webpage').create();
page.viewportSize = { width: 500, height: 500};
page.zoomFactor = 1.0;
var url = 'http://localhost:8000';
page.open(url, function (status) {
  page.render('test.png');
  //page.evaluate(function(){window.noLoop();});
  window.setTimeout(function () {
      for(z = 0; z < 40; z++) {
           page.render('out-' + ("00" +  z).slice(-3) + '.png');
           //page.render('out-' + ("00" + ( 12 + ( 13 - z))).slice(-3) + '.gif');
           page.evaluate(function() { window.draw(); })
           console.log(z);
      }
      phantom.exit();
  } , 5000);
});

