
$(document).ready(function(){

  // atualiza a lista inicial:
 


});

$( document ).on( "pagecreate", "body", function() {
    $( document ).on( "swipeleft swiperight", "body", function( e ) {
        // We check if there is no open panel on the page because otherwise
        // a swipe to close the left panel would also open the right panel (and v.v.).
        // We do this by checking the data that the framework stores on the page element (panel: open).
        if ( $( ".ui-page-active" ).jqmData( "panel" ) !== "open" ) {
            if ( e.type === "swiperight" ) {
                $( "#outside" ).panel( "open" );
            } 
        }
    });
});

$ .mobile.page.prototype.options.domCache = True;