gsap.timeline({
    scrollTrigger:{
        trigger:".p1",
        start:"top bottom",
        end:"center center",
        scrub:1,
        // markers:true,
    }
})
.from(".p1",{xPercent:-100});

gsap.to(".circle",{ // 動かす要素
    scrollTrigger: {
        trigger: ".circle", // この要素まできたらアニメーション開始
        start: "top center", // ビューポートの設定
        // markers: true, // 検証用のマーカーを表示
        toggleActions: "play pause resume reset",
    },
    // opacity:1,
    left: "35%", //画面の何%移動
    rotation: 360, //何度回転
    duration: 3, //この動作に何秒かけるか 
});

gsap.timeline({
    scrollTrigger:{
        trigger:".hello",
        start:"top bottom",
        end:"center center",
        scrub:1,
        // markers:true,
    }
})
.from(".hello",{y:-100,opacity:0});

const $welEmail = document.getElementById("wel-email");
const $inputEmail = document.getElementById("input-email");

$welEmail.addEventListener("click",function(){
    if($inputEmail.value == ""){
        alert("メールアドレスを入力してください")
    }else{
        alert("登録しました！");
    }
})


let $open1 = document.getElementsByClassName("open1")
function liClick1(){
        if($open1[0].style.display == "none"){
            $open1[0].style.display = "block"
        }else{
            $open1[0].style.display = "none"
        };
    };

let $open2 = document.getElementsByClassName("open2")
function liClick2(){
        if($open2[0].style.display == "none"){
            $open2[0].style.display = "block"
        }else{
            $open2[0].style.display = "none"
        };
    };

let $open3 = document.getElementsByClassName("open3")
function liClick3(){
        if($open3[0].style.display == "none"){
            $open3[0].style.display = "block"
        }else{
            $open3[0].style.display = "none"
        };
    };

let $open4 = document.getElementsByClassName("open4")
function liClick4(){
        if($open4[0].style.display == "none"){
            $open4[0].style.display = "block"
        }else{
            $open4[0].style.display = "none"
        };
    };



    // サイト閲覧料金
let count = 1;
const $p1 = document.getElementById("p1")
const $p2 = document.getElementById("p2")

function myFunc(){
    $p1.innerHTML="サイト閲覧時間："+ count+"秒"
    $p2.innerHTML= "支払い料金(100円/5秒)："+Math.floor(count/5)*100+"円"
    count++;
}
setInterval("myFunc()",1000);
