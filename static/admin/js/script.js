$( document ).ready(function() {
  $('.trigger').on('click', function() {
    //alert('hello');
    $('.modal-wrapper').toggleClass('open');
    //$('.page-wrapper').toggleClass('blur-it');
    
    return false;
  });
  $(document).on('click','.own_trigger',function()
  {
    $('.modal-wrapper').toggleClass('open');
    $('.modal_wrapper_final').toggleClass('on');
  });
  $(document).on('click','.final_close',function()
  {
    $('.modal_wrapper_final').toggleClass('on');
  });
  // $(document).on('click','.confirm',function()
  // {
  //   location.replace("{% url 'mainmenu'%}");
  // })
});


