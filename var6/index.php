<?php
include '../config.php';
?>

<!doctype html>

<html lang="ru">

<head>

    <meta charset="utf-8">

    <meta name="robots" content="all">
    <title><?php echo $company_name ?></title>
    <meta name="description" content="">

    <meta name="keywords" content="">

    <meta name="SKYPE_TOOLBAR" content="SKYPE_TOOLBAR_PARSER_COMPATIBLE">
    <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <meta name="msapplication-tap-highlight" content="no" />

    <meta name="format-detection" content="telephone=no">

    <meta http-equiv="x-rim-auto-match" content="none">

    <!--  -->
    <link rel="stylesheet" href="css/title.styles.css">

    <link rel="stylesheet" href="css/designblock.scss.css">

    <link rel="stylesheet" href="css/s3_styles.scss.css">

    <script src="js/jquery.min.js"></script>

    <script type="text/javascript" src="js/title.js"></script>
    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>



</head>

<body>

  <style media="screen">
    .block-3 {
      position:relative;
      top:0;
      left:0;
      width:auto;
      min-height:0px;
      background:linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url("<?php echo $img1; ?>") left 50% top 50% / auto auto no-repeat;
      z-index:1;
      margin-top:0px;
      margin-left:0px;
      margin-bottom:0px;
      margin-right:0;
      right:0px;
      padding-top:40px;
      padding-bottom:40px}
  </style>

    <div class="wrapper editorElement layer-type-wrapper">
        <div class="side-panel side-panel-41 widget-type-side_panel editorElement layer-type-widget widget-24" data-layers="['widget-3':['tablet-landscape':'inSide','tablet-portrait':'inSide','mobile-landscape':'inSide','mobile-portrait':'inSide']]">
            <div class="side-panel-top">
                <div class="side-panel-button">
                    <span class="side-panel-button-icon">
				<span class="side-panel-button-icon-line"></span>
                    <span class="side-panel-button-icon-line"></span>
                    <span class="side-panel-button-icon-line"></span>
                    </span>
                </div>
                <div class="side-panel-top-inner"></div>
            </div>
            <div class="side-panel-mask"></div>
            <div class="side-panel-content">
                <div class="side-panel-close"></div>
                <div class="side-panel-content-inner"></div>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-2">
            <div class="editorElement layer-type-block ui-droppable block-4">
                <div class="layout columned columns-3 layout_center layout_5_id_8">
                    <div class="layout column layout_8">
                        <div class="editorElement layer-type-block ui-droppable block-5 wow slideInLeft">
                            <div class="site-name widget-5 widget-type-site_name editorElement layer-type-widget">
                                <a href="#">
                                    <div class="sn-wrap">
                                        <div class="sn-text">
                                            <?php echo $company_name; ?>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div class="site-description widget-4 widget-type-site_description editorElement layer-type-widget">
                                <?php echo $spec; ?>
                            </div>
                        </div>
                    </div>
                    <div class="layout column layout_7 wow bounceInRight">
                        <div class="widget-3 horizontal menu-7 wm-widget-menu widget-type-menu_horizontal editorElement layer-type-widget " data-screen-button="more" data-responsive-tl="button" data-responsive-tp="button" data-responsive-ml="columned" data-more-text="...">

                            <div class="menu-button">
                                Меню
                            </div>

                            <div class="menu-scroll">
                                <ul>
                                    <li class="opened active menu-item"><a href="#"><span class="menu-item-text">Главная</span></a></li>
                                    <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">Наши услуги</span></a></li>
                                    <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">Прайс-лист</span></a>
                                        <ul class="level-2">
                                            <li><a href="#" target="_blank">пункт меню</a></li>
                                            <li><a href="#" target="_blank">пункт меню</a></li>
                                            <li><a href="#" target="_blank" >пункт меню</a></li>
                                            <li><a href="#" target="_blank">пункт меню</a></li>
                                            <li><a href="#" target="_blank">пункт меню</a></li>
                                            <li><a href="#" target="_blank">пункт меню</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">О компании</span></a></li>
                                    <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">Портфолио</span></a></li>
                                    <li class="menu-item"><a href="#"target="_blank"><span class="menu-item-text">Отзывы</span></a></li>
                                    <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">Контакты</span></a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                    <div class="layout column layout_21 wow slideInRight">
                        <div class="editorElement layer-type-block ui-droppable block-10">
                            <div class="phones-6 widget-2 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget">
                                <div class="inner">
                                    <label class="cell-icon" for="tg-phones-6">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg-phones-6" class="tgl-but" type="checkbox">
                                    <div class="block-body-drop">
                                        <div class="cell-text">
                                            <div class="title">Телефон/факс</div>
                                            <div class="text_body">
                                                <div><a href="tel:<?php echo $phone; ?>"><?php echo$phone;?></a></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="button-20 widget-11 widget-type-button editorElement layer-type-widget">
                                <a href="#" data-api-type="popup-form" data-api-url="/my/s3/xapi/public/?method=form/postform&param[form_id]=41765641&param[tpl]=wm.form.popup.tpl&placeholder=title&tit_en=" data-wr-class="popover-wrap-20"><span>Заказать звонок </span></a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div class="editorElement layer-type-block ui-droppable block-3 wow bounceInUp">
                <div class="layout layout_center not-columned layout_4_id_22">
                    <div class="widget-12 slider-22 slider widget-type-slider editorElement layer-type-widget" data-setting-pause="4000" data-setting-mode="fade" data-setting-auto="1" data-setting-controls="" data-setting-pager="1" data-setting-pager_selector=".slider-22 .slider-pager" data-setting-prev_selector=".slider-22 .slider-prev" data-setting-next_selector=".slider-22 .slider-next" data-setting-prev_text="" data-setting-next_text="">
                        <div class="slider-inner">
                            <div class="slider-item-1 slider-item" data-src="<?php echo $img1; ?>">
                                <div class="text-slider">
                                    <div class="text-slider-wp">
                                        <div class="block-title"><a href="#" target="_blank"><?php echo $serv1; ?></a></div>
                                        <div class="block-body">
                                            <div>Сотрудничайте с лидером рынка! К нам обратилось уже более 5000 клиентов. Большой опыт!</div>
                                        </div>
                                        <div class="block-more">
                                            <a href="#" target="_blank">Заказать услугу</a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" target="_blank"></a>
                            </div>
                            <div class="slider-item-2 slider-item" data-src="<?php echo $img2; ?>">
                                <div class="text-slider">
                                    <div class="text-slider-wp">
                                        <div class="block-title"><a href="#" target="_blank"><?php echo $serv2; ?></a></div>
                                        <div class="block-body">
                                            <div>Внимательное отношение к каждому покупателю. Отношения с клиентами построены на принципах взаимного доверия и уважения.</div>
                                        </div>
                                        <div class="block-more">
                                            <a href="#" target="_blank">Заказать услугу</a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" target="_blank"></a>
                            </div>
                            <div class="slider-item-3 slider-item" data-src="<?php echo $img3; ?>">
                                <div class="text-slider">
                                    <div class="text-slider-wp">
                                        <div class="block-title"><a href="#" target="_blank"><?php echo $serv3; ?></a></div>
                                        <div class="block-body">
                                            <div>Вы экономите свое время, потому что мы идем в ногу со временем и используем только передовые технологии.</div>
                                        </div>
                                        <div class="block-more">
                                            <a href="#" target="_blank">Заказать услугу</a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" target="_blank"></a>
                            </div>
                        </div>
                        <div class="slider-pager-wrap">
                            <div class="slider-pager">
                                <a href="" data-slide-index="0"></a>
                                <a href="" data-slide-index="1"></a>
                                <a href="" data-slide-index="2"></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-8">
            <div class="layout layout_center not-columned layout_15_id_16">




                <div class="blocklist blocklist-16 widget-8 horizontal_mode widget-type-block_list editorElement layer-type-widget" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".blocklist-16 .pager-wrap" data-setting-prev_selector=".blocklist-16 .prev" data-setting-next_selector=".blocklist-16 .next" data-setting-count="3" data-setting-columns="5,2,2,2,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                    <div class="header">
                        <div class="header_text wow faddeInDown">Почему мы?</div>
                    </div>
                    <div class="description">
                        <p>Идеальное решение для клиентов</p>
                    </div>
                    <div class="body-outer">
                        <div class="body">
                            <div class="swipe-shadow-left"></div>
                            <div class="swipe-shadow-right"></div>
                            <div class="list">
                                <div class="item-outer wow bounceInRight">
                                    <div class="item">
                                        <div class="title">
                                            18
                                        </div>
                                        <div class="text">
                                            <p>городов</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-outer wow slideInLeft">
                                    <div class="item">
                                        <div class="title">
                                            12169
                                        </div>
                                        <div class="text">
                                            <p>Довольных клиентов</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-outer wow bounceInRight">
                                    <div class="item">
                                        <div class="title">
                                            220 000
                                        </div>
                                        <div class="text">
                                            <p>Оказанных услуг</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-outer wow slideInLeft">
                                    <div class="item">
                                        <div class="title">
                                            1230
                                        </div>
                                        <div class="text">
                                            <p>Дней работы</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-outer wow bounceInRight">
                                    <div class="item">
                                        <div class="title">
                                            26
                                        </div>
                                        <div class="text">
                                            <p>Лучших работников</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                    </div>


                </div>

            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-9 wow bounceInUp">
            <div class="layout columned columns-2 layout_center layout_17_id_19">
                <div class="layout column layout_19">



                    <div class="horizontal_block-19 widget-10 widget-type-block_horizontal editorElement layer-type-widget">
                        <div class="header"></div>
                        <div class="body">
                            <div class="detail">
                                <div class="title">О компании</div>
                                <div class="text">
                                    <p>Наша компания уже более 10 лет работает на рынке города и области!<br />

                                        У нас работают ПРОФЕССИОНАЛЫ высочайшего класса, которые смогут воплотить практически любую Вашу задумку в жизнь.<br />

                                        Проводим предварительную консультацию.<br />

                                        Наши цены весьма гибкие и лояльные, мы предлагаем различные сезонные акции, во время которых Вы можете получить скидку.<br />

                                        Наша работа окончательно убедит Вас в том, что мы — это то, что Вам нужно.<br />

                                        Звоните, и наши специалисты ответят на все Ваши вопросы.</p>
                                </div>
                                <div class="more"><a href="#" target="_blank">Узнать больше</a></div>

                            </div>
                            <div class="figure">
                                <div class="image">
                                    <a href="#" target="_blank"><img src="<?php echo $img1; ?>" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="layout column layout_18">
                    <!--ul class="accordion-18 widget-9 accordion-wr widget-type-accordion editorElement layer-type-widget" data-setting-close="1" data-setting-speed="400">
                        <li class="header">Наши услуги: </li>
                        <li class="accordion-item">
                            <div class="accordion-item-title full-click">
                                <div class="icon"></div>
                                <div class="title">Продажа автомобилей с пробегом</div>
                            </div>

                        </li>
                        <li class="accordion-item">
                            <div class="accordion-item-title full-click">
                                <div class="icon"></div>
                                <div class="title">Покупка подержанных автомобилей</div>
                            </div>

                        </li>
                        <li class="accordion-item">
                            <div class="accordion-item-title full-click">
                                <div class="icon"></div>
                                <div class="title">Разбор на запчасти</div>
                            </div>

                        </li>

                    </ul-->

                </div>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-11 wow bounceInRight">
            <div class="layout layout_center not-columned layout_23_id_24">



                <div class="horizontal_blocklist horizontal_blocklist-24 widget-13 horizontal_mode widget-type-block_list_horizontal editorElement layer-type-widget" data-slider="1" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="0,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".horizontal_blocklist-24 .pager-wrap" data-setting-prev_selector=".horizontal_blocklist-24 .prev" data-setting-next_selector=".horizontal_blocklist-24 .next" data-setting-count="2" data-setting-columns="3,2,2,1,1" data-setting-move="1" data-setting-prev_text="" data-setting-next_text="">
                    <div class="header">
                        <div class="header_text">Наши сотрудники</div>
                    </div>
                    <div class="description">
                        <p>всегда к вашим услугам</p>
                    </div>
                    <div class="body-outer">
                        <div class="body">
                            <div class="swipe-shadow-left"></div>
                            <div class="swipe-shadow-right"></div>
                            <div class="list">


                                <div class="item-outer">
                                    <div class="item">
                                        <div class="item_header">
                                        </div>
                                        <div class="item_body">
                                            <div class="item_figure">
                                                <div class="image">
                                                    <a href="#" target="_blank">
                                                        <img src="img/lib_323301_untitled-1_03_6.jpg" alt="">
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="item_detail">
                                                <div class="title">
                                                    Мария Соколова </div>
                                                <div class="text">
                                                    <p>Менеджер</p>
                                                </div>
                                                <div class="price-wrap">
                                                    <div class="more"><a href="#" target="_blank">подробнее</a></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="item-outer">
                                    <div class="item">
                                        <div class="item_header">
                                        </div>
                                        <div class="item_body">
                                            <div class="item_figure">
                                                <div class="image">
                                                    <a href="#" target="_blank">
                                                        <img src="img/lib_323301_untitled-1_03_5.jpg" alt="">
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="item_detail">
                                                <div class="title">
                                                    Андрей Соболев </div>
                                                <div class="text">
                                                    <p>Менеджер</p>
                                                </div>
                                                <div class="price-wrap">
                                                    <div class="more"><a href="#" target="_blank">подробнее</a></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="item-outer">
                                    <div class="item">
                                        <div class="item_header">
                                        </div>
                                        <div class="item_body">
                                            <div class="item_figure">
                                                <div class="image">
                                                    <a href="#" target="_blank">
                                                        <img src="img/lib_323301_untitled-1_03_6.jpg" alt="">
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="item_detail">
                                                <div class="title">
                                                    Анна Смирнова </div>
                                                <div class="text">
                                                    <p>Менеджер</p>
                                                </div>
                                                <div class="price-wrap">
                                                    <div class="more"><a href="#" target="_blank">подробнее</a></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div class="item-outer">
                                    <div class="item">
                                        <div class="item_header">
                                        </div>
                                        <div class="item_body">
                                            <div class="item_figure">
                                                <div class="image">
                                                    <a href="#" target="_blank">
                                                        <img src="img/lib_323301_untitled-1_03_5.jpg" alt="">
                                                    </a>
                                                </div>
                                            </div>
                                            <div class="item_detail">
                                                <div class="title">
                                                    Андрей Соболев </div>
                                                <div class="text">
                                                    <p>Менеджер</p>
                                                </div>
                                                <div class="price-wrap">
                                                    <div class="more"><a href="#" target="_blank">подробнее</a></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                    </div>
                    <div class="controls">
                        <span class="prev"></span>
                        <span class="next"></span>
                    </div>

                    <div class="pager-wrap"></div>

                </div>

            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-12">
            <div class="layout layout_center not-columned layout_25_id_26">




                <div class="bx-reviews reviews-26 widget-14 horizontal widget-type-reviews editorElement layer-type-widget wow slideInLeft" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="0,0,0,0,0" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".reviews-26 .pager-wrap" data-setting-prev_selector=".reviews-26 .prev" data-setting-next_selector=".reviews-26 .next" data-setting-count="2" data-setting-columns="1,1,1,2,1" data-setting-move="1" data-setting-prev_text="" data-setting-next_text="">
                    <div class="header">
                        <div class="header_text">Отзывы клиентов</div>
                        <a class="all" href="#" target="_blank">Читать все</a>
                    </div>
                    <div class="list-wr">
                        <div class="swipe-shadow-left"></div>
                        <div class="swipe-shadow-right"></div>
                        <div class="body">
                            <div class="list">
                                <div class="item-outer">
                                    <div class="item ">
                                        <div class="image">
                                            <img src="img/lib_323301_untitled-1_03_8.jpg" alt="">
                                        </div>
                                        <div class="author">
                                            <span class="name">Васин Иван</span>
                                        </div>
                                        <div class="text">
                                             Очень благодарны Ларисе Михайловне, Екатерине Михайловне за чуткое отношение, добрый настрой и профессионализм.</div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item ">
                                        <div class="image">
                                            <img src="img/lib_323301_untitled-1_03_5.jpg" alt="">
                                        </div>
                                        <div class="author">
                                            <span class="name">Арбузов Михаил</span>
                                        </div>
                                        <div class="text">Очень доволен работой. Спасибо большое! Все четко, организованно и качественно. Теперь мы довольные и счастливые!!</div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item ">
                                        <div class="image">
                                            <img src="img/lib_323301_untitled-1_03_7.jpg" alt="">
                                        </div>
                                        <div class="author">
                                            <span class="name">Ефремова Алина</span>
                                        </div>
                                        <div class="text">Большое спасибо! Ребята — молодцы, работали профессионально, четко, слаженно, быстро,
                                            аккуратно и с позитивным настроением Обязательно порекомендую компанию своим друзьям!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer"></div>

                </div>

            </div>
        </div>
        <div class="layout layout_center not-columned layout_center_2_id_3_1">
            <div class="editorElement layer-type-block ui-droppable block-13">
                <div class="layout layout_center not-columned layout_27_id_28">




                    <div class="form-28 widget-15 horizontal_mode widget-type-form_adaptive editorElement layer-type-widget">
                        <div class="form__header">ЕСЛИ ВЫ ХОТИТЕ ЧТО-ТО УЗНАТЬ, ПРЕДЛОЖИТЬ ИЛИ ОБСУДИТЬ, СВЯЖИТЕСЬ С НАМИ</div>
                        <div class="form__body" data-api-type="form" data-api-url="/my/s3/xapi/public/?method=form/postform&param[form_id]=41766041">
                            <form method="post">
                                <input type="hidden" name="_form_item" value="28">
                                <input type="hidden" name="form_id" value="41766041">
                                <input type="hidden" name="tpl" value="db:title.tpl">
                                <div class="form-table">
                                    <div class="form-tbody">
                                        <div class="form-item-group group-text">
                                            <div class="form-item form-text phone">
                                                <div class="form-item__body">
                                                    <input class="wm-input-default" placeholder="* Ваш  телефон: " type="text" size="" maxlength="100" value="" name="d[0]" id="d[0]" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-tfoot">
                                        <div class="form-item-group group-button">
                                            <div class="form-item form-submit">
                                                <div class="form-item__body">
                                                    <button class="wm-input-default" type="submit"><span>Отправить</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-14">
            <div class="widget-23 " id="map-bottom" style="height: 500px"><script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=3IzFFOGOXCQE9ZQHO8TAHhMQXm3ZyLWM&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>
            </div>
            <div class="layout layout_center not-columned layout_center_29_id_40_1">
                <div class="widget-22 horizontal menu-39 wm-widget-menu widget-type-menu_horizontal editorElement layer-type-widget" data-screen-button="" data-responsive-tl="button" data-responsive-tp="button" data-responsive-ml="columned" data-more-text="...">

                    <div class="menu-button">
                        Меню
                    </div>

                    <div class="menu-scroll">
                        <ul>
                            <li class="opened active menu-item"><a href="#"><span class="menu-item-text">Главная</span></a></li>
                            <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">Наши услуги</span></a></li>
                            <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">Прайс-лист</span></a>
                                <ul class="level-2">
                                    <li><a href="#" target="_blank">пункт меню</a></li>
                                    <li><a href="#" target="_blank">пункт меню</a></li>
                                    <li><a href="#" target="_blank">пункт меню</a></li>
                                    <li><a href="#" target="_blank">пункт меню</a></li>
                                    <li><a href="#" target="_blank">пункт меню</a></li>
                                    <li><a href="#" target="_blank">пункт меню</a></li>
                                </ul>
                            </li>
                            <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">О компании</span></a></li>
                            <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">Портфолио</span></a></li>
                            <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">Отзывы</span></a></li>
                            <li class="menu-item"><a href="#" target="_blank"><span class="menu-item-text">Контакты</span></a></li>
                        </ul>
                    </div>

                </div>
                <div class="editorElement layer-type-block ui-droppable block-16">
                    <div class="layout column layout_35">
                        <div class="editorElement layer-type-block ui-droppable block-17">
                            <div class="layout column layout_38">
                                <div class="address-38 widget-21 address-block contacts-block widget-type-contacts_address editorElement layer-type-widget">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg38">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg38" class="tgl-but" type="checkbox">
                                        <div class="block-body-drop">
                                            <div class="cell-text">
                                                <div class="title">Адрес:</div>
                                                <div class="text_body">
                                                    г. Москва
                                                    Красная Площадь, дом 1
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="layout column layout_37">
                                <div class="phones-37 widget-20 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg-phones-6">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg-phones-6" class="tgl-but" type="checkbox">
                                        <div class="block-body-drop">
                                            <div class="cell-text">
                                                <div class="title">Телефон:</div>
                                                <div class="text_body">
                                                    <div><a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a></div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="layout column layout_36">
                                <div class="button-36 widget-19 widget-type-button editorElement layer-type-widget">
                                    <a href="#" data-api-type="popup-form" data-api-url="/my/s3/xapi/public/?method=form/postform&param[form_id]=41765641&param[tpl]=wm.form.popup.tpl&placeholder=title&tit_en=" data-wr-class="popover-wrap-36"><span>Заказать звонок</span></a>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="layout column layout_34">

                    </div>
                </div>
                <div class="editorElement layer-type-block ui-droppable block-15">
                    <div class="site-copyright widget-17 widget-type-site_copyright editorElement layer-type-widget">
                        Copyright &copy; 2017

                    </div>

                </div>
            </div>
        </div>
    </div>
</body>

</html>
