$(document).ready(function(){
    $('.gallery__content').slick({
        arrows: false,
        dots: true,
    });
    // nextArrow: '<button type="button" class="slick-next">▶</button>',
    // prevArrow: '<button type="button" class="slick-prev">◀</button>'
});

function modalInstruction1() {
  Swal.fire({
    title: 'КАК НАДЕВАТЬ ЛИНЗЫ?',
    html: `<div class="instructions__modal">
              <img src="../img/instruction1.png">
              <p>
                <span>1-й шаг</span> ополосните линзу многофункциональным раствором для контактных линз NEO PLUS
              </p>
              <p>
                <span>2-й шаг</span> положите контактную линзу на подушечку указательного пальца одной руки
              </p>
              <p>
                <span>3-й шаг</span> другой рукой придержите веко открытым, взгляните вверх и вставьте линзу
              </p>
          </div>
          `
  })
}







function modalInstruction2() {
  Swal.fire({
    title: 'КАК СНИМАТЬ ЛИНЗЫ?',
    html: `<div class="instructions__modal">
              <img src="../img/instruction2.png">
              <p>
                <span>1-й шаг</span> посмотрите вверх, оттягивая и удерживая нижнее веко пальцами одной руки
              </p>
              <p>
                <span>2-й шаг</span> аккуратно зажмите и достаньте линзу указательным и большим пальцем другой руки
              </p>
              <p>
                <span>3-й шаг</span> поместите каждую линзу в ячейку контейнера, наполненного жидкостью для линз NEO PLUS
              </p>
          </div>
          `
  })
}

function modalInstruction3() {
  Swal.fire({
    title: 'КАК ЧИСТИТЬ ЛИНЗЫ?',
    html: `<div class="instructions__modal">
              <img src="../img/instruction3.png">
              <p>
                <span>1-й шаг</span> поместите линзу на ладонь и покройте ее многофункциональным раствором NEO PLUS
              </p>
              <p>
                <span>2-й шаг</span> промывайте каждую сторону линзы в течении пяти секунд многофуекциональным раствором
              </p>
              <p>
                <span>3-й шаг</span> наполните каждую ячейку контейнера для хранения линз свежей порцией универсальной жидкости
              </p>
              <p>
                <span>4-й шаг</span> поместите контактные линзы на 4 часа в соответствующие ячейки контейнера наполненную жидкостью для хранения линз
              </p>
          </div>
          `
  })
}









let name = document.getElementById("name");
let phone = document.getElementById("phone");

function setWithExpiry(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

$("#order_form").on("submit", function (e) {
  let formData = {
    name: name.value,
    phone: phone.value,
  };

  setWithExpiry("myKey", formData, 20000);
});
$(document).ready(function () {
  /* scroll */

  $("a[href^='#']").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
});