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

    <link rel="stylesheet" href="css/title.css">

    <link rel="stylesheet" href="css/designblock.scss.css">

    <link rel="stylesheet" href="css/s3_styles.scss.css">

    <script src="js/jquery.min.js"></script>

    <script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>

    <script type="text/javascript" src="js/title.js"></script>


<style>
    .block-11{   background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("<?php echo $img3; ?>") left 50% top 50% / cover no-repeat fixed;}
    .block-2{    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("<?php echo $img2; ?>") left 50% top 50% / cover no-repeat fixed;}
    .block-10{background: -webkit-linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("<?php echo $img2; ?>") left 50% top 50% / cover no-repeat, url("#") left 50% top 50% / cover no-repeat fixed;
    background: linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("<?php echo $img1; ?>") left 50% top 50% / cover no-repeat, url("#") left 50% top 50% / cover no-repeat fixed;}
    .image.image1 a{
        display: block;
        height: 400px;
        background: url(<?php echo $img1; ?>) 50% 0 no-repeat;
        background-size:cover;
    }
    .image.image2 a{
        display: block;
        height: 400px;
        background: url(<?php echo $img2; ?>) 50% 0 no-repeat;
        background-size:cover;
    }
    .image.image3 a{
        display: block;
        height: 400px;
        background: url(<?php echo $img2; ?>) 50% 0 no-repeat;
        background-size:cover;
    }
    </style>

</head>

