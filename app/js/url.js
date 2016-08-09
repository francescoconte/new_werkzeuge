(function ($) {
    $(function(){
        var $categoryProducts = $('.wrapper');
        $categoryProducts.on('click', '.lol', function(e){
            e.preventDefault();
            History.pushState(null, document.title, $(this).attr('href'));
            loadPage($(this).attr('href'));
        });
 
        function loadPage(url) {
            $categoryProducts.load(url + " .wrapper > *");
        }
    });
})(jQuery);
