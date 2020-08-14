let $ul = $('.nav-list ul')
 $(function () {
 
     $.ajax({
         type: 'get',
         url: '/nav',
         success: function (data) {
             loadData(data[0]);
             $('.down').hover(function () {
                 loadData(data[$('.down').index($(this))])
                $ul.css({
                    'transition': '0.5s',
                    'height': "300px"
                });
                $('.nav-list ').css('background', '#fff');
                $('.top h1').css({
                    'color': 'blue'
                });
                $('.top li  a').css('color', '#333');
            }, function () {
                $ul.css({
                    'transition': '0s',
                    'height': "0px"
                });
                $('.top li a').css('color', '#fff');
                $('.top h1').css({
                    'color': '#fff'
                });
                $('.nav-list ').css('background', 'transparent');
            })
            $('.nav-list').hover(function () {
                $('.top h1').css({
                    'color': 'blue'
                });
                $('.nav-list ').css('background', '#fff');
                $('.top li a').css('color', '#333');
                $ul.css('height', '300px');
            }, function () {
                $ul.css({
                    'transition': '0s',
                    'height': "0px"
                });
                $('.top li a').css('color', '#fff');
                $('.top h1').css({
                    'color': '#fff'
                });
                $('.nav-list ').css('background', 'transparent');
            })
            
         }
     })
 })

 function loadData(arr){
     $ul.html('');
     let li = ''
    arr.forEach((item ,index)=> {
        li += `
   <li><a href="../html/good.html?id=${index}">
   <img src=${item.image} alt="">
   <p class="tit">${item.tit}</p>
   <span>${item.prices}</span></a>
</li>`
    })
    $ul.append(li);
    $('.nav-list ul li').hover(function () {
        console.log(1111)
        $(this).css('opacity', '1');
        $(this).siblings().css('opacity', '0.6');
    }, function () {
       $(this).css('opacity', '0.6');
    })
 }
 