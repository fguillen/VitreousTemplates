var actualImage = 0;
var actualDiv = '#image-even';
var previewDiv = '#image-odd';
var timer;

function renderImage(){
  $('#loading').fadeIn();
  
  if( actualImage >= images.length ) {
    actualImage = 0;
  }
  
  if( actualImage < 0 ) {
    actualImage = images.length - 1;
  }
  
  img = new Image(); 
  img.src = images[actualImage];
  
  $(img).load( function() {
    $( actualDiv ).hide();
    $( actualDiv ).css( 'z-index', '10' );
    $( previewDiv ).css( 'z-index', '9' );
    
    $( actualDiv ).css( 'background', 'url( "' + images[actualImage] + '" ) no-repeat center center fixed');
    $( actualDiv ).fadeIn( 2000 );
    
    $('#loading').fadeOut();
    
    var temDir = actualDiv;
    actualDiv = previewDiv;
    previewDiv = temDir;
  });
}

function nextImage( pause_it ){
  if( pause_it ) pause();
  actualImage++;
  renderImage();
}

function previousImage() {
  pause();
  actualImage--;
  renderImage();
}

function pause() {
  clearInterval( timer );
}

function play() {
  clearInterval( timer );
  nextImage( false );
  timer = setInterval( function() { nextImage( false ); }, 10000 );
}

$(function() {
  actualImage = -1;
  play();
});
