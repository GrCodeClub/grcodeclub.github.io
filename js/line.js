$(function() {
  'use strict';
  
  var $magicLine = $('.magic-line');
  
  function updateMagicLine() {
    var $activeTab = $('.tabs .active');
    
    $magicLine.width($activeTab.width())
              .css('left', $activeTab.position().left);
  }
  
  $('.tabs li').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active');
    updateMagicLine();
  });
  
  // Αρχική ενημέρωση της "μαγικής γραμμής"
  updateMagicLine();
});
