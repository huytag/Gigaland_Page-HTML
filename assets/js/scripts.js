(function ($) {
  $(function () {
    $(document).ready(function () {
      showMenuMobile();
      showMenuMobileChiu();
    });
    function showMenuMobile() {
      const el = $(".button-menu");
      let click = false;
      if (el.length > 0) {
        el.on("click", function () {
          if (click) {
            click = false;
            $("#nav-menu-mobile").removeClass("d-block");
            $("#nav-menu-mobile").addClass("d-none");
          } else {
            click = true;
            $("#nav-menu-mobile").removeClass("d-none");
            $("#nav-menu-mobile").addClass("d-block");
          }
        });
      }
    }
    function showMenuMobileChiu() {
      const el = $("#nav-item_menu_mb");
      let click = false;
      if (el.length > 0) {
        el.on("click", function () {
          if (click) {
            click = false;
            $("#nav-item_menu_mb-active").removeClass("d-block");
            $("#nav-item_menu_mb-active").addClass("d-none");
          } else {
            click = true;
            $("#nav-item_menu_mb-active").removeClass("d-none");
            $("#nav-item_menu_mb-active").addClass("d-block");
          }
        });
      }
    }
  });
})(jQuery);
