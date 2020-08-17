let $div = [...$('.swiper-slide')];
$div.forEach((item, index) => {
    $(item).css('background', `url('../image/${index+1}.jpg')no-repeat top center`);
})
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
})

$(function(){
    $.ajax({
        type:'get',
        url:'/part',
        success:function(data){
        //part2
       
            let div2 = ''
            data.part2.forEach((item ,index)=> {
                div2 += `<a href="../html/good.html?id=${index}"><div>
                 <span class="label">${item.label}</span>
                 <h3>${item.name}</h3>
                 <p>${item.tit}</p>
                 <span>${item.price}</span>
                 <img src=${item.image} alt="">
            </div></a>`
            });
            $('.part2').append(div2);

            //part
            let div3 = ''
            data.part3.forEach((item ,index)=>  {
                div3 += `<a href="../html/good.html?id=${index}"><div>
                <img src=${item.image} alt="">
                <h3>${item.name}</h3>
                <p>${item.tit}</p>
                <span>${item.price}</span>
            </div></a>`
            });
            $('.part3').append(div3);
            //part5
            let div5 = ''
            data.part5.forEach((item ,index)=>  {
                div5 += `<a href="../html/good.html?id=${index}"><div class=${item._class}>
                <img src=${item.image} alt="">
                <h3>${item.name}</h3>
                <p>${item.tit}</p>
                <span>${item.price}</span>
            </div></a>`
            })
            $('._part5').append(div5);
            //part6
            let div6 = ''
            data.part6.forEach((item ,index)=>  {
                div6 += `<a href="../html/good.html?id=${index}"><div class=${item._class}>
                <img src=${item.image} alt="">
                <h3>${item.name}</h3>
                <p>${item.tit}</p>
                <span>${item.price}</span>
            </div></a>`
            })
            $('._part6').append(div6);
            //part7
            let div7 = ''
            data.part7.forEach((item ,index)=>  {
                div7 += `<a href="../html/good.html?id=${index}"><div class=${item._class}>
                <img src=${item.image} alt="">
                <h3>${item.name}</h3>
                <p>${item.tit}</p>
                <span>${item.price}</span>
            </div></a>`
            })
            $('._part7').append(div7);
            //part8
            console.log(data)
            let div8 = ''
            data.part8.forEach((item ,index)=>  {
                div8 += `<a href="../html/good.html?id=${index}"><div>
                <img src=${item.image} alt="">
                <p class="count">
                    <img src=${item.userAvatar} alt="">
                    <span>${item.userName}</span>
                </p>
                <p>${item.con}</p>
                <span>${item.name}</span>
            </div></a>`
            })
            $('.part8').append(div8);
            //part9
            let div9 = ''
            data.part9.forEach((item ,index)=>  {
                div9 += `<a href="../html/good.html?id=${index}"><div>
                <img src=${item.image} alt="">
                <p>${item.con}</p>
            </div></a>`
            })
            $('._part9').append(div9);
            //part9
            let div10 = ''
            data.part10.forEach((item ,index)=>  {
                div10 += `<a href="../html/good.html?id=${index}"><div>
                <img src=${item.image} alt="">
                <p>${item.con}</p>
            </div></a>`
            })
            $('._part10').append(div10);
        }
    })
})