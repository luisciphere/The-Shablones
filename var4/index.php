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
    <style>
        .block-13{
            background: url(<?php echo $img1; ?>) 50% 0 no-repeat;

        }
    </style>

    <script src="js/wow.min.js"></script>
    <script>
        new WOW().init();
    </script>
    <link rel="stylesheet" href="css/animate.css" type="text/css">

</head>

<body>

    <div class="wrapper editorElement layer-type-wrapper">
        <div class="side-panel side-panel-54 widget-type-side_panel editorElement layer-type-widget widget-30" data-layers="['widget-29':['tablet-landscape':'inSide','tablet-portrait':'inSide','mobile-landscape':'inSide','mobile-portrait':'inSide'],'widget-18':['tablet-landscape':'onTop','tablet-portrait':'onTop','mobile-landscape':'onTop','mobile-portrait':'onTop']]">
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
        <div class="editorElement layer-type-block ui-droppable block-14">
            <div class="layout layout_center not-columned layout_29_id_39">
                <div class="editorElement layer-type-block ui-droppable block-18">
                    <div class="layout column layout_30 wow slideInLeft">
                        <div class="editorElement layer-type-block ui-droppable block-15">
                            <div class="site-name widget-17 widget-type-site_name editorElement layer-type-widget">
                                <a href="#">
                                    <div class="sn-wrap">
                                        <div class="sn-text">
                                            <?php echo $company_name; ?>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div class="site-description widget-16 widget-type-site_description editorElement layer-type-widget">
                               <!-- Продажа и скупка автомобилей
  -->                          </div>
                            <div class="editorElement layer-type-text text-2">
                                <a href=""><?php echo $email; ?></a>
                            </div>
                        </div>
                    </div>
                    <div class="layout column layout_34  wow slideInRight">
                        <div class="editorElement layer-type-block ui-droppable block-16">
                            <div class="layout column layout_38">
                                <div class="schedule-38 widget-20 schedule-block contacts-block widget-type-contacts_schedule editorElement layer-type-widget">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg-schedule-38">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg-schedule-38" class="tgl-but" type="checkbox">
                                        <div class="block-body-drop">
                                            <div class="cell-text">
                                                <div class="title">График работы:</div>
                                                <div class="text_body">
                                                    Звонить с 9:00 до 18:00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="layout column layout_35">
                                <div class="editorElement layer-type-block ui-droppable block-17">
                                    <div class="phones-37 widget-19 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget">
                                        <div class="inner">
                                            <label class="cell-icon" for="tg-phones-37">
                                                <div class="icon"></div>
                                            </label>
                                            <input id="tg-phones-37" class="tgl-but" type="checkbox">
                                            <div class="block-body-drop">
                                                <div class="cell-text">
                                                    <div class="title"><?php echo $phone; ?></div>
                                                    <div class="text_body">
                                                        <div><a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="button-36 widget-18 widget-type-button editorElement layer-type-widget">
                                        <a href="#" data-api-type="popup-form" data-api-url="/my/s3/xapi/public/?method=form/postform&param[form_id]=44588441&param[tpl]=wm.form.popup
        .tpl&placeholder=title&tit_en=&sh_err_msg=" data-wr-class="popover-wrap-36"><span>Обратный звонок</span></a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget-29 horizontal menu-53 wm-widget-menu widget-type-menu_horizontal editorElement layer-type-widget" data-screen-button="none" data-responsive-tl="button" data-responsive-tp="button" data-responsive-ml="columned" data-more-text="..." data-child-icons="NaN">

                    <div class="menu-button">
                        Меню
                    </div>

                    <div class="menu-scroll">
                        <ul>
                            <li class="opened active menu-item"><a href="#"><span class="menu-item-text">Главная</span></a></li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Наши&nbsp;услуги</span></a></li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Прайс&nbsp;-&nbsp;лист</span></a>
                                <ul class="level-2">
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                    <li><a href="http://dcent.ru/nopage/" target="_blank">пункт меню</a></li>
                                </ul>
                            </li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">О&nbsp;компании</span></a></li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Портфолио</span></a></li>
                            <li class="menu-item"><a href="http://dcent.ru/nopage/" target="_blank"><span class="menu-item-text">Контакты</span></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-12">
            <div class="editorElement layer-type-block ui-droppable block-13">
                <div class="layout layout_center not-columned layout_27_id_28">




                    <div class="blocklist blocklist-28 widget-15 horizontal_mode widget-type-block_list editorElement layer-type-widget   wow bounceInUp" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".blocklist-28 .pager-wrap" data-setting-prev_selector=".blocklist-28 .prev" data-setting-next_selector=".blocklist-28 .next" data-setting-count="3" data-setting-columns="1,1,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                        <div class="body-outer">
                            <div class="body">
                                <div class="swipe-shadow-left"></div>
                                <div class="swipe-shadow-right"></div>
                                <div class="list">
                                    <div class="item-outer">
                                        <div class="item">
                                            <div class="title">
                                                <? echo $spec; ?></div>
                                            <div class="text">
                                                <p>Экономия! Выгода 15%!</p>
                                            </div>
                                            <div class="more"><a href="http://click5.ru/nopage/" target="_blank">Забронировать</a></div>
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
            <div class="layout layout_center not-columned layout_center_25_id_27_1">
                <div class="editorElement layer-type-block ui-droppable block-11">




                    <div class="form-23 widget-13 lined_mode widget-type-form_adaptive editorElement layer-type-widget">
                        <div class="form__header">Оформить заявку</div>
                        <div class="form__body" data-api-type="form" data-api-url="/my/s3/xapi/public/?method=form/postform&param[form_id]=44588641">
                            <form method="post">
                                <input type="hidden" name="_form_item" value="23">
                                <input type="hidden" name="form_id" value="44588641">
                                <input type="hidden" name="tpl" value="db:title.tpl">
                                <div class="form-table">
                                    <div class="form-tbody">
                                        <div class="form-item-group group-text">
                                            <div class="form-item form-text name">
                                                <div class="form-item__body">
                                                    <input class="wm-input-default" placeholder="* Ваше имя: " type="text" size="1" maxlength="Array" value="" name="d[0]" id="d[0]" required />
                                                </div>
                                            </div>
                                            <div class="form-item form-text phone">
                                                <div class="form-item__body">
                                                    <input class="wm-input-default" placeholder="* Телефон: " type="text" size="1" maxlength="Array" value="" name="d[1]" id="d[1]" required />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-item-group group-textarea">
                                            <div class="form-item form-textarea comments">
                                                <label class="form-item__body">
                                                    <textarea class="wm-input-default" placeholder=" Комментарии: " cols="1" rows="1" name="d[2]" id="d[2]"></textarea>
                                                </label>
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




                <div class="blocklist blocklist-26 widget-14 horizontal_mode widget-type-block_list editorElement layer-type-widget wow bounceInUp" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="0,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".blocklist-26 .pager-wrap" data-setting-prev_selector=".blocklist-26 .prev" data-setting-next_selector=".blocklist-26 .next" data-setting-count="3" data-setting-columns="4,2,2,2,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                    <div class="body-outer">
                        <div class="body">
                            <div class="swipe-shadow-left"></div>
                            <div class="swipe-shadow-right"></div>
                            <div class="list">
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="title">
                                            <a href="http://dcent.ru/nopage/" target="_blank">                                             Высокое качество
                                                </a> </div>
                                        <div class="image">
                                            <a href="http://dcent.ru/nopage/" target="_blank"> <img src="img/untitled-1_03.png" alt="">
                                            </a>
                                        </div>
                                        <div class="text">
                                            <p>Мы заботимся о наших клиентах и гарантируем лучшее качество.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="title">
                                            <a href="http://dcent.ru/nopage/" target="_blank">                                             Низкая цена
                                                </a> </div>
                                        <div class="image">
                                            <a href="http://dcent.ru/nopage/" target="_blank"> <img src="img/untitled-1_03_1.png" alt="">
                                            </a>
                                        </div>
                                        <div class="text">
                                            <p>Мы всегда готовы предложить своим клиентам одни из лучших цен.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="title">
                                            <a href="http://dcent.ru/nopage/" target="_blank">                                             Быстро
                                                </a> </div>
                                        <div class="image">
                                            <a href="http://dcent.ru/nopage/" target="_blank"> <img src="img/untitled-1_03_2.png" alt="">
                                            </a>
                                        </div>
                                        <div class="text">
                                            <p>Постоянно работаем над увеличением скорости выполнения заказов.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="title">
                                            <a href="http://dcent.ru/nopage/" target="_blank">                                             Скидки клиентам
                                                </a> </div>
                                        <div class="image">
                                            <a href="http://dcent.ru/nopage/" target="_blank"> <img src="img/untitled-1_03_3.png" alt="">
                                            </a>
                                        </div>
                                        <div class="text">
                                            <p>Приготовим для Вас индивидуальное предложение!</p>
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
        <div class="layout layout_center not-columned layout_center_2_id_29_1  wow slideInLeft">
            <div class="editorElement layer-type-block ui-droppable block-9">
                <h1 class="h1 widget-10 widget-type-h1 editorElement layer-type-widget">
                О компании
            </h1>
                <article class="content-20 content widget-11 widget-type-content editorElement layer-type-widget">
                    <div>
                        <p>Наша компания уже более 10 лет работает на рынке города и области!<br />

                            У нас работают ПРОФЕССИОНАЛЫ высочайшего класса, которые смогут воплотить практически любую Вашу задумку в жизнь.<br />

                            Проводим предварительную консультацию.<br />

                            Наши цены весьма гибкие и лояльные, мы предлагаем различные сезонные акции, во время которых Вы можете получить скидку.<br />

                            Наша работа окончательно убедит Вас в том, что мы — это то, что Вам нужно.<br />

                            Звоните, и наши специалисты ответят на все Ваши вопросы.</p>
                    </div>
                    <div></div>
                </article>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-10">
            <div class="layout layout_center not-columned layout_22_id_21">




                <div class="news-21 news-block widget-12 horizontal widget-type-news editorElement layer-type-widget   wow slideInLeft" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".news-21 .pager-wrap" data-setting-prev_selector=".news-21 .prev" data-setting-next_selector=".news-21 .next" data-setting-count="3" data-setting-columns="auto,3,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                    <div class="news__header">
                        <div class="news__title">Наши услуги</div>
                    </div>
                    <div class="body-outer">
                        <div class="body">
                            <div class="swipe-shadow-left"></div>
                            <div class="swipe-shadow-right"></div>
                            <div class="news__list">
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="item__image">
                                            <a href="http://dcent.ru/nopage/" target="_blank">
                                                <img src="<?php echo $img1; ?>" alt="">
                                            </a>
                                        </div>
                                        <div class="item__title"><a href="http://dcent.ru/nopage/" target="_blank"><?php echo $serv1; ?></a></div>
                                        <div class="item__text">
                                            <p>Сотрудничайте с лидером рынка! К нам обратилось уже более 5000 клиентов. Большой опыт!
                                            </p>
                                        </div>
                                        <div class="item__more"><a class="item__more_link" href="novost-2">подробнее</a></div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="item__image">
                                            <a href="http://dcent.ru/nopage/" target="_blank">
                                                <img src="<?php echo $img1; ?>" alt="">
                                            </a>
                                        </div>
                                        <div class="item__title"><a href="http://dcent.ru/nopage/" target="_blank"><?php echo $serv2; ?></a></div>
                                        <div class="item__text">
                                            <p>Внимательное отношение к каждому покупателю. Отношения с клиентами построены на принципах взаимного доверия и уважения.
                                            </p>
                                        </div>
                                        <div class="item__more"><a class="item__more_link" href="novost-2">подробнее</a></div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="item__image">
                                            <a href="http://dcent.ru/nopage/" target="_blank">
                                                <img src="<?php echo $img1; ?>" alt="">
                                            </a>
                                        </div>
                                        <div class="item__title"><a href="http://dcent.ru/nopage/" target="_blank"><?php echo $serv3; ?></a></div>

                                        <div class="item__text">
                                            <p>Вы экономите свое время, потому что мы идем в ногу со временем и используем только передовые технологии.</p>
                                        </div>
                                        <div class="item__more"><a class="item__more_link" href="novost-1">подробнее</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="news__footer"> </div>


                </div>

            </div>
        </div>

        <div class="maps"><script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=3IzFFOGOXCQE9ZQHO8TAHhMQXm3ZyLWM&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-19">
            <div class="editorElement layer-type-block ui-droppable block-20">
                <div class="layout layout_center not-columned layout_41_id_42">



                    <div class="horizontal_blocklist horizontal_blocklist-42 widget-21 horizontal_mode widget-type-block_list_horizontal editorElement layer-type-widget   wow slideInRight" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".horizontal_blocklist-42 .pager-wrap" data-setting-prev_selector=".horizontal_blocklist-42 .prev" data-setting-next_selector=".horizontal_blocklist-42 .next" data-setting-count="2" data-setting-columns="3,3,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
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
                                                        <img src="img/lib_355801_50971_30_3.png" alt="">
                                                    </div>
                                                </div>
                                                <div class="item_detail">
                                                    <div class="title">
                                                        Выполним ваш заказ<br /> точно в срок </div>
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
                                                        <img src="img/lib_355801_50971_30_4.png" alt="">
                                                    </div>
                                                </div>
                                                <div class="item_detail">
                                                    <div class="title">
                                                        Предлагаем лучшие<br /> цены на рынке </div>
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
                                                        <img src="img/lib_355801_50971_30_5.png" alt="">
                                                    </div>
                                                </div>
                                                <div class="item_detail">
                                                    <div class="title">
                                                        Обеспечим комплексный <br />подход</div>
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

                </div>
            </div>
            <div class="editorElement layer-type-block ui-droppable block-21">
                <div class="layout columned columns-2 layout_center layout_43_id_45">
                    <div class="layout column layout_45">
                        <div class="editorElement layer-type-block ui-droppable block-22">
                            <div class="layout layout_45_id_48">
                                <div class="phones-48 widget-25 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg-phones-48">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg-phones-48" class="tgl-but" type="checkbox">
                                        <div class="block-body-drop">
                                            <div class="cell-text">
                                                <div class="title">Телефон:</div>
                                                <div class="text_body">
                                                    <div><a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a></div>
                                                    <div><a href="mailto:<?php echo $email; ?>"><?php echo $email; ?></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="schedule-47 widget-24 schedule-block contacts-block widget-type-contacts_schedule editorElement layer-type-widget">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg-schedule-47">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg-schedule-47" class="tgl-but" type="checkbox">
                                        <div class="block-body-drop">
                                            <div class="cell-text">
                                                <div class="title">График работы:</div>
                                                <div class="text_body">
                                                    Звонить с 9:00 до 18:00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="layout column layout_46">
                                <div class="address-46 widget-23 address-block contacts-block widget-type-contacts_address editorElement layer-type-widget">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg46">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg46" class="tgl-but" type="checkbox">
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
                    </div>
                    <div class="layout column layout_44">
                        <div class="editable_block-44 widget-22 editorElement layer-type-widget">
                            <div class="body">
                                <div class="title">Остались вопросы?</div>
                                <div class="text">
                                    <p>Звоните&nbsp;</p>
                                </div>
                                <div class="more"><a href="napishite-nam">Задать вопрос</a></div>
                                <div class="clear"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="editorElement layer-type-block ui-droppable block-23">
                <div class="layout columned columns-3 layout_center layout_49_id_51">
                    <div class="layout column layout_51">
                        <div class="site-copyright widget-27 widget-type-site_copyright editorElement layer-type-widget">
                            Copyright &copy; 2017

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</body>

</html>
