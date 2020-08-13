 $('.down').hover(function(){
            $('.nav-list ul').css({height:"200px"});
            $('.top').css({
                'background':'#fff',
                'color':'#333'
            })
            $('.top h1').css({
                'background':'#fff',
                'color':'blue'
            })
            $('.top li  a').css( 'color','#333')
        },function(){
            $('.nav-list ul').css('height','0px')
            $('.top').css({
                'background':'transparent',  
            })
            $('.top li a').css( 'color','#fff')
            $('.top h1').css({
                'background':'transparent',
                'color':'#fff'
            })
        })
        $('.nav-list').hover(function(){
            $('.top').css({
                'background':'#fff',
                'color':'#333'
            })
            $('.top h1').css({
                'background':'#fff',
                'color':'blue'
            })
            $('.top li a').css( 'color','#333')
            $('.nav-list ul').css('height','200px')
        },function(){
            $('.nav-list ul').css('height','0px')
            $('.top').css({
                'background':'transparent',
                'color':'#fff'
            })
            $('.top li a').css( 'color','#fff')
            $('.top h1').css({
                'background':'transparent',
                'color':'#fff'
            })
        })
        $('.nav-list ul li').hover(function(){
            $(this).css('opacity','1')
            $(this).siblings().css('opacity','0.6')
        },function(){
            // $(this).css('opacity','0.6')
        })