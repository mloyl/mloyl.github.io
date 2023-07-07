
  // Preload images
    function preloadImages() {
      var imageSources = [
        'assets/aasta01.png',
        'assets/aasta02.png',
        'assets/aasta05.png',
        'assets/aasta06.png',
        'assets/aasta07.png',
        'assets/aasta08.png',
        'assets/aasta09.png',
        'assets/someglasses01.JPG',
        'assets/someglasses02.JPG',
        'assets/someglasses03.JPG',
        'assets/someglasses04.JPG',
        'assets/someglasses05.JPG',
        'assets/someglasses06.JPG',
        'assets/tshirt01.jpg',
        'assets/tshirt02.jpg',
        'assets/tshirt03.jpg',
        'assets/tshirt04.jpg',
        'assets/tshirt05.jpg',
        'assets/memeex01.jpg',
        'assets/memeex02.jpg',
        'assets/memeex03.jpg',
        'assets/memeex04.jpg'
      ];

      imageSources.forEach(function(source) {
        var img = new Image();
        img.src = source;
      });
    }