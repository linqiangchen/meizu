"use strict";$(function(){var l=location.search.split("id=")[1]%6;function o(s){var c="";s.imgSmall.forEach(function(n,a){c+="<li _big=".concat(s.imgBig[a],"><img src=").concat(n,' alt=""></li>')}),$(".good_left ").html("\n            <img src=".concat(s.imgBig[0],'  alt="" class="big">\n           <ul>\n            ').concat(c,"\n           </ul>\n            "))}$.ajax({type:"get",url:"/good",success:function(n){var a=n.find(function(n){return n.id==l});console.log(a),$(".title ._name").text(a.name);o(a.color[0]);var s="";a.product.forEach(function(n){s+="<span>".concat(n,"</span>")});var c="";a.color.forEach(function(n){c+="<span><img src=".concat(n.img,' alt="">').concat(n.con,"</span>")}),$(".good_right").html("\n            <h1>".concat(a.name,"</h1>\n            <p>").concat(a.tit,'</p>\n            <div class="time">\n                <span>限时特惠</span>\n                <span>剩余').concat(a.day,'天</span>\n            </div>\n            <p class="price">\n                <em>￥</em>\n                <span>').concat(a.price,'</span>\n                <span class="del">￥129.00</span>\n            </p>\n            <ul>\n                <li class="express">\n                    <label for="">支持</label>\n                    <div >\n                        <span><img src="../image/success.png" alt="">花呗分期</span>\n                        <span><img src="../image/success.png" alt="">顺丰发货</span>\n                        <span><img src="../image/success.png" alt="">7天无理由退货</span>\n                    </div>\n                </li>\n                <li class="server">\n                    <label for="">配送服务</label>\n                    <div>\n                        <p>广东省 深圳市</p>\n                        <p class="kefu">本商品由 魅族 负责发货并提供售后服务 <a href="">商城客服</a></p>\n                    </div>\n                </li>\n                <li class="model">\n                    <label for="">型号</label>\n                    <div>\n                       ').concat(s,'\n                    </div>\n                </li>\n                <li class="color">\n                    <label for="">颜色</label>\n                    <div>\n                       ').concat(c,'\n                       \n                    </div>\n                   \n                </li>\n                <li class="huaBei">\n                    <label for="">花呗分期</label>\n                    <div>\n                       <p>\n                           <span class="num">￥').concat((a.price/3).toFixed(2),"x3期</span>\n                           <span>含手续费￥0.53/期</span>\n                       </p>\n                       <p>\n                        <span>￥").concat((a.price/6).toFixed(2),"x6期</span>\n                        <span>含手续费￥0.53/期</span>\n                    </p>\n                    <p>\n                        <span>￥").concat((a.price/9).toFixed(2),'x9期</span>\n                        <span>含手续费￥0.53/期</span>\n                    </p>\n                    </div>\n                </li>\n                <li class="count">\n                    <label for="">数量</label>\n                    <div>\n                      <span class="sub">-</span>\n                      <span class="show_num">1</span>\n                      <span class="add">+</span>\n                    </div>\n                </li>\n            </ul>\n            <a href="" class="buy">立即购买</a>\n            <a href="" class="cart">加入购物车</a>\n        ')),$(".model div span").eq(0).addClass("active"),$(".color div span").eq(0).addClass("active"),$(".huaBei div p").eq(0).addClass("active"),$(".model div span").click(function(){$(this).addClass("active"),$(this).siblings().removeClass("active")}),$(".color div span").click(function(){$(this).addClass("active"),$(this).siblings().removeClass("active")}),$(".huaBei div p").click(function(){$(this).addClass("active"),$(this).siblings().removeClass("active")}),$(".color div span").click(function(){var n=$(this).index(".color div span");o(a.color[n])});var i="";a.details.forEach(function(n){i+=" <img src=".concat(n,' alt="">')}),$(".delay").append(i)}}),window.onresize=function(){$(".up").css("left",$(".delay").offset().left+1300)},$(".up").css("left",$(".delay").offset().left+1300),$(".up").click(function(){console.log(document.body.scrollTop),animate(document.body,{scrollTop:0})}),$(".left").on("click"," ul li",function(){console.log(111),$(this).closest(".left").find(".big").attr("src",$(this).attr("_big"))})});