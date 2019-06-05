$(function () {
  var md = new MobileDetect(window.navigator.userAgent);
  switch (md.os()) {
    case 'iOS': viewIosBtn()
      break;
    case 'AndroidOS': viewAndroidBtn()
      break;
    default: 
      viewAndroidBtn()
      viewIosBtn()
      break;
  }
  
  function viewAndroidBtn() {
    $('.android').addClass('-mobile-view')
    $('.apk').addClass('-mobile-view')
  }
  
  function viewIosBtn() {
    $('.ios').addClass('-mobile-view')
  }
})