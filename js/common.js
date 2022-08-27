// //ツイートボタン
// function twitText() {
// 	var s, url;
// 	s = "JSからツイートしてみてるよ! %23すなぷろ14th";
// 	url = document.location.href;
	
// 	if (s != "") {
// 		if (s.length > 140) {
// 			//文字数制限
// 			alert("テキストが140字を超えています");
// 		} else {
// 			//投稿画面を開く
// 			url = "http://twitter.com/share?url=" + escape(url) + "&text=" + s;
// 			window.open(url,"_blank","width=600,height=300");
// 		}
//     }
// }


// var fruit ="りんご"

// console.log(fruit);

// fruit = "パイナップル";
// console.log(fruit);

// //フルーツジュースを作るよ
// console.log(fruit+"の皮をむいて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかける");
// console.log(fruit+"ジュースの出来上がり");

// fruit = "キウイ";
// console.log(fruit+"の皮をむいて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかける");
// console.log(fruit+"ジュースの出来上がり");

// function fruitjuice(fruit){
// var fruit = "キウイ"
// console.log(fruit+"の皮をむいて");
// console.log(fruit+"をざく切りにして");
// console.log(fruit+"をミキサーにかける");
// console.log(fruit+"ジュースの出来上がり");
// }

// fruitjuice("りんご");
// fruitjuice("バナナ");
// fruitjuice("マンゴー");

// //新しくsumという名前の関数を作ってみましょう！
// //total関数では、２つの数字を引数として
// //受け取れるようにしてください（引数名はaとb）

// //関数の中で
// //２つの数字を足し算する処理を書いてください

// function total(a,b){
//     var ab = a+b;
//     return ab
// }

// console.log(total(2,3));


// var a = 1;
// var b = 2;

// console.log(a==b);

// var menkyo = 0;
// var money =1000;

// if(menkyo==1){
//     console.log("車の運転していいよ");
// }else if (money>550){
//     console.log("バスで帰っていいよ");
// }else{
//     console.log("歩いて帰ってね");
// }

// var time = 10;
// var getup = 8;

// if(time<getup){
//     console.log("遅刻です");
// }else if(time==getup){
//     console.log("ギリギリセーフ！");
// }else{
//     console.log("よくがんばりました");
// }


// //for( 初期値；条件式；増減式){
// //    繰り返したい処理
// //}

// for(var i=1; i<10; i++){
//     console.log("リンゴジュース"+i+"杯目");
// }

// i=i+1;


// for(var i=100; i>0; i--){
//     console.log(i + "回目");
// }


// // var text_h1 = document.getElementById("text");
// // console.log(text_h1);
// // console.log(text_h1.textContent);

// // text_h1.textContent = "aaaaaa";

// var btn_node = document.getElementById("btn")
// btn_node.addEventListener("click",changeText);



// function changeText(){
// 	var text_h1 =document.getElementById("text");
// 	text_h1.textContent = "おしたなー💩";
	
// }



$(function(){ //これはJQuery のお約束

	// $("#text").text("ヤッホーーー");


	$("#btn").on("click",function(){
		// $("#text").text("ヤッホー");
		// $("header").css("color","red");
		// $("a").attr("href","https://sunabaco.com")
		// $("header").toggle();
		// $("body").addClass("red");
		// $("body").removeClass("blue");
		$("body").toggleClass("blue");

	})

}) //これはJQuery のお約束



// $("セレクター").on("イベント",function(){
// 	どうする
// 	どうする
// })
