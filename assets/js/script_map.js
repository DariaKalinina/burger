//подключение карты
ymaps.ready(init);
  var myMap;

  function init(){
      myMap = new ymaps.Map("map", {
          center: [59.94, 30.32],
          zoom: 11
      });

      myPlacemark1 = new ymaps.Placemark([59.956841, 30.335315], {
          hintContent: 'Mr Burgers',
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/icons/map-marker.svg',
          iconImageSize: [47, 57],
          iconImageOffset: [-23, -57]
      });

      myPlacemark2 = new ymaps.Placemark([59.935776, 30.325735], {
          hintContent: 'Mr Burgers',
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/icons/map-marker.svg',
          iconImageSize: [47, 57],
          iconImageOffset: [-23, -57]
      });

      myPlacemark3 = new ymaps.Placemark([59.913997, 30.355164], {
          hintContent: 'Mr Burgers',
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'assets/icons/map-marker.svg',
          iconImageSize: [47, 57],
          iconImageOffset: [-23, -57]
      });

      myMap.behaviors.disable('scrollZoom');
      myMap.behaviors.disable('multiTouch');
      myMap.geoObjects.add(myPlacemark1);
      myMap.geoObjects.add(myPlacemark2);
      myMap.geoObjects.add(myPlacemark3);
  }
