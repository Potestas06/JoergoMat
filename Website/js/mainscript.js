if (matchMedia) {
  const mq = window.matchMedia("(max-width:768px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    $("#navbar_toggle").removeClass("dis-none");
    $("#navbar_collapse").addClass("dis-none");
    $("#navbar_toggle").on("click", function (e) {
      $("#navbar_collapse").slideToggle();
      $("#navbar_collapse").css({ display: "block" });
      $("#divBackground").removeClass("divNormal");
      $("#divBackground").addClass("divHeight");
    });
  } else {
    $("#navbar_toggle").addClass("dis-none");
    $("#navbar_collapse").removeClass("dis-none");
  }
}
