$(document).ready(function () {
  /* validation kodu */
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
    }

    form.classList.add("was-validated");
  });

  $("#show-more").on("click", function () {
    if ($(this).text() == "Show More") $(this).text("Show Less");
    else $(this).text("Show More");
  });

  var btn = $("#backToTop");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      "200"
    );
  });
});

function showToastMessage(message) {
  $("#toast-body").text(message);
  
  var toastHTMLElement = document.getElementById("toastMessage");
  var toastElement = new bootstrap.Toast(toastHTMLElement, option);
  toastElement.show();
}

var option = {
  animation: true,
  delay: 1500,
};