<body>

    <div class="wrapper editorElement layer-type-wrapper">
        <div class="side-panel side-panel-21 widget-type-side_panel editorElement layer-type-widget widget-13" data-layers="['widget-2':['tablet-landscape':'inSide','tablet-portrait':'inSide','mobile-landscape':'inSide','mobile-portrait':'inSide']]">
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
            <div class="editorElement layer-type-block ui-droppable block-3">
                <div class="layout layout_center not-columned layout_5_id_3">
                    <div class="widget-2 horizontal menu-3 wm-widget-menu widget-type-menu_horizontal editorElement layer-type-widget" data-screen-button="more" data-responsive-tl="button" data-responsive-tp="button" data-responsive-ml="columned" data-more-text="..." data-child-icons="0">

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
            <div class="layout layout_center not-columned layout_center_4_id_5_1">
                <div class="editorElement layer-type-block ui-droppable block-5">
                    <div class="widget-3 slider-6 slider widget-type-slider editorElement layer-type-widget wow bounceInRight" data-setting-pause="4000" data-setting-mode="horizontal" data-setting-auto="1" data-setting-controls="1" data-setting-pager="" data-setting-pager_selector=".slider-6 .slider-pager" data-setting-prev_selector=".slider-6 .slider-prev" data-setting-next_selector=".slider-6 .slider-next" data-setting-prev_text="" data-setting-next_text="" data-type-pager="normal" data-text_position="in">
                        <div class="slider-inner">
                            <div class="slider-item-1 slider-item" data-src="<?php echo $img1; ?>">
                            </div>
                            <div class="slider-item-2 slider-item" data-src="<?php echo $img2; ?>">
                            </div>
                            <div class="slider-item-3 slider-item" data-src="<?php echo $img3; ?>">
                            </div>
                        </div>
                        <div class="slider-controls">
                            <span class="slider-prev"></span>
                            <span class="slider-next"></span>
                        </div>
                    </div>

                    <div class="editorElement layer-type-block ui-droppable block-4 wow slideInLeft">
                        <div class="site-name widget-4 widget-type-site_name editorElement layer-type-widget">
                            <a href="#">
                                <div class="sn-wrap">
                                    <div class="sn-text">
                                        <?php echo $company_name; ?>
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div class="site-description widget-5 widget-type-site_description editorElement layer-type-widget">
                            <?php echo $usluga; ?>
                        </div>
                    </div>
                </div>
                <div class="editorElement layer-type-block ui-droppable block-18">
                    <div class="layout column layout_49">
                        <div class="editorElement layer-type-block ui-droppable block-19">
                            <div class="phones-50 widget-32 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget">
                                <div class="inner">
                                    <label class="cell-icon" for="tg-phones-50">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg-phones-50" class="tgl-but" type="checkbox">
                                    <div class="block-body-drop">
                                        <div class="cell-text">
                                            <div class="title">Телефон:</div>
                                            <div class="text_body">
                                                <div><a href="tel:<?php echo $phone; ?>"><?php echo $phone; ?></a></div>
                                               <!-- <div><a href="tel:+79528020145">+79528020145</a></div> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="layout column layout_51">
                        <div class="editorElement layer-type-block ui-droppable block-20">
                            <div class="address-52 widget-33 address-block contacts-block widget-type-contacts_address editorElement layer-type-widget">
                                <div class="inner">
                                    <label class="cell-icon" for="tg52">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg52" class="tgl-but" type="checkbox">
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
                    <div class="layout column layout_53">
                        <div class="editorElement layer-type-block ui-droppable block-21">
                            <div class="schedule-54 widget-34 schedule-block contacts-block widget-type-contacts_schedule editorElement layer-type-widget">
                                <div class="inner">
                                    <label class="cell-icon" for="tg-schedule-54">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg-schedule-54" class="tgl-but" type="checkbox">
                                    <div class="block-body-drop">
                                        <div class="cell-text">
                                            <div class="title">График работы:</div>
                                            <div class="text_body">
                                                Пн-Пт с 9:00 до 18:00
                                                <br /> Сб-Вс с 10:00 до 17:00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-7">
            <div class="editorElement layer-type-block ui-droppable block-8">
                <div class="layout layout_center not-columned layout_17_id_28">



                    <div class="horizontal_blocklist horizontal_blocklist-28 widget-18 horizontal_mode widget-type-block_list_horizontal editorElement layer-type-widget" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="0,1,1,1,1" data-setting-pager="1,0,0,0,0" data-setting-pager_selector=".horizontal_blocklist-28 .pager-wrap" data-setting-prev_selector=".horizontal_blocklist-28 .prev" data-setting-next_selector=".horizontal_blocklist-28 .next" data-setting-count="2" data-setting-columns="1,1,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
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
                                                <div class="item_figure wow slideInLeft">
                                                    <div class="image image1">
                                                        <a href="#" target="_blank">

                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="item_detail wow bounceInRight">
                                                    <div class="title">
                                                        <?php echo $serv1; ?> </div>
                                                    <div class="text">
                                                        <p>Внимательное отношение к каждому покупателю. Отношения с клиентами построены на принципах взаимного доверия и уважения.	</p>
                                                    </div>
                                                    <div class="price-wrap">
                                                        <div class="more"><a href="#" target="_blank">Подробнее »</a></div>
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



                    <div class="horizontal_blocklist horizontal_blocklist-30 widget-20 horizontal_mode widget-type-block_list_horizontal editorElement layer-type-widget" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="0,1,1,1,1" data-setting-pager="1,0,0,0,0" data-setting-pager_selector=".horizontal_blocklist-30 .pager-wrap" data-setting-prev_selector=".horizontal_blocklist-30 .prev" data-setting-next_selector=".horizontal_blocklist-30 .next" data-setting-count="2" data-setting-columns="1,1,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
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
                                                <div class="item_detail wow bounceInLeft">
                                                    <div class="title">
                                                        <?php echo $serv2; ?></div>
                                                    <div class="text">
                                                        <p>Сотрудничайте с лидером рынка! К нам обратилось уже более 5000 клиентов. Большой опыт!	</p>
                                                    </div>
                                                    <div class="price-wrap">
                                                        <div class="more"><a href="#" target="_blank">Подробнее »</a></div>
                                                    </div>

                                                </div>
                                                <div class="item_figure wow slideInRight">
                                                    <div class="image image2">
                                                        <a href="#" target="_blank"></a>
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


                    <div class="horizontal_blocklist horizontal_blocklist-28 widget-18 horizontal_mode widget-type-block_list_horizontal editorElement layer-type-widget" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="0,1,1,1,1" data-setting-pager="1,0,0,0,0" data-setting-pager_selector=".horizontal_blocklist-28 .pager-wrap" data-setting-prev_selector=".horizontal_blocklist-28 .prev" data-setting-next_selector=".horizontal_blocklist-28 .next" data-setting-count="2" data-setting-columns="1,1,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
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
                                                <div class="item_figure wow slideInLeft">
                                                    <div class="image image3">
                                                        <a href="#" target="_blank">

                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="item_detail wow bounceInRight">
                                                    <div class="title">
                                                        <?php echo $serv3; ?></div>
                                                    <div class="text">
                                                        <p>Вы экономите свое время, потому что мы идем в ногу со временем и используем только передовые технологии.	</p>
                                                    </div>
                                                    <div class="price-wrap">
                                                        <div class="more"><a href="#" target="_blank">Подробнее »</a></div>
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
            <div class="editorElement layer-type-block ui-droppable block-10">
                <div class="layout layout_center not-columned layout_26_id_27">



                    <div class="horizontal_blocklist  horizontal_blocklist-27 widget-17 horizontal_mode widget-type-block_list_horizontal editorElement layer-type-widget wow bounceInUp" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".horizontal_blocklist-27 .pager-wrap" data-setting-prev_selector=".horizontal_blocklist-27 .prev" data-setting-next_selector=".horizontal_blocklist-27 .next" data-setting-count="2" data-setting-columns="auto,2,1,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                        <div class="header">
                            <div class="header_text">Новости</div>
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
                                                            <img src="img/24daa8cb2b6f.jpg" style="width:200px;" alt="">
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="item_detail">
                                                    <div class="title">
                                                        День труда </div>
                                                    <div class="text">
                                                        <p>1 мая во многих странах мира отмечается международный праздник - День труда, который изначально носил название День международной солидарности трудящихся.</p>
                                                    </div>
                                                    <div class="price-wrap">
                                                        <div class="more"><a href="#" target="_blank">Подробнее »</a></div>
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
                                                            <img src="img/9-мая.jpg" style="width:200px;" alt="">
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="item_detail">
                                                    <div class="title">
                                                        День победы</div>
                                                    <div class="text">
                                                        <p>День Победы – это праздник, который объединяет всех: и молодежь, и пожилые люди, и дети хранят светлую память о героях войны.</p>
                                                    </div>
                                                    <div class="price-wrap">
                                                        <div class="more"><a href="#" target="_blank">Подробнее »</a></div>
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
            <div class="layout layout_center not-columned layout_center_16_id_17_1  wow bounceInUp">
                <div class="editorElement layer-type-block ui-droppable block-9">
                    <h1 class="h1 widget-14 widget-type-h1 editorElement layer-type-widget">
					О Компании
				</h1>
                    <article class="content-23 content widget-15 widget-type-content editorElement layer-type-widget">
                        <p>Наша компания уже более 10 лет работает на рынке города и области!<br />

                            У нас работают ПРОФЕССИОНАЛЫ высочайшего класса, которые смогут воплотить практически любую Вашу задумку в жизнь.<br />

                            Проводим предварительную консультацию.<br />

                            Наши цены весьма гибкие и лояльные, мы предлагаем различные сезонные акции, во время которых Вы можете получить скидку.<br />

                            Наша работа окончательно убедит Вас в том, что мы — это то, что Вам нужно.<br />

                            Звоните, и наши специалисты ответят на все Ваши вопросы.</p>
                    </article>
                </div>
            </div>
            <div class="editorElement layer-type-block ui-droppable block-11">
                <div class="layout layout_center not-columned layout_32_id_31  wow bounceInUp">

                    <div class="gallery-31 widget-21 widget-type-gallery editorElement layer-type-widget">
                        <div class="gallery-header">
                            <span class="text">Галерея</span>
                        </div>
                        <div class="gallery-body">
                            <div class="gallery-slider" data-init-slider="1" data-slide-items="5,4,3,3,1" data-speed="500" data-pause="4000" data-auto="1" data-pager="" data-controls="1"></div>
                            <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">


                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img2; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img2; ?>" alt="">
                                    </a>
                                </figure>


                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img5; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img5; ?>" alt="">
                                    </a>
                                </figure>


                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img6; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img6; ?>" alt="">
                                    </a>
                                </figure>


                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img2; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img2; ?>" alt="">
                                    </a>
                                </figure>


                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img5; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img5; ?>" alt="">
                                    </a>
                                </figure>


                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img6; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img6; ?>" alt="">
                                    </a>
                                </figure>

                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img2; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img2; ?>" alt="">
                                    </a>
                                </figure>


                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img5; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img5; ?>" alt="">
                                    </a>
                                </figure>


                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img6; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img6; ?>" alt="">
                                    </a>
                                </figure>

                                <figure class="gallery-item" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                                    <a href="<?php echo $img2; ?>" itemprop="contentUrl" data-title="Витражи" data-size="900x600">
                                        <img src="<?php echo $img2; ?>" alt="">
                                    </a>
                                </figure>




                            </div>
                        </div>
                        <div class="gallery-footer">

                        </div>
                    </div>

                    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
                        <div class="pswp__bg"></div>
                        <div class="pswp__scroll-wrap">
                            <div class="pswp__container">
                                <div class="pswp__item"></div>
                                <div class="pswp__item"></div>
                                <div class="pswp__item"></div>
                            </div>
                            <div class="pswp__ui pswp__ui--hidden">
                                <div class="pswp__top-bar">
                                    <div class="pswp__counter"></div>
                                    <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                                    <button class="pswp__button pswp__button--share" title="Share"></button>
                                    <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                                    <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                                    <div class="pswp__preloader">
                                        <div class="pswp__preloader__icn">
                                            <div class="pswp__preloader__cut">
                                                <div class="pswp__preloader__donut"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                                    <div class="pswp__share-tooltip"></div>
                                </div>
                                <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></button>
                                <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></button>
                                <div class="pswp__caption">
                                    <div class="pswp__caption__center"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-12">
            <div class="layout layout_center not-columned layout_33_id_55">
                <div class="editorElement layer-type-block ui-droppable block-22">
                    <div class="layout column layout_56">
                        <div class="editorElement layer-type-block ui-droppable block-23">
                            <div class="phones-57 widget-35 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget">
                                <div class="inner">
                                    <label class="cell-icon" for="tg-phones-57">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg-phones-57" class="tgl-but" type="checkbox">
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
                    </div>
                    <div class="layout column layout_58">
                        <div class="editorElement layer-type-block ui-droppable block-24">
                            <div class="address-59 widget-36 address-block contacts-block widget-type-contacts_address editorElement layer-type-widget">
                                <div class="inner">
                                    <label class="cell-icon" for="tg59">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg59" class="tgl-but" type="checkbox">
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
                    <div class="layout column layout_60">
                        <div class="editorElement layer-type-block ui-droppable block-25">
                            <div class="schedule-61 widget-37 schedule-block contacts-block widget-type-contacts_schedule editorElement layer-type-widget">
                                <div class="inner">
                                    <label class="cell-icon" for="tg-schedule-61">
                                        <div class="icon"></div>
                                    </label>
                                    <input id="tg-schedule-61" class="tgl-but" type="checkbox">
                                    <div class="block-body-drop">
                                        <div class="cell-text">
                                            <div class="title">График работы:</div>
                                            <div class="text_body">
                                                Пн-Пт с 9:00 до 18:00
                                                <br /> Сб-Вс с 10:00 до 17:00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="widget-25 map-40 widget-type-map editorElement layer-type-widget" data-controls="searchControl" id="widgetMap40" data-center="55.75399399999374,37.62209300000001" data-zoom="9" data-type="yandex#map">

                    <input type="hidden" name="widgetMap40" value="[{&quot;preset&quot; : &quot;islands#lightblueStretchyIcon&quot;,&quot;point&quot;: &quot;55.75399399999374,37.62209300000001&quot;, &quot;iconContent&quot;: &quot;\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0444\u0438\u0441&quot;, &quot;balloonContent&quot;: &quot;&lt;p&gt;\u041a\u0440\u0430\u0442\u043a\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f&lt;\/p&gt;\n&lt;p&gt;&amp;lt;\u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b&amp;gt;&lt;\/p&gt;&quot;}]">

                </div>
                <div class="editorElement layer-type-block ui-droppable block-16">
                    <div class="site-copyright widget-26 widget-type-site_copyright editorElement layer-type-widget">
                        Copyright &copy; 2017

                    </div>

                </div>
            </div>
        </div>
    </div>

    <!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter44930557 = new Ya.Metrika({
                    id:44930557,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/44930557" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

</body>

</html>
