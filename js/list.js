$(function(){
    let tag = true;
    let last = 0
    $.ajax({
        type:'get',
        url:'/list',
        success:function(res){
           loadList(res)
           $('.byId').click(function(){
               res.sort((a,b)=>a.id - b.id)
               loadList(res)
               last = 1
           })
           $('.byTime').click(function(){
            res.sort((a,b)=>b.time - a.time)
            loadList(res)
            last = 2
        })
        $('.byPrice').click(function(){
            res.sort((a,b)=>a.price - b.price)    
            if(last && last !== 3){
                tag = !tag
            }
            if(tag){
                loadList(res)
            }else{
                loadList(res.reverse())
            }    
                tag = !tag
          last = 3      
        })
        }
    })
    function loadList(data){
        let div = ''
        data.forEach(item =>{
            let label = ''
            item.color.forEach((item2,index) =>{
                label += ` <label for="" showImg = ${item.image[index]}><img src=${item2} alt=""></label>`
            })
            div+= ` <a href="../html/good.html?id=${item.id}">
            <div>
                <img src=${item.image[0]} alt="" class="_show">
                <h4>
                    ${label}
                </h4>
                <h3>${item.name}</h3>
                <p>${item.tit}</p>
                <p >
                    <span>限时特惠</span>
                    <em>￥</em>
                    <span class="price">${item.price}</span>
                </p>
            </div></a>
         `
        })
        $('.goods').html(div);
    }
    $('.goods').on('click','h4 label',function(){
        $(this).closest('h4').prev().attr('src',$(this).attr('showImg'))
        return false
    })
    $('.goods').on('click','div',function(){
       location.href = '/html/good.html'
    })
})