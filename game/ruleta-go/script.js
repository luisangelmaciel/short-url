//獎品項目
var prize_list = [{
        name: "Acapulco",
        img: "https://www.luisangelmaciel.one/img/lamp-1.svg"
    },
    {
        name: "Puerto<br/> Vallarta",
        img: "https://www.luisangelmaciel.one/img/lamp-1.svg"
    },
    {
        name: "Zipolite<br/>",
        img: "https://www.luisangelmaciel.one/img/lamp-1.svg"
    },
    {
        name: "Tepoztlan",
        img: "https://www.luisangelmaciel.one/img/lamp-1.svg"
    },
    {
        name: "Veracruz",
        img: "https://www.luisangelmaciel.one/img/lamp-1.svg"
    },
    {
        name: "CDMX",
        img: "https://www.luisangelmaciel.one/img/lamp-1.svg"
    },
    {
        name: "Cancun",
        img: "https://www.luisangelmaciel.one/img/lamp-1.svg"
    },
    {
        name: "Campamento",
        img: "https://www.luisangelmaciel.one/img/lamp-1.svg"
    },
]

for (var i = 0; i <= 7; i++) {
    $(".list ul").append("<li><p>" + prize_list[i].name + "</p><img src='" + prize_list[i].img + "'></li>");
}


// 假設iEnd是請求獲得的獎品結果
var iEnd = -1;

$(".turntable_btn").on("click", function() {

    var $this = $(this);

    iEnd = Math.floor(Math.random() * 8);
    console.log(iEnd);
    var prize = $(".list").find("li").eq(iEnd).find("p").html();
    // console.log(prize);

    rotating();
    //禁用
    $this.attr("disabled", "disabled");

    setTimeout(function() {
        // 恢復按鈕
        $this.removeAttr("disabled");
        $(".list ul").removeClass("go");
        $(".polyline").removeClass("go");
        $(".circle circle").removeClass("go");
        var prize = $(".list").find("li").eq(iEnd).find("p").html().replace("<br>", "");
        // console.log(prize);
        alert('Vamonos de viaje a' + prize + '!!');
    }, 4200);

});

function rotating() {
    // console.log(iEnd);
    $(".list ul").addClass("go");
    $(".polyline").addClass("go");
    $(".circle circle").addClass("go");

    // var rotate = prize_list.attr("style");
    // var rotate_split_1 = rotate.split(":");
    // var rotate_split_2 = rotate_split_1[1].split("(");
    // var rotate_split_3 = rotate_split_2[1].split("deg");
    // //旋轉度
    // var rotate_deg = rotate_split_3[0];
    // // console.log(rotate_deg);

    switch (iEnd) {
        case 0:
            $(".polyline").css("transform", "rotate(0deg)");
            $(".list ul").css("transform", "rotate(0deg)");
            break;
        case 1:
            $(".polyline").css("transform", "rotate(45deg)");
            $(".list ul").css("transform", "rotate(45deg)");
            break;
        case 2:
            $(".polyline").css("transform", "rotate(90deg)");
            $(".list ul").css("transform", "rotate(90deg)");
            break;
        case 3:
            $(".polyline").css("transform", "rotate(135deg)");
            $(".list ul").css("transform", "rotate(135deg)");
            break;
        case 4:
            $(".polyline").css("transform", "rotate(180deg)");
            $(".list ul").css("transform", "rotate(180deg)");
            break;
        case 5:
            $(".polyline").css("transform", "rotate(225deg)");
            $(".list ul").css("transform", "rotate(225deg)");
            break;
        case 6:
            $(".polyline").css("transform", "rotate(270deg)");
            $(".list ul").css("transform", "rotate(270deg)");
            break;
        case 7:
            $(".polyline").css("transform", "rotate(315deg)");
            $(".list ul").css("transform", "rotate(315deg)");
            break;
    }
}