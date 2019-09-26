$(function() {
  // 中央の標識の表示
  var big_sign = document.getElementById("big_sign");
  var explanation = document.getElementById("explanation");
  var active_img= "<img src='images/normal.svg'>";
  var active_exp = "この標識のフォントを自由に変えてみよう！";
	big_sign.innerHTML = active_img;
  explanation.innerHTML = active_exp;

  // 標識をクリック
  $(".list li").click(function(){
    if ($(this).hasClass("active")) {
      return false;
    } else {
      // 透明度とクラス変更
      $(".active").removeClass("active");
      $(this).addClass("active");
      // 中央の標識を表示
      active_img = $(".active").html();
      big_sign.innerHTML = active_img;
      active_exp = $("#big_sign img").attr("alt");
      explanation.innerHTML = active_exp;
    }
  });
});
