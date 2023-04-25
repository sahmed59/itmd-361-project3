function init(){
  //alert('it works');
  var el=document.getElementById('canvas');
  var myLocation=new google.maps.LatLng(41.83489913068813, -87.62702440961152);
  var mapOptions={
    center: myLocation,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    mapTypeControlOptions:{
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap=new google.maps.Map(el, mapOptions);
  
  //Stuart Building
  var stuart=new google.maps.LatLng(41.83877206514686, -87.62735995067175);
  var markerStuart=new google.maps.Marker({
    position:stuart,
    map:myMap,
    //animation: google.maps.Animation.BOUNCE,
    icon:'media/localization-icon.png'
  });
  
  var contentStringStuart='<h1>Illinois Institute of Technology</h1><h2>Stuart Building</h2><p>Stuart Building was designed by Myron Goldsmith, a student of Mies van der Rohe, and it was built in 1971. Stuart Building has 9 classrooms, 3 computer labs, and 1 auditorium.</p>';
  var infowindowStuart=new google.maps.InfoWindow({
    content:contentStringStuart
  });
  
  google.maps.event.addListener(markerStuart, 'click', function() {
    infowindowStuart.open(myMap, markerStuart);
  });
 
  
  
  //Rettaliatta Engineering Center
  var ret=new google.maps.LatLng(41.837077473970034, -87.62701662791078);
  var markerRet=new google.maps.Marker({
    position:ret,
    map:myMap,
    icon:'media/localization-icon.png'
  });
  
  var contentStringRet='<h1>Illinois Institute of Technology</h1><h2>Rettaliatta Engineering Center</h2><p>John T. Rettaliatta Engineering Center, fromerly Engineering 1, was designed by Myron Goldsmith, a student of Mies van der Rohe, and it was built in 1966. Rettaliatta Engineering Center has 16 classrooms, and 1 auditorium.</p>';
  var infowindowRet=new google.maps.InfoWindow({
    content:contentStringRet
  });
  
  google.maps.event.addListener(markerRet, 'click', function() {
    infowindowRet.open(myMap, markerRet);
  });
  
  //S. R. Crown Hall
  var crown=new google.maps.LatLng(41.8332591886587, -87.62706084087121);
  
  
  var markerCrown=new google.maps.Marker({
    position:crown,
    map:myMap,
    icon:'media/localization-icon.png'
  });
  
  var contentStringCrown='<h1>Illinois Institute of Technology</h1><h2>S. R. Crown Hall</h2><p>S. R. Crown Hall was designed by Mies van der Rohe and built in 1950. Crown Hall is considered one of the most architecturally significant buildings of the 20th Century Modernist movement.</p>';
  var infowindowCrown=new google.maps.InfoWindow({
    content:contentStringCrown
  });
  
  google.maps.event.addListener(markerCrown, 'click', function() {
    infowindowCrown.open(myMap, markerCrown);
  });
  
  //Pritzker Science Center
  var pritzker=new google.maps.LatLng(41.83807183872298, -87.6269836671619);
  
  
  var markerPritzker=new google.maps.Marker({
    position:pritzker,
    map:myMap,
    icon:'media/localization-icon.png'
  });
  
  var contentStringPritzker='<h1>Illinois Institute of Technology</h1><h2>Pritzker Science Center</h2><p>Robert A. Pritzker Science Center, formerly Life Sciences Building, was designed by Myron Goldsmith, a student of Mies van der Rohe, and it was built in 1966. Life Sciences has 6 classrooms and 1 auditorium.</p>';
  var infowindowPritzker=new google.maps.InfoWindow({
    content:contentStringPritzker
  });
  
  google.maps.event.addListener(markerPritzker, 'click', function() {
    infowindowPritzker.open(myMap, markerPritzker);
  });
  
  //Perlstein Hall
  var perlstein=new google.maps.LatLng(41.83523484691152, -87.62691710321819);
  
  
  var markerPerlstein=new google.maps.Marker({
    position:perlstein,
    map:myMap,
    icon:'media/localization-icon.png'
  });
  
  var contentStringPerlstein='<h1>Illinois Institute of Technology</h1><h2>Perlstein Hall</h2><p>Perlstein Hall was designed by Mies van der Rohe and built in 1945. Perlstein Hall has 2 classrooms and 1 auditorium.</p>';
  var infowindowPerlstein=new google.maps.InfoWindow({
    content:contentStringPerlstein
  });
  
  google.maps.event.addListener(markerPerlstein, 'click', function() {
    infowindowPerlstein.open(myMap, markerPerlstein);
  });
  
  //Siegel Hall
  var siegel=new google.maps.LatLng(41.834345461539606, -87.62756572290296);
  
  
  var markerSiegel=new google.maps.Marker({
    position:siegel,
    map:myMap,
    icon:'media/localization-icon.png'
  });
  
  var contentStringSiegel='<h1>Illinois Institute of Technology</h1><h2>Siegel Hall</h2><p>Siegel Hall was designed by Mies van der Rohe and built in 1956. Siegel Hall has 3 classrooms, 2 computer labs, and 1 auditorium.</p>';
  var infowindowSiegel=new google.maps.InfoWindow({
    content:contentStringSiegel
  });
  
  google.maps.event.addListener(markerSiegel, 'click', function() {
    infowindowSiegel.open(myMap, markerSiegel);
  });
  
  //Wishnick Hall
  var wishnick=new google.maps.LatLng(41.835175907944475, -87.62763224618843);
  
  
  var markerWishnick=new google.maps.Marker({
    position:wishnick,
    map:myMap,
    icon:'media/localization-icon.png'
  });
  
  var contentStringWishnick='<h1>Illinois Institute of Technology</h1><h2>Wishnick Hall</h2><p>Wishnick Hall was designed by Mies van der Rohe and built in 1945. Wishnick Hall has 4 classrooms and 1 auditorium.</p>';
  var infowindowWishnick=new google.maps.InfoWindow({
    content:contentStringWishnick
  });
  
  google.maps.event.addListener(markerWishnick, 'click' , function() {
    infowindowWishnick.open(myMap, markerWishnick);
  });
  
  
  
}

google.maps.event.addDomListener(window, 'load', init);
