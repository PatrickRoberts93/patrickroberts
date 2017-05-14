$( document ).ready(function() {

  /*********Random Color Theme - Color values are in main.scss*********/

  var colors = Array('var(--blue)','var(--green)','var(--orange)','var(--red)');
  var color = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.setProperty('--theme-color', color);

  /********************************************************************/

});
