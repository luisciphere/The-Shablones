<?php
include '../config.php';
?>

<!doctype html>

<html lang="ru">

<head>

    <meta charset="utf-8">

    <meta name="robots" content="all">
    <title><?php echo $company_name ?></title>
    <meta name="description" content="Главная">

    <meta name="keywords" content="Главная">

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
    <style>

        .right-image{
            position: absolute;
            right: 0;
            top: 0;
            width: 340px;
            height: 100%;
            background: url('<?php echo $img1; ?>') left 50% top 50% / cover no-repeat;
        }
    </style>

</head>

<body>

    <div class="wrapper editorElement layer-type-wrapper">
        <div class="layout layout_2_id_6">
            <div class="layout layout_center not-columned layout_center_2_id_6_0">
                <div class="editorElement layer-type-block ui-droppable block-2">
                    <div class="layout layout_6_id_3 wow slideInLeft">
                        <div class="site-name widget-2 widget-type-site_name editorElement layer-type-widget">
                            <a href="#">
                                <div class="sn-wrap">
                                    <div class="sn-text">
                                        <?php echo $company_name; ?>
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div class="site-description widget-3 widget-type-site_description editorElement layer-type-widget">
                            <?php echo $usluga; ?>
                        </div>
                    </div>
                    <div class="layout columned columns-2 layout_6_id_8">
                        <div class="layout column layout_8">
                            <div class="editorElement layer-type-block ui-droppable block-3">
                                <div class="phones-5 widget-4 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget wow fadeInDown">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg-phones-5">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg-phones-5" class="tgl-but" type="checkbox">
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
                                <div class="address-7 widget-5 address-block contacts-block widget-type-contacts_address editorElement layer-type-widget wow fadeInUp">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg7">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg7" class="tgl-but" type="checkbox">
                                        <div class="block-body-drop">
                                            <div class="cell-text">
                                                <div class="title">Адрес:</div>
                                                <div class="text_body">
                                                    г. Москва<br />
                                                    Красная Площадь, дом 1
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="layout column layout_9 wow slideInRight">
                            <div class="button-9 widget-6 widget-type-button editorElement layer-type-widget">
                                <a href="#" data-api-type="popup-form" data-api-url="/my/s3/xapi/public/?method=form/postform&param[form_id]=41967041&param[tpl]=wm.form.popup.tpl&placeholder=title&tit_en=" data-wr-class="popover-wrap-9"><span>Заказать звонок</span></a>
                            </div>


                        </div>
                    </div>
                </div>
                <div class="widget-7 horizontal menu-11 wm-widget-menu widget-type-menu_horizontal editorElement layer-type-widget" data-screen-button="more" data-responsive-tl="button" data-responsive-tp="button" data-responsive-ml="columned" data-more-text="…">

                    <div class="menu-button">
                        Меню
                    </div>

                    <div class="menu-scroll">
                        <ul>
                            <li class="opened active menu-item"><a href="#"><span class="menu-item-text">Главная</span></a></li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Наши услуги</span></a></li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Прайс-лист</span></a>
                                <ul class="level-2">
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                </ul>
                            </li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">О компании</span></a></li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Портфолио</span></a></li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Отзывы</span></a></li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Контакты</span></a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="editorElement layer-type-block ui-droppable block-4"></div>
            <div class="layout layout_center not-columned layout_center_2_id_6_2">
                <div class="editorElement layer-type-block ui-droppable block-5"></div>
            </div>
        </div>
        <div class="layout layout_center not-columned layout_center_2_id_2_id_6_1">
            <div class="layout columned columns-2 layout_2_id_2_id_15">
                <div class="layout layout_2_id_15">



                    <div class="horizontal_blocklist horizontal_blocklist-15 widget-10 horizontal_mode widget-type-block_list_horizontal editorElement layer-type-widget wow bounceInLeft" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".horizontal_blocklist-15 .pager-wrap" data-setting-prev_selector=".horizontal_blocklist-15 .prev" data-setting-next_selector=".horizontal_blocklist-15 .next" data-setting-count="2" data-setting-columns="auto,2,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
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
                                                <div class="item_detail">
                                                    <div class="title">
                                                        15 % </div>
                                                    <div class="text">
                                                        <p>самые низкие цены!</p>
                                                    </div>
                                                    <div class="price-wrap">
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
                                                <div class="item_detail">
                                                    <div class="title">
                                                        8000 </div>
                                                    <div class="text">
                                                        <p>клиентов</p>
                                                    </div>
                                                    <div class="price-wrap">
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
                                                <div class="item_detail">
                                                    <div class="title">
                                                        15 лет </div>
                                                    <div class="text">
                                                        <p>работы на рынке</p>
                                                    </div>
                                                    <div class="price-wrap">
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
                                                <div class="item_detail">
                                                    <div class="title">
                                                        15 </div>
                                                    <div class="text">
                                                        <p>партнеров</p>
                                                    </div>
                                                    <div class="price-wrap">
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


                    </div>
                    <div class="nTabs tabs-16 widget-11 widget-type-tabs editorElement layer-type-widget wow fadeInUp" data-n-tabs-effect="fade" data-n-tabs-event="click" data-n-tabs-duration="400">
                        <ul>
                            <li class="panel-item">
                                <span class="title"><?php echo $serv1; ?></span>
                            </li>
                            <li class="panel-item">
                               <span class="title"><?php echo $serv2; ?></span>
                            </li>
                            <li class="panel-item">
                               <span class="title"><?php echo $serv3; ?></span>
                            </li>
                        </ul>
                        <div>
                            <div class="area-item">
                                <p>Сотрудничайте с лидером рынка! К нам обратилось уже более 5000 клиентов. Большой опыт!   </p>
                                <div class="more"><a href="http://dcent.ru/nopage/" target="_blank">подробнее</a></div>
                            </div>
                            <div class="area-item">
                                <p>Внимательное отношение к каждому покупателю. Отношения с клиентами построены на принципах взаимного доверия и уважения.  </p>
                                <div class="more"><a href="http://dcent.ru/nopage/" target="_blank">подробнее</a></div>
                            </div>
                            <div class="area-item">
                                <p>Вы экономите свое время, потому что мы идем в ногу со временем и используем только передовые технологии.</p>
                                <div class="more"><a href="http://dcent.ru/nopage/" target="_blank">подробнее</a></div>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="layout layout_2_id_14">
                    <div class="widget-9 slider-14 slider widget-type-slider editorElement layer-type-widget  wow slideInRight" data-setting-pause="4000" data-setting-mode="horizontal" data-setting-auto="" data-setting-controls="1" data-setting-pager="1" data-setting-pager_selector=".slider-14 .slider-pager" data-setting-prev_selector=".slider-14 .slider-prev" data-setting-next_selector=".slider-14 .slider-next" data-setting-prev_text="" data-setting-next_text="">
                        <div class="slider-inner">
                            <div class="slider-item-1 slider-item" data-src="<?php echo $img1; ?>">
                            </div>
                            <div class="slider-item-2 slider-item" data-src="<?php echo $img2; ?>">
                            </div>
                            <div class="slider-item-3 slider-item" data-src="<?php echo $img1; ?>">
                            </div>
                            <div class="slider-item-4 slider-item" data-src="<?php echo $img2; ?>">
                            </div>
                        </div>
                        <div class="slider-controls">
                            <span class="slider-prev"></span>
                            <span class="slider-next"></span>
                        </div>
                        <div class="slider-pager-wrap">
                            <div class="slider-pager">
                                <a href="" data-slide-index="0"></a>
                                <a href="" data-slide-index="1"></a>
                                <a href="" data-slide-index="2"></a>
                                <a href="" data-slide-index="3"></a>
                            </div>
                        </div>
                    </div>

                    <div class="editorElement layer-type-block ui-droppable block-7  wow fadeInRight">
                        <h1 class="h1 widget-12 widget-type-h1 editorElement layer-type-widget">
                        О компании
                    </h1>
                        <article class="content-20 content widget-13 widget-type-content editorElement layer-type-widget">
                            <p>
                                <a href="dcent.ru/nopage/" class="highslide" onclick="return hs.expand(this)"><img height="190" src="<?php echo $img2; ?>" style="border-width: 0px; float: left; margin: 10px;" width="286" /></a>Наша компания уже более 10 лет работает на рынке города и области!

                                У нас работают ПРОФЕССИОНАЛЫ высочайшего класса, которые смогут воплотить практически любую Вашу задумку в жизнь.

                                Проводим предварительную консультацию.

                                Наши цены весьма гибкие и лояльные, мы предлагаем различные сезонные акции, во время которых Вы можете получить скидку.

                                Наша работа окончательно убедит Вас в том, что мы — это то, что Вам нужно.

                                Звоните, и наши специалисты ответят на все Ваши вопросы.</p>
                            <p>
                                <a href="http://dcent.ru/nopage/" class="highslide" onclick="return hs.expand(this)"><img height="180" src="<?php echo $img1; ?>" style="border-width: 0px; float: right; margin: 10px;" width="270" /></a>
                            </p>
                            <p>Наша компания уже более 10 лет работает на рынке города и области!

                                У нас работают ПРОФЕССИОНАЛЫ высочайшего класса, которые смогут воплотить практически любую Вашу задумку в жизнь.

                                Проводим предварительную консультацию.

                                Наши цены весьма гибкие и лояльные, мы предлагаем различные сезонные акции, во время которых Вы можете получить скидку.

                                Наша работа окончательно убедит Вас в том, что мы — это то, что Вам нужно.

                                Звоните, и наши специалисты ответят на все Ваши вопросы.</p>


                        </article>
                    </div>
                </div>
            </div>
        </div>
        <div class="layout layout_2_id_23">
            <div class="editorElement layer-type-block ui-droppable block-8  ">
                <div class="layout layout_center not-columned layout_23_id_24">
                    <div class="editorElement layer-type-block ui-droppable block-9">



                        <div class="horizontal_blocklist horizontal_blocklist-22 widget-15 horizontal_mode widget-type-block_list_horizontal editorElement layer-type-widget wow slideInLeft" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".horizontal_blocklist-22 .pager-wrap" data-setting-prev_selector=".horizontal_blocklist-22 .prev" data-setting-next_selector=".horizontal_blocklist-22 .next" data-setting-count="2" data-setting-columns="auto,2,2,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                            <div class="header">
                                <div class="header_text">Наши преимущества</div>
                            </div>
                            <div class="description">У нас Вы найдете первоклассное качество, низкие цены и ответственный подход к работе!</div>
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
                                                            <img src="img/clock.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="item_detail">
                                                        <div class="title">
                                                            Высокое качество </div>
                                                        <div class="text">
                                                            <p>Мы заботимся о наших клиентах и гарантируем лучшее качество.</p>
                                                        </div>
                                                        <div class="price-wrap">
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
                                                            <img src="img/ico3.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="item_detail">
                                                        <div class="title">
                                                            Низкая цена </div>
                                                        <div class="text">
                                                            <p>Мы всегда готовы предложить своим клиентам одни из лучших цен.</p>
                                                        </div>
                                                        <div class="price-wrap">
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
                                                            <img src="img/ico2.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="item_detail">
                                                        <div class="title">
                                                            Минимальные сроки </div>
                                                        <div class="text">
                                                            <p>Постоянно работаем над увеличением скорости выполнения заказов.</p>
                                                        </div>
                                                        <div class="price-wrap">
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
                                                            <img src="img/ico4.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="item_detail">
                                                        <div class="title">
                                                            Скидки постоянным клиентам </div>
                                                        <div class="text">
                                                            <p>Приготовим для Вас индивидуальное предложение!</p>
                                                        </div>
                                                        <div class="price-wrap">
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <div class="right-image wow shake"></div>
                    </div>
                    <div class="layout columned columns-2 layout_23_id_27">
                        <div class="layout column layout_27">




                            <div class="blocklist blocklist-27 widget-17 horizontal_mode widget-type-block_list editorElement layer-type-widget wow bounceInRight" data-slider="1" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="0,0,0,0,0" data-setting-pager_selector=".blocklist-27 .pager-wrap" data-setting-prev_selector=".blocklist-27 .prev" data-setting-next_selector=".blocklist-27 .next" data-setting-count="3" data-setting-columns="auto,1,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                                <div class="header">
                                    <div class="header_text">Отзывы</div>
                                </div>
                                <div class="body-outer">
                                    <div class="body">
                                        <div class="swipe-shadow-left"></div>
                                        <div class="swipe-shadow-right"></div>
                                        <div class="list">
                                            <div class="item-outer">
                                                <div class="item">
                                                    <div class="title">
                                                        Смолякова Ирина
                                                    </div>
                                                    <div class="text">
                                                        <p>Очень благодарны Ларисе Михайловне, Екатерине Михайловне за чуткое отношение, добрый настрой и профессионализм.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="item-outer">
                                                <div class="item">
                                                    <div class="title">
                                                        Арбузова Светлана
                                                    </div>
                                                    <div class="text">
                                                        <p>Очень довольна работой. Спасибо большое! Все четко, организованно и качественно. Теперь мы довольные и счастливые!!</p>
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
                        <div class="layout column layout_30">




                            <div class="form-30 widget-19 vertical_mode widget-type-form_adaptive editorElement layer-type-widget wow bounceInLeft">
                                <div class="form__header">Заявка он-лайн!</div>
                                <div class="form__text">Оставьте заявку и наши специалисты свяжутся с Вами в самое ближайшее время</div>
                                <div class="form__body" data-api-type="form"
                                    <form method="post">
                                        <input type="hidden" name="_form_item" value="30">
                                        <input type="hidden" name="form_id" value="41967441">
                                        <input type="hidden" name="tpl" value="db:title.tpl">
                                        <div class="form-table">
                                            <div class="form-tbody">
                                                <div class="form-item-group group-text">
                                                    <div class="form-item form-text name">
                                                        <div class="form-item__body">
                                                            <input class="wm-input-default" placeholder="* Ваше имя: " type="text" size="" maxlength="100" value="" name="d[0]" id="d[0]" />
                                                        </div>
                                                    </div>
                                                    <div class="form-item form-text phone">
                                                        <div class="form-item__body">
                                                            <input class="wm-input-default" placeholder="* Телефон: " type="text" size="" maxlength="100" value="" name="d[1]" id="d[1]" />
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
                            <script src="shared/misc/calendar.gen.js" type="text/javascript" language="javascript" charset="utf-8"></script>

                        </div>
                    </div>
                </div>
            </div>
            <div class="map">
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=3IzFFOGOXCQE9ZQHO8TAHhMQXm3ZyLWM&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>

            </div>
            <div class="layout layout_center not-columned layout_center_2_id_23_1">
                <div class="editorElement layer-type-block ui-droppable block-15">
                    <div class="layout column layout_31">
                        <nav class="menu-columns-wrap menuColumns menu-col-31 widget-20 wm-widget-menu widget-type-menu_columns editorElement layer-type-widget" data-columns="3,4,3,2,1" data-has_delimiters="0,0">
                            <ul class="menu-columns-items">
                                <li class="opened active menu-item"><a href="#"><span class="menu-item-text">Главная</span></a></li>
                                <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Наши услуги</span></a></li>
                                <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Прайс-лист</span></a></li>
                                <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">О компании</span></a></li>
                                <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Портфолио</span></a></li>
                                <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Отзывы</span></a></li>
                                <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Контакты</span></a></li>
                            </ul>
                            <div class="menu-columns-content"></div>

                        </nav>
                    </div>
                    <div class="layout layout_44_id_43">
                        <div class="editorElement layer-type-block ui-droppable block-14">
                            <div class="site-copyright widget-27 widget-type-site_copyright editorElement layer-type-widget">
                                Copyright &copy; 2017

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="side-panel side-panel-45 widget-type-side_panel editorElement layer-type-widget widget-30" data-layers="['widget-7':['tablet-landscape':'inSide','tablet-portrait':'inSide','mobile-landscape':'inSide','mobile-portrait':'inSide']]">
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
                <div class="side-panel-content-inner"></div>
            </div>
        </div>
    </div>
</body>

</html>
