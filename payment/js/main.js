$(document).ready(function(){

    new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    $('.specialOffer__content').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                } 
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                } 
            },
            {
                breakpoint: 575,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '80px',
                } 
            },
            {
                breakpoint: 424,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '50px',
                } 
            }
        ]
    });
});

// Mobile Menu

const menu = new MmenuLight(document.querySelector( '#mobileMenu' ), 'all');

var navigator = menu.navigation({
    selectedClass: 'Selected',
    slidingSubmenus: true,
    theme: 'dark',
    title: 'Меню'
});

var drawer = menu.offcanvas({
    position: 'left'
});

document.querySelector('a[href="#mobileMenu"]').addEventListener('click', evnt => {
    evnt.preventDefault();
    drawer.open();
});

let items = [
    {
        _id: '1',
        title: 'МАССАЖНАЯ ПОДУШКА MASSAGE PILLOW',
        img: './img/content/massage_pillow.png',
        price_old: '100',
        price_new: '49.99',
        special: false,
        discount: '51',
    },
]

function createItems() {
    let items_container = document.getElementById('catalogue__content');
    let special_container = document.getElementById('specialOffer__content');

    let all_items = items.map(item => {
        return (`
            <div class="catalogue__item">
                <div class="catalogue__item__image">
                    <a href="#"><img src="${item.img}" alt="${item.title}"></a>
                </div>
                <div class="catalogue__item__title">
                    <a href="#">${item.title}</a>
                </div>
                <div class="catalogue__item__price">
                    Цена: <span>${item.price_new}руб.</span>
                </div>
                <a 
                    class="specialOffer__item__button"
                    onclick="openItemModal(
                        '${item._id}', 
                        '${item.title}', 
                        '${item.img}', 
                        '${item.price_old}', 
                        '${item.price_new}', 
                        '${item.special}',
                        '${item.discount}'
                    ).preventDefault()"
                >
                    ЗАКАЗАТЬ СЕЙЧАС
                </a>
            </div>
        `)
    }).join('')

    let special_items = items.filter(item => item.special).map(item => {
        return (`
            <div class="specialOffer__item">
                <div class=specialOffer__item__discount>
                    скидка
                    <br>
                    <span>-${item.discount}%</span>
                </div>
                <div class="specialOffer__item__image">
                    <a href="#"><img src="${item.img}" alt="${item.title}"></a>
                </div>
                <div class="specialOffer__item__title">
                    <a href="#">${item.title}</a>
                </div>
                <div class="specialOffer__item__price">
                    Цена: <span>${item.price_new}руб.</span>
                </div>
                <a 
                    class="specialOffer__item__button"
                    onclick="openItemModal(
                        '${item._id}', 
                        '${item.title}', 
                        '${item.img}', 
                        '${item.price_old}', 
                        '${item.price_new}', 
                        '${item.special}',
                        '${item.discount}'
                    ).preventDefault()"
                >
                    ЗАКАЗАТЬ СЕЙЧАС
                </a>
            </div>
        `)
    }).join('')

    items_container.innerHTML = all_items;
    special_container.innerHTML = special_items;
}

createItems();

function openItemModal(id, title, img, price_old, price_new, special, discount) {
    let modal = $('<div class="box-modal" />');
    modal.prepend('<div class="box-modal_close arcticmodal-close">X</div>');
    
    let modal_content = `
        <div class="box-modal__image">
            <img src="${img}">
        </div>
    
        <div class="box-modal__title">${title}</div>
        <br/>
        <div class="card_price">
        <div class="old_price"><span>обычная цена:</span><p>${price_old} руб</p></div>
        <div class="new_price"><span>новая цена:</span><p>${price_new} руб</p></div>
        </div>
        <br/>
        <div style="text-align:left;">
       <p> Массаж - отличная профилактика множества заболеваний позвоночника, позволяющая , кроме того, избавиться от накопившейся усталости.</p>     <br/>
<p>Массажные ролики подушки имитируют действия рук массажиста, даря вам незабываемые ощущения. Эффективный массаж, осуществляемый подушкой Мастер массажа, улучшает кровообращение, наполняя клетки кислородом.</p>
        </div>
        <br/>
        <h2><b style="font-weight:bold;">Характеристики:</b></h2>
        <ul>
        <li><b style="font-weight:bold;">Размеры подушки</b>: 31х10х18 см</li>
        <br/>
        <li><b style="font-weight:bold;">Вес</b>: 1.5 кг</li>
        <br/>
        <li><b style="font-weight:bold;">Длина кабеля:</b> 1,2м</li>
        
        </ul>
        <br/>
        <form id="order_form" class="order_form" action="core/send.php" method="post">
            <input type="hidden" class="input" placeholder="АЙ ДИ" id="color_item" name="color_item" value="Бирюзовый">
            <input class="input" id="name" type="text" name="name" placeholder="Имя: Иван" required="">
            <input class="input" id="phone" type="tel" name="phone" placeholder="Телефон: 375ХХХХХХХХХ" required="" minlength="7" maxlength="13">
            <button class="button">Оформить заказ</button>
            <label style="font-size: 13px; line-height: 13px;margin-top:15px;width:100%;display:block;text-align: center;">
                <input type="checkbox" checked="" required="" style="-webkit-appearance:checkbox;display:inline-block;width:auto;height: auto">
                Я согласен с политикой конфиденциальности и пользовательским соглашением
            </label>
        </form>
    `

    modal.append(modal_content)
    $.arcticmodal({
        content: modal
    });
}

