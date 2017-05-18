$.fn.toggle = function( fn, fn2 ) {
    var args = arguments,guid = fn.guid || $.guid++,i=0,
    toggle = function( event ) {
      var lastToggle = ( $._data( this, "lastToggle" + fn.guid ) || 0 ) % i;
      $._data( this, "lastToggle" + fn.guid, lastToggle + 1 );
      event.preventDefault();
      return args[ lastToggle ].apply( this, arguments ) || false;
    };
    toggle.guid = guid;
    while ( i < args.length ) {
      args[ i++ ].guid = guid;
    }
    return this.click( toggle );
  };
$(document).ready(function(e){
$("#newscontrol").toggle(
  function(){
      $("#newsbox01").css("height","0");
      $("#newsbox01").css("margin-top","0");
      $("#newsbox02").css("height","0");
      $("#navlistleft").css("top","-35%");
      $("#up").css("top","-135px");},
  function(){
      $("#newsbox01").css("height","40%");
      $("#newsbox01").css("margin-top","3%");
      $("#newsbox02").css("height","40%");
      $("#navlistleft").css("top","0");
      $("#up").css("top","-55px");},
  function(){
  }
);
})

