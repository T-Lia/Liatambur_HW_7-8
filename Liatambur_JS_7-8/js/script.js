$(function() {
  
  var $wrapper = $('.wrapper'),
      $allTabs = $wrapper.find('.tab_content > div'),
      $tabMenu = $wrapper.find('.tab_menu li');
      $line = $('<div class="line"></div>').appendTo($tabMenu);

  
  $allTabs.not(':first-of-type').hide();  
  $tabMenu.filter(':first-of-type').find(':first').width('100%')
  
  $tabMenu.each(function(i) {
    $(this).attr('data-tab', 'tab' + i);
  });
  
  $allTabs.each(function(i) {
    $(this).attr('data-tab', 'tab' + i);
  });
  
  $tabMenu.on('click', function() {
    
    var dataTab = $(this).data('tab'),
        $getWrapper = $(this).closest($wrapper);
    
    $getWrapper.find($tabMenu).removeClass('active');
    $(this).addClass('active');
    
    $getWrapper.find('.line').width(0);
    $(this).find($line).animate({'width':'100%'}, 'fast');
    $getWrapper.find($allTabs).hide();
    $getWrapper.find($allTabs).filter('[data-tab='+dataTab+']').show();
  });

});

$(function() {

  var $inputForm = $('.form input');

  $inputForm.on('hover', function() {
    $(this).attr('title');
  });



});