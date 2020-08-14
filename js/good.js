$(function(){
   let _id = location.search.split('id=')[1]%6
    $.ajax({
        type:'get',
        url:'/good',
        success:function(data){
            //left
            let good = data.find(item => item.id == _id)
            console.log(good)
            $('.title ._name').text(good.name) ;
            let imgS = '';
            loadLeft(good.color[0])
        //     good.color[1].imgSmall.forEach((item ,index)=>{
        //         imgS += `<li _big=${ good.color[1].imgBig[index]}><img src=${item} alt=""></li>`
        //     })
        //     $('.good_left ').html(`
        //     <img src=${ good.color[1].imgBig[0]}  alt="" class="big">
        //    <ul>
        //     ${imgS}
        //    </ul>
        //     `) ;
            //right

            let type = ''
            good.product.forEach(item =>{
                type += `<span>${item}</span>`
            })
            let color = '';
            good.color.forEach(item =>{
                color += `<span><img src=${item.img} alt="">${item.con}</span>`
            })
            $('.good_right').html(`
            <h1>${good.name}</h1>
            <p>${good.tit}</p>
            <div class="time">
                <span>限时特惠</span>
                <span>剩余${good.day}天</span>
            </div>
            <p class="price">
                <em>￥</em>
                <span>${good.price}</span>
                <span class="del">￥129.00</span>
            </p>
            <ul>
                <li class="express">
                    <label for="">支持</label>
                    <div >
                        <span><img src="../image/success.png" alt="">花呗分期</span>
                        <span><img src="../image/success.png" alt="">顺丰发货</span>
                        <span><img src="../image/success.png" alt="">7天无理由退货</span>
                    </div>
                </li>
                <li class="server">
                    <label for="">配送服务</label>
                    <div>
                        <p>广东省 深圳市</p>
                        <p class="kefu">本商品由 魅族 负责发货并提供售后服务 <a href="">商城客服</a></p>
                    </div>
                </li>
                <li class="model">
                    <label for="">型号</label>
                    <div>
                       ${type}
                    </div>
                </li>
                <li class="color">
                    <label for="">颜色</label>
                    <div>
                       ${color}
                       
                    </div>
                   
                </li>
                <li class="huaBei">
                    <label for="">花呗分期</label>
                    <div>
                       <p>
                           <span class="num">￥${((+good.price)/3).toFixed(2)}x3期</span>
                           <span>含手续费￥0.53/期</span>
                       </p>
                       <p>
                        <span>￥${((+good.price)/6).toFixed(2)}x6期</span>
                        <span>含手续费￥0.53/期</span>
                    </p>
                    <p>
                        <span>￥${((+good.price)/9).toFixed(2)}x9期</span>
                        <span>含手续费￥0.53/期</span>
                    </p>
                    </div>
                </li>
                <li class="count">
                    <label for="">数量</label>
                    <div>
                      <span class="sub">-</span>
                      <span class="show_num">1</span>
                      <span class="add">+</span>
                    </div>
                </li>
            </ul>
            <a href="" class="buy">立即购买</a>
            <a href="" class="cart">加入购物车</a>
        `)
            $('.model div span').eq(0).addClass('active')
            $('.color div span').eq(0).addClass('active')
            $('.huaBei div p').eq(0).addClass('active')
            $('.model div span').click(function(){
                $(this).addClass('active');
                $(this).siblings().removeClass('active')
            })
            $('.color div span').click(function(){
                $(this).addClass('active');
                $(this).siblings().removeClass('active')
            })
            $('.huaBei div p').click(function(){
                $(this).addClass('active');
                $(this).siblings().removeClass('active')
            })
            $('.color div span').click(function(){
                // loadLeft($(this).index('.color div span'))
                let index = $(this).index('.color div span')
               loadLeft(good.color[index])
            })
            let detail = ''
            good.details.forEach(item =>{
                detail += ` <img src=${item} alt="">`
            });
            $('.delay').append(detail)
        }
    })
    window.onresize = function(){
        $('.up').css('left',$('.delay').offset().left + 1300)
    }
    $('.up').css('left',$('.delay').offset().left + 1300);
    $('.up').click(function(){
    console.log(document.body.scrollTop)

        animate(document.body,{
            scrollTop:0
        })
    })
    $('.left').on('click',' ul li',function(){
        console.log(111)
       $(this).closest('.left').find('.big').attr('src',$(this).attr('_big')) 
    })
    function loadLeft(data){
        let imgS = '';
           data.imgSmall.forEach((item ,index)=>{
                imgS += `<li _big=${ data.imgBig[index]}><img src=${item} alt=""></li>`
            })
            $('.good_left ').html(`
            <img src=${ data.imgBig[0]}  alt="" class="big">
           <ul>
            ${imgS}
           </ul>
            `) ;
    }
})