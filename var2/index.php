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


</head>

<body>

    <div class="wrapper editorElement layer-type-wrapper">
        <div class="side-panel side-panel-121 widget-type-side_panel editorElement layer-type-widget widget-70" data-layers="['widget-69':['tablet-landscape':'inSide','tablet-portrait':'inSide','mobile-landscape':'inSide','mobile-portrait':'inSide'],'widget-64':['mobile-landscape':'onTop','mobile-portrait':'onTop','tablet-landscape':'onTop','tablet-portrait':'onTop']]">
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
        <div class="editorElement layer-type-block ui-droppable block-45">
            <div class="editorElement layer-type-block ui-droppable block-51">
                <div class="layout layout_center not-columned layout_120_id_109">
                    <div class="editorElement layer-type-block ui-droppable block-47">
                        <div class="layout column layout_110">
                            <div class="email-110 widget-63 email-block contacts-block widget-type-contacts_email editorElement layer-type-widget wow slideInLeft">
                                <div class="inner">
                                    <label class="cell-icon" for="tg-email-110">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg-email-110" class="tgl-but" type="checkbox">
                                    <div class="block-body-drop">
                                        <div class="cell-text">
                                            <div class="title">Email:</div>
                                            <div class="text_body">
                                                <a href="<?php echo $email; ?>"><?php echo $email; ?></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="layout column layout_111 wow slideInRight">
                            <div class="phones-111 widget-64 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget">
                                <div class="inner">
                                    <label class="cell-icon" for="tg-phones-111">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg-phones-111" class="tgl-but" type="checkbox">
                                    <div class="block-body-drop">
                                        <div class="cell-text">
                                            <div class="title">Телефон:</div>
                                            <div class="text_body">
                                                <div><a href="<?php echo $phone; ?>"><?php echo $phone; ?></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="layout layout_center not-columned layout_center_107_id_120_1">
                <div class="editorElement layer-type-block ui-droppable block-48">
                    <div class="layout column layout_113">
                        <div class="editorElement layer-type-block ui-droppable block-49 wow bounceInLeft">
                            <div class="site-name widget-65 widget-type-site_name editorElement layer-type-widget">
                                <a href="#">
                                    <div class="sn-wrap">
                                        <div class="sn-text">
                                            <?php echo $company_name; ?>
                                        </div>

                                    </div>
                                </a>
                            </div>
                            <div class="site-description widget-66 widget-type-site_description editorElement layer-type-widget">
                                <?php echo $usluga; ?>
                            </div>
                        </div>
                    </div>
                    <div class="layout column layout_116">
                        <div class="editorElement layer-type-block ui-droppable block-50">
                            <div class="layout column layout_117 wow bounceInRight">
                                <div class="address-117 widget-67 address-block contacts-block widget-type-contacts_address editorElement layer-type-widget">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg117">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg117" class="tgl-but" type="checkbox">
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
                            <div class="layout column layout_118">
                                <div class="schedule-118 widget-68 schedule-block contacts-block widget-type-contacts_schedule editorElement layer-type-widget wow slideInRight">
                                    <div class="inner">
                                        <label class="cell-icon" for="tg-schedule-118">
                                            <div class="icon"></div>
                                        </label>
                                        <input id="tg-schedule-118" class="tgl-but" type="checkbox">
                                        <div class="block-body-drop">
                                            <div class="cell-text">
                                                <div class="title">График работы:</div>
                                                <div class="text_body">
                                                    Пн-Пт: с 9:00 до 20:00
                                                    <br /> Сб-Вс: с 9:00 до 19:00
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="widget-69 horizontal menu-119 wm-widget-menu widget-type-menu_horizontal editorElement layer-type-widget wow fadeInUp" data-screen-button="none" data-responsive-tl="button" data-responsive-tp="button" data-responsive-ml="columned" data-more-text="..." data-child-icons="NaN">

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
                                    <li><a href="#"target="_blank">пункт меню</a></li>
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
        </div>
        <div class="widget-71 slider-122 slider widget-type-slider editorElement layer-type-widget" data-setting-pause="4000" data-setting-mode="horizontal" data-setting-auto="1" data-setting-controls="" data-setting-pager="1" data-setting-pager_selector=".slider-122 .slider-pager" data-setting-prev_selector=".slider-122 .slider-prev" data-setting-next_selector=".slider-122 .slider-next" data-setting-prev_text="" data-setting-next_text="" data-text_position="in">
            <div class="slider-inner">
                <div class="slider-item-1 slider-item" data-src="<?php echo $img1; ?>">
                    <a href="#" target="_blank"></a>
                </div>
                <div class="slider-item-2 slider-item" data-src="<?php echo $img2; ?>">
                    <a href="#" target="_blank"></a>
                </div>
                <div class="slider-item-3 slider-item" data-src="<?php echo $img3; ?>">
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

        <div class="editorElement layer-type-block ui-droppable block-35">
            <div class="layout columned columns-2 layout_center layout_83_id_85">
                <div class="layout column layout_85">




                    <div class="blocklist blocklist-85 widget-50 horizontal_mode widget-type-block_list editorElement layer-type-widget wow slideInLeft" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="0,1,1,1,1" data-setting-pager_selector=".blocklist-85 .pager-wrap" data-setting-prev_selector=".blocklist-85 .prev" data-setting-next_selector=".blocklist-85 .next" data-setting-count="3" data-setting-columns="auto,1,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                        <div class="header">
                            <div class="header_text">Скидка 20%</div>
                        </div>
                        <div class="body-outer">
                            <div class="body">
                                <div class="swipe-shadow-left"></div>
                                <div class="swipe-shadow-right"></div>
                                <div class="list">
                                    <div class="item-outer">
                                        <div class="item">
                                            <div class="text">
                                                <p>при заказе прямо сейчас</p>
                                            </div>
                                            <div class="more"><a href="#" target="_blank">позвоните нам</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                        </div>


                    </div>

                </div>
                <div class="layout column layout_84">



                    <div class="horizontal_blocklist horizontal_blocklist-84 widget-49 horizontal_mode widget-type-block_list_horizontal editorElement layer-type-widget wow bounceInRight" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".horizontal_blocklist-84 .pager-wrap" data-setting-prev_selector=".horizontal_blocklist-84 .prev" data-setting-next_selector=".horizontal_blocklist-84 .next" data-setting-count="2" data-setting-columns="2,2,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
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
                                                        Высокое качество </div>
                                                    <div class="text">
                                                        <p>Мы заботимся о наших клиентах и гарантируем лучшее качество.</p>
                                                    </div>
                                                    <div class="price-wrap">
                                                    </div>

                                                </div>
                                                <div class="item_figure">
                                                    <div class="image">
                                                        <img src="img/10.png" alt="">
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
                                                        Низкая цена </div>
                                                    <div class="text">
                                                        <p>Мы всегда готовы предложить своим клиентам одни из лучших цен. </p>
                                                    </div>
                                                    <div class="price-wrap">
                                                    </div>

                                                </div>
                                                <div class="item_figure">
                                                    <div class="image">
                                                        <img src="img/12.png" alt="">
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
                                                        Минимальные сроки </div>
                                                    <div class="text">
                                                        <p>Постоянно работаем над увеличением скорости выполнения заказов.</p>
                                                    </div>
                                                    <div class="price-wrap">
                                                    </div>

                                                </div>
                                                <div class="item_figure">
                                                    <div class="image">
                                                        <img src="img/13.png" alt="">
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
                                                        Скидки постоянным клиентам </div>
                                                    <div class="text">
                                                        <p>Приготовим для Вас индивидуальное предложение! </p>
                                                    </div>
                                                    <div class="price-wrap">
                                                    </div>

                                                </div>
                                                <div class="item_figure">
                                                    <div class="image">
                                                        <img src="img/11.png" alt="">
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
        </div>
        <div class="editorElement layer-type-block ui-droppable block-38">
            <div class="layout columned columns-2 layout_center layout_90_id_92">
                <div class="layout column layout_92">




                    <div class="blocklist blocklist-92 widget-54 vertical_mode widget-type-block_list editorElement layer-type-widget wow fadeInDown" data-slider="" data-setting-mode="vertical" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".blocklist-92 .pager-wrap" data-setting-prev_selector=".blocklist-92 .prev" data-setting-next_selector=".blocklist-92 .next" data-setting-count="3" data-setting-columns="auto,2,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                        <div class="body-outer">
                            <div class="body">
                                <div class="swipe-shadow-left"></div>
                                <div class="swipe-shadow-right"></div>
                                <div class="list">
                                    <div class="item-outer">
                                        <div class="item">
                                            <div class="title">
                                                1566
                                            </div>
                                            <div class="text">
                                                <p>довольных клиентов</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-outer">
                                        <div class="item">
                                            <div class="title">
                                                15
                                            </div>
                                            <div class="text">
                                                <p>лет на рынке
                                                    <br>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="item-outer">
                                        <div class="item">
                                            <div class="title">
                                                120
                                            </div>
                                            <div class="text">
                                                <p>партнеров</p>
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
                <div class="layout column layout_91">



                    <div class="horizontal_block-91 widget-53 widget-type-block_horizontal editorElement layer-type-widget wow bounceInRight">
                        <div class="header"></div>
                        <div class="body">
                            <div class="detail">
                                <div class="title">Немного о нас</div>
                                <div class="text">
                                    <p>Наша компания уже более 10 лет работает на рынке города и области!<br />

                                        У нас работают ПРОФЕССИОНАЛЫ высочайшего класса, которые смогут воплотить практически любую Вашу задумку в жизнь.<br />

                                        Проводим предварительную консультацию.<br />

                                        Наши цены весьма гибкие и лояльные, мы предлагаем различные сезонные акции, во время которых Вы можете получить скидку.<br />

                                        Наша работа окончательно убедит Вас в том, что мы — это то, что Вам нужно.<br />

                                        Звоните, и наши специалисты ответят на все Ваши вопросы.</p>
                                </div>
                                <div class="more"><a href="#" target="_blank">подробнее</a></div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-3">
            <div class="layout layout_center not-columned layout_6_id_5">




                <div class="blocklist blocklist-5 widget-3 horizontal_mode widget-type-block_list editorElement layer-type-widget wow slideInDown" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".blocklist-5 .pager-wrap" data-setting-prev_selector=".blocklist-5 .prev" data-setting-next_selector=".blocklist-5 .next" data-setting-count="3" data-setting-columns="3,3,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                    <div class="header">
                        <div class="header_text">Наши услуги</div>
                    </div>

                    <div class="body-outer">
                        <div class="body">
                            <div class="swipe-shadow-left"></div>
                            <div class="swipe-shadow-right"></div>
                            <div class="list">
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#" target="_blank"> <img src="<?php echo $img2; ?>" style="width:307px" alt="">
                                            </a>
                                        </div>
                                        <div class="title">
                                            <?php echo $serv1; ?>
                                        </div>
                                        <div class="text">
                                            <p>Сотрудничайте с лидером рынка! К нам обратилось уже более 5000 клиентов. Большой опыт!</p>
                                        </div>
                                        <div class="more"><a href="#" target="_blank">подробнее</a></div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#" target="_blank"> <img src="<?php echo $img3; ?>" style="width:307px" alt="">
                                            </a>
                                        </div>
                                        <div class="title">
                                            <?php echo $serv2; ?>
                                        </div>
                                        <div class="text">
                                            <p>Внимательное отношение к каждому покупателю. Отношения с клиентами построены на принципах взаимного доверия и уважения.	</p>
                                        </div>
                                        <div class="more"><a href="#" target="_blank">подробнее</a></div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#" target="_blank"> <img src="<?php echo $img6; ?>" style="width:307px" alt="">
                                            </a>
                                        </div>
                                        <div class="title">
                                            <?php echo $serv3; ?>
                                        </div>
                                        <div class="text">
                                            <p>Вы экономите свое время, потому что мы идем в ногу со временем и используем только передовые технологии.</p>
                                        </div>
                                        <div class="more"><a href="#" target="_blank">подробнее</a></div>
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
        <div class="editorElement layer-type-block ui-droppable block-18">
            <div class="layout layout_center not-columned layout_43_id_44">




                <div class="bx-reviews reviews-44 widget-26 vertical_mode widget-type-reviews editorElement layer-type-widget" data-slider="" data-setting-mode="vertical" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".reviews-44 .pager-wrap" data-setting-prev_selector=".reviews-44 .prev" data-setting-next_selector=".reviews-44 .next" data-setting-count="3" data-setting-columns="1,3,3,2,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                    <div class="header">
                        <div class="header_text">Отзывы клиентов</div>
                    </div>
                    <div class="list-wr">
                        <div class="swipe-shadow-left"></div>
                        <div class="swipe-shadow-right"></div>
                        <div class="body">
                            <div class="list">
                                <div class="item-outer wow bounceInLeft">
                                    <div class="item">
                                        <div class="image">
                                            <img src="img/client_1.jpg" alt="">
                                        </div>
                                        <div class="author">
                                            <span class="name">Арбузова Светлана</span>
                                            <span class="date">
																																					26 Ноября 2016
																							</span>
                                        </div>
                                        <div class="text">Очень довольна работой. Спасибо большое! Все четко, организованно и качественно. Теперь мы довольные и счастливые!!</div>
                                    </div>
                                </div>
                                <div class="item-outer wow bounceInRight">
                                    <div class="item">
                                        <div class="image">
                                            <img src="img/client_2.jpg" alt="">
                                        </div>
                                        <div class="author">
                                            <span class="name">Ефремова Алина</span>
                                            <span class="date">
																																					23 Ноября 2016
																							</span>
                                        </div>
                                        <div class="text">Большое спасибо! Ребята — молодцы, работали профессионально, четко, слаженно, быстро,
                                            аккуратно и с позитивным настроением Обязательно порекомендую компанию своим друзьям!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        <div class="map"><script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=3IzFFOGOXCQE9ZQHO8TAHhMQXm3ZyLWM&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>
        </div>

        <div class="editorElement layer-type-block ui-droppable block-4">
            <div class="layout layout_center not-columned layout_7_id_7_id_15">
                <div class="layout columned columns-3 layout_7_id_15">
                    <div class="layout column layout_15">



                        <div class="horizontal_block-15 widget-10 widget-type-block_horizontal editorElement layer-type-widget">
                            <div class="header"></div>
                            <div class="body">
                                <div class="detail">
                                    <div class="title"><?php echo $company_name; ?></div>
                                    <div class="text">
                                        <p><?php echo $spec ?></p>
                                    </div>
                                    <div class="more"><a href="#" target="_blank"><?php echo $email; ?></a></div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="layout column layout_11">
                        <div class="editorElement layer-type-block ui-droppable block-5">
                            <div class="phones-13 widget-8 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget">
                                <div class="inner">
                                    <label class="cell-icon" for="tg-phones-13">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg-phones-13" class="tgl-but" type="checkbox">
                                    <div class="block-body-drop">
                                        <div class="cell-text">
                                            <div class="title">Телефон:</div>
                                            <div class="text_body">
                                                <div><a href="<?php echo $phone; ?>"><?php echo $phone; ?></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="widget-7 widgetsocial-12 widget-type-social_links editorElement layer-type-widget">
                                <a href="https://www.facebook.com/" class="fb"><span></span></a> <a href="https://twitter.com/" class="tw"><span></span></a> <a href="https://www.instagram.com/" class="ins"><span></span></a> <a href="https://ok.ru/" class="ok"><span></span></a>
                            </div>
                        </div>
                    </div>
                    <div class="layout column layout_10">




                        <div class="form-10 widget-6 vertical_mode widget-type-form_adaptive editorElement layer-type-widget">
                            <div class="form__header">Вам перезвонить?</div>
                            <div class="form__body" data-api-type="form" data-api-url="#[form_id]=45430841">
                                <form method="post">
                                    <input type="hidden" name="_form_item" value="10">
                                    <input type="hidden" name="form_id" value="45430841">
                                    <input type="hidden" name="tpl" value="db:title.tpl">
                                    <div class="form-table">
                                        <div class="form-tbody">
                                            <div class="form-item-group group-text">
                                                <div class="form-item form-text name">
                                                    <div class="form-item__body">
                                                        <input class="wm-input-default" placeholder="* Ваше имя: " type="text" size="1" maxlength="Array" value="" name="d[0]" id="d[0]" />
                                                    </div>
                                                </div>
                                                <div class="form-item form-text phone">
                                                    <div class="form-item__body">
                                                        <input class="wm-input-default" placeholder="* Телефон: " type="text" size="1" maxlength="Array" value="" name="d[1]" id="d[1]" />
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
                <div class="layout layout_7_id_9">
                    <div class="site-copyright widget-5 widget-type-site_copyright editorElement layer-type-widget">
                        Copyright &copy; 2017

                    </div>

                </div>
            </div>
        </div>
    </div>






</body>

</html>
