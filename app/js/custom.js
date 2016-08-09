jQuery(document).ready(function($) {
    
    /*============================================================
        SVG fallback to png 
    ============================================================*/ 
    function svgFallback() {
        $('html.no-svg img').each(function() {
            $(this).addClass('svg');
            $(this).attr('src', function() {
                return $(this).attr('src').replace('.svg', '.png');
            });
        });
    }
    if ( $('html').hasClass('no-svg') ) { svgFallback(); }
    
    /*============================================================
        Instagram Photos
    ============================================================*/
    function footerInstagram() {
        $.fn.spectragram.accessData = {
            accessToken: '2010554748.22cda8d.237f26ca10c947dda5323575f6a3db03',
            clientID: '20dc0e50d7554233bd4b29ef3fca5202'
        };
    }
    if( $( '#instagram' ).length > 0 ) { footerInstagram(); }
    
    /*============================================================
        Homepage - banner hover
    ============================================================*/
    function imageHovers() {
        var isMobile = window.matchMedia("only screen and (max-width: 768px)");
        if ( !isMobile.matches ){
            $('.topbanner').on({
                mouseenter: function() {
                    $( this ).find('.topbanner-hover').fadeIn('fast');
                }, mouseleave: function() {
                    $( this ).find('.topbanner-hover').fadeOut('fast');
                }
            });

            $( '.hbanner' ).on({
                mouseenter: function() {
                    $( this ).find('.hbanner-hover').fadeIn('fast');
                }, mouseleave: function() {
                    $( this ).find('.hbanner-hover').fadeOut('fast');
                }
            });
            
            $('.archive-posts li').on({
                mouseenter: function() {
                    $( this ).find('.archive-hover').fadeIn('fast');
                }, mouseleave: function() {
                    $( this ).find('.archive-hover').fadeOut('fast');
                }
            });

        }
        
    }
    if( $( '.hbanner' ).length > 0 || $( '.archive-posts' ).length > 0 ) { imageHovers(); }
    
    /*============================================================
        Related articles tabs
    ============================================================*/
    function tabsNav() {
        
//        $('.nav-tabs > li > a').click(function() {
//            $('.nav-tabs > li.active').removeClass('active');
//            $(this).parent().addClass('active');
//            
//            $('.tab-content > .active_tab').removeClass('active_tab');
//            $(this.rel).addClass('active_tab');
//        });
        
        $('.nav-tabs > li > a').on('click', function(e)  {
            var currentAttrValue = $(this).attr('href');
            
            $('.tab-pane' + currentAttrValue).show().siblings().hide();

            $(this).parent('li').addClass('active').siblings().removeClass('active');

            e.preventDefault();
        });
        

    }
    if( $('.nav-tabs').length > 0) { tabsNav(); }
    
    /*============================================================
        Overlay menu
    ============================================================*/
    function overlayMenu() {
        $('.triggeroverlay > a').click( function() {
            $('body').css('overflow','hidden');
            $('.menu-overlay').show();
            
            if ( ! $('#more').hasClass('clicked') ) {
                $('#more').addClass('clicked');
                $('.cat-list').slideDown();
            }
                    
            $('.close > a').click( function() {
                $('.menu-overlay').hide();
                $('body').css('overflow','auto');
                $('.cat-list').hide();
                $('#more').removeClass('clicked');
            });
        });
        
        $('.nav-click > a' ).click( function() {
            $('.menu-overlay').show();
            $('body').css('overflow','hidden');
            $('.close > a').click( function() {
                $('body').css('overflow','auto');
                $('.menu-overlay').hide();
                $('.cat-list').hide();
                $('#more').removeClass('clicked');
            });
        });
        
        $('#more').click(function() {
            $(this).toggleClass('clicked');
            $('.cat-list').slideToggle();
        });
        
    }
    overlayMenu();

    /*============================================================
        Fixed top nav
    ============================================================*/
    function fixedTopNav() {
        
        if ( $(window).scrollTop() > 110 ) {
            $('.fixed-header').addClass('showNav');
        }
        else {
            $('.fixed-header').removeClass('showNav');
        }
        
        $(window).scroll( function() {
            if ( $(window).scrollTop() > 110  ) {
                $('.fixed-header').addClass('showNav');
            } 
            else {
                $('.fixed-header').removeClass('showNav');
                $('#showsearch').removeClass('fixedsearch');
            }
        });
    }
    fixedTopNav();
    
    /*============================================================
        Search
    ============================================================*/
    function showSearch() {
        $('#triggersearch2').click(function(){
            $('#showsearch2').slideToggle('fast');
        });
        $('.searchtrigger').click(function(){
            $('#showsearch').toggleClass('fixedsearch');
        });
    } 
    showSearch();
    
    /*============================================================
        Sticky widget
    ============================================================*/
    function stickyWidget() {
        
        $(window).load(function(){
            
            var isMobile = window.matchMedia("only screen and (max-width: 768px)");
        
            var relateditems = $('.side-related').offset().top;
            var instagramPosition = $('#instagram').offset().top;

            var instagramHeight = $('#instagram').height();

            var instagramSnap = instagramPosition - (instagramHeight + 245);

            var contentArea = $('.articles-single').height() + 55;
            var sidebarArea = $('#sidebar').height();
            
            
            function snapThat() {
                if ( $(window).scrollTop() > relateditems && !isMobile.matches ) {
                    $('.side-related').addClass('fixedtop');
                    
                    if ( $(window).scrollTop() > instagramSnap && !isMobile.matches ) {
                        $('.side-related').removeClass('fixedtop');
                        $('.side-related').addClass('fixedbottom');
                    }
                    else {
                        $('.side-related').addClass('fixedtop');
                        $('.side-related').removeClass('fixedbottom');
                    }
                }
                else {
                    $('.side-related').removeClass('fixedtop');
                }
            }

            if ( contentArea > sidebarArea && !isMobile.matches ) {
                $('#sidebar').css('height', contentArea + 'px' );
                $(window).scroll(function () {
                    snapThat();
                });
                $(window).resize(function () {
                    snapThat();
                });
            }
        
        });

    }
    if( $( '.side-related' ).length > 0 ) { stickyWidget(); }
    
    /*============================================================
        image hover
    ============================================================*/
//    function imgFade(){
//        
//        $('.entry-content img').wrap('<div class="content-img"></div>');
//        $('.entry-content img').parent().append('<div class="image-hover"></div>');
//        $('.content-img').on({
//            mouseenter: function() {
//                $( this ).find('.image-hover').fadeIn('fast');
//            }, mouseleave: function() {
//                $( this ).find('.image-hover').fadeOut('fast');
//            }
//        });
//    }
//    if( $( '.entry-content img' ).length > 0 ) { imgFade(); }
    
    /*============================================================
        Placeholder removal
    ============================================================*/
    function removePlaceholder(){
        $('input,textarea').focus(function(){
           $(this).data('placeholder',$(this).attr('placeholder'))
           $(this).attr('placeholder','');
        });
        $('input,textarea').blur(function(){
           $(this).attr('placeholder',$(this).data('placeholder'));
        });
    }
    if( $( 'input' ).length > 0 ) { removePlaceholder(); }
    
    /*============================================================
        Move sidebar on mobile
    ============================================================*/
    function moveSidebar() {
        
        var isMobile = window.matchMedia("only screen and (max-width: 768px)");
        
        if( isMobile.matches ) {
            
            $('.side-related').appendTo( $('#mobile-sidebar') );
            
        }
        
    }
    if( $('#sidebar').length > 0 ) { moveSidebar(); }
    
    /*============================================================
        Get label width to center
    ============================================================*/
    function getLabelWidth() {
        
        var maxWidth = 0;
        var widestLabel = null;
        var $element;
        
        $('li.cat-check').each(function() {
            $element = $(this);
            if($element.width() > maxWidth){
                maxWidth = $element.width();
                widestLabel = $element; 
            }
            $(this).css('width', maxWidth + 'px' )
        });
        
        $('.cat-check > label').click(function() {
            $('#searchform').submit();
        });
        
        
    }
    if( $('.cat-check').length > 0 ) { getLabelWidth(); }
    
    /*============================================================
        Reposition contactform 7 response
    ============================================================*/
    function repositionSubscribe() {
        var success = $('.wpcf7-validation-errors').html();
        $('.subscribe-submit > input').attr('Value', 'Success');
    }
    
    /*============================================================
        Show secondary feature image
    ============================================================*/
    function showSecondaryImage() {
    
        if ( $('body').hasClass('single-post') ) {
            
            $('.entry-single-image').hide();
            $('.entry-double-image').show();
            
            
        } else {
            
            $('.secondImg > img').each(function() {
                $(this).parents('.entry').find('.home-double-image').show();
                $(this).parents('.entry').find('.entry-image').hide();
            });
            
        }

        
    }
    if ( $('.featured-secondary2 > img').length > 0 ) { showSecondaryImage(); }
    if ( $('.secondImg > img').length > 0 ) { showSecondaryImage(); }

    
});