var actual_item = null;
var actual_screen = 'screen-a';

function showMe( element ){
  $( '#proyector' ).fadeIn();
  
  actual_item = element;
  
  var old_screen = actual_screen;
  actual_screen = actual_screen == 'screen-a' ? 'screen-b' : 'screen-a';
  
  $( '#proyector #' + actual_screen ).html( $( element ).html() );
  
  $( '#proyector #' + old_screen ).fadeOut();
  $( '#proyector #' + actual_screen ).fadeIn();
  
  refreshControls();
}

function closeProyector() {
  $( '#proyector' ).fadeOut();
}

function next(){
  var element_to_show = $( actual_item ).next( '.item' );
  
  if( element_to_show.length ) {
    showMe( element_to_show );
  }
}

function previous(){
  var element_to_show = $( actual_item ).prev( '.item' );
  
  if( element_to_show.length ) {
    showMe( element_to_show );
  }
}

function refreshControls() {
  if( $( actual_item ).next( '.item' ).length ) {
    $('#proyector .control#next').fadeIn( 'slow' );
  } else {
    $('#proyector .control#next').fadeOut( 'slow' );
  }
  
  if( $( actual_item ).prev( '.item' ).length ) {
    $('#proyector .control#previous').fadeIn( 'slow' );
  } else {
    $('#proyector .control#previous').fadeOut( 'slow' );
  }
}
