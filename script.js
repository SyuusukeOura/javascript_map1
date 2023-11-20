// JavaScript

var map = L.map('map').setView([33.52277040125248, 130.46915889312515], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


  //複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const whiteIcon = new circleIcon({ iconUrl: 'images/ico.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
    blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' });


  L.marker([33.530073091131605, 130.47303414811546], { icon: whiteIcon }).addTo(map).bindPopup('春日公園');
  L.marker([33.53552283217252, 130.4685127098311], { icon: pinkIcon }).addTo(map).bindPopup('春日駅');
  L.marker([33.511867415603874, 130.45390144805646], { icon: blueIcon }).addTo(map).bindPopup('白水大池公園');

  const circle = L.circle([33.530073091131605, 130.47303414811546], {
    color: 'red', //円の輪郭線の色
    fillColor: '#f03', //円の塗りつぶしの色
    fillOpacity: 0.3, //塗りつぶしの不透明度
    radius: 1000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径1kmの範囲").openPopup();

  // 多角形の表示
const polygon = L.polygon([
    [33.518977778407326, 130.4365017931888],
    [33.527077492343345, 130.4553625786904],
    [33.51628001352016, 130.44805783695767]
  ], {
    color: 'blue',
    fillColor: 'blue',
    fillOpacity: 0.3
  }).addTo(map);

  // クリック位置の緯度経度表示
const popup = L.popup();

function onMapClick(e) {
  popup
    .setLatLng(e.latlng)
    .setContent("ここは" + e.latlng.toString() + "です")
    .openOn(map);
}

map.on('click', onMapClick);
