$(function() {
  
    var $tabContent = $('.tab_content'),
        $tabContentFirst = $('.tab_content:first'),
        $tabMenuFirst = $('.tabs_menu:first'),
        $tabMenu = $('.tabs_menu');

    $tabContent.hide();
    $tabContentFirst.show();
    $tabMenuFirst.addClass('active');

    $tabMenu.on('click', function(event){
        $tabMenu.removeClass('active');
        $(this).addClass('active');
        $tabContent.hide();

        var selectTab = $(this).find('.tabs_link').attr('href');
        $(selectTab).fadeIn();
    });  
});

$(function() {

  var $inputForm = $('.input');

  $inputForm.on('mouseover', function() {
    $(this).attr('title');
  });
});