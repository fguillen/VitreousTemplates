function activateLightbox(){
  $('.element a').lightBox({
    imageLoading:  assets + '/jquery-lightbox/images/lightbox-ico-loading.gif',
    imageBtnPrev:  assets + '/jquery-lightbox/images/lightbox-btn-prev.gif',
    imageBtnNext:  assets + '/jquery-lightbox/images/lightbox-btn-next.gif',
    imageBtnClose: assets + '/jquery-lightbox/images/lightbox-btn-close.gif',
    imageBlank:    assets + '/jquery-lightbox/images/lightbox-blank.gif'
  });
}

function latticeSize(){
  lattice_columns = Math.ceil( $( '.element' ).length / lattice_rows );
  
  lattice_width = ( lattice_columns * $( '.element' ).width() );
  lattice_height = ( lattice_rows * $( '.element' ).height() );
  
  $('#lattice').css( 'width', lattice_width + 'px' );
  $('#lattice').css( 'height', lattice_height + 'px' );
}

function loadImages(){
  var images = $('.element img').sort( function(){ return ( Math.round( Math.random() * 100 ) ) } );
  
  for( var i = 0; i < images.length; i++ ) {
    var img = new Image();
    img.src = $( images[i] ).attr( 'src' ).replace( /#/, '' );
    
    ( function() {
      var id = $( images[i] ).attr( 'id' ).replace( 'image_', '' );
      var src = img.src;
      
      $( img ).load( function() {
        $('#element_' + id + ' img').attr( 'src', src );
        setTimeout( function() { $('#element_' + id + ' img').fadeIn( 'slow' ); }, 2000 );
      });            
    })();
  }
}

$( function(){
  latticeSize();
  loadImages();

  $( '#content' ).travelling({
    max_velocity: 4,
    inactive_zone: 100,
    fps: 20
  });
  
  activateLightbox();
});