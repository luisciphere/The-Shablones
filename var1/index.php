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
    <script type="text/javascript" src="js/title.js"></script>


</head>

<body>

    <div class="wrapper editorElement layer-type-wrapper">
        <div class="side-panel side-panel-42 widget-type-side_panel editorElement layer-type-widget widget-34" data-layers="['widget-3':['tablet-landscape':'inSide','tablet-portrait':'inSide','mobile-landscape':'inSide','mobile-portrait':'inSide']]">
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
        <div class="editorElement layer-type-block ui-droppable block-9 ">
            <div class="layout layout_center not-columned layout_21_id_25">
                <div class="editorElement layer-type-block ui-droppable block-11">
                    <div class="layout column layout_23 wow bounceInLeft">
                        <div class="phones-23 widget-13 phones-block contacts-block widget-type-contacts_phone editorElement layer-type-widget">
                            <div class="inner">
                                <label class="cell-icon" for="tg-phones-23">
                                    <div class="icon"></div>
                                </label>
                                <input id="tg-phones-23" class="tgl-but" type="checkbox">
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
                    <div class="layout column layout_24  wow bounceInLeft">
                        <div class="button-24 widget-14 widget-type-button editorElement layer-type-widget">
                            <a href="#" data-api-type="popup-form" data-api-url="/my/s3/xapi/public/?method=form/postform&param[form_id]=44362241&param[tpl]=wm.form.popup
            .tpl&placeholder=title&tit_en=&sh_err_msg=" data-wr-class="popover-wrap-24"><span>Обратный звонок</span></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-3   wow bounceInRight">
            <div class="layout columned columns-2 layout_center layout_4_id_8">
                <div class="layout column layout_8">
                    <div class="editorElement layer-type-block ui-droppable block-4">
                        <div class="site-name widget-2 widget-type-site_name editorElement layer-type-widget">
                            <a href="#">
                                <div class="sn-wrap">
                                    <div class="sn-text">
                                        <?php echo $company_name; ?>
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div class="site-description widget-4 widget-type-site_description editorElement layer-type-widget">
                            <?php echo $usluga; ?>
                        </div>
                    </div>
                </div>
                <div class="layout column layout_6">
                    <div class="widget-3 horizontal menu-6 wm-widget-menu widget-type-menu_horizontal editorElement layer-type-widget" data-screen-button="none" data-responsive-tl="button" data-responsive-tp="button" data-responsive-ml="columned" data-more-text="..." data-child-icons="0">

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
        </div>
        <div class="layout layout_center not-columned layout_center_2_id_21_1">
            <div class="editorElement layer-type-block ui-droppable block-10">
                <div class="widget-11 slider-19 slider widget-type-slider editorElement layer-type-widget   wow bounceInLeft" data-setting-pause="4000" data-setting-mode="horizontal" data-setting-auto="1" data-setting-controls="1" data-setting-pager="1" data-setting-pager_selector=".slider-19 .slider-pager" data-setting-prev_selector=".slider-19 .slider-prev" data-setting-next_selector=".slider-19 .slider-next" data-setting-prev_text="" data-setting-next_text="">
                    <div class="slider-inner">
                        <div class="slider-item-1 slider-item" data-src="<?php echo $img1; ?>">
                        </div>
                        <div class="slider-item-2 slider-item" data-src="<?php echo $img2; ?>">
                        </div>
                    </div>
                    <div class="slider-controls">
                        <span class="slider-prev"></span>
                        <span class="slider-next"></span>
                    </div>
                    <div class="slider-pager-wrap">
                        <div class="slider-pager">
                            <a href="" data-slide-index="0">1</a>
                            <a href="" data-slide-index="1">2</a>
                        </div>
                    </div>
                </div>

                <div class="editorElement layer-type-block ui-droppable block-8"></div>
                <div class="editable_block-20 widget-12 editorElement layer-type-widget   wow fadeInLeft">
                    <div class="header">Акция</div>
                    <div class="body">
                        <div class="text">
                            <p>Только в этом месяце если оставите заявку
                                прямо сейчас<br />
                            скидка 20%</p>
                        </div>
                        <div class="more"><a href="#" target="_blank">подробнее</a></div>
                        <div class="clear"></div>
                    </div>
                </div>

            </div>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-13">
            <div class="layout layout_center not-columned layout_27_id_13">




                <div class="blocklist blocklist-13 widget-8 horizontal_mode widget-type-block_list editorElement layer-type-widget   wow bounceInUp" data-slider="" data-setting-mode="horizontal" data-setting-pause="4000" data-setting-auto="1" data-setting-controls="1,1,1,1,1" data-setting-pager="1,1,1,1,1" data-setting-pager_selector=".blocklist-13 .pager-wrap" data-setting-prev_selector=".blocklist-13 .prev" data-setting-next_selector=".blocklist-13 .next" data-setting-count="3" data-setting-columns="auto,2,2,1,1" data-setting-move="" data-setting-prev_text="" data-setting-next_text="">
                    <div class="header">
                        <div class="header_text">Наши основные услуги</div>
                    </div>
                    <div class="body-outer">
                        <div class="body">
                            <div class="swipe-shadow-left"></div>
                            <div class="swipe-shadow-right"></div>
                            <div class="list">
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#" target="_blank"> <img src="<?php echo $img3; ?>" alt="">
                                            </a>
                                        </div>
                                        <div class="title">
                                            <a href="#"><?php echo $serv1; ?></a> </div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#" target="_blank"> <img src="<?php echo $img4; ?>" alt="">
                                            </a>
                                        </div>
                                        <div class="title">
                                          <a href="#"><?php echo $serv2; ?></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="item-outer">
                                    <div class="item">
                                        <div class="image">
                                            <a href="#" target="_blank"> <img src="<?php echo $img5; ?>" alt="">
                                            </a>
                                        </div>
                                        <div class="title">
                                            <a href="#"><?php echo $serv1; ?></a> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        <a class="all" href="uslugi">Смотреть все</a>
                    </div>


                </div>

            </div>
        </div>
        <div class="layout layout_center not-columned layout_center_2_id_21_3">



            <div class="horizontal_block-28 widget-15 widget-type-block_horizontal editorElement layer-type-widget">
                <div class="header"></div>
                <div class="body">
                    <div class="figure   wow bounceInLeft">
                        <div class="image">
                            <a href="#" target="_blank"><img src="<?php echo $img6; ?>" alt="" style="width:430px;"></a>
                        </div>
                    </div>
                    <div class="detail   wow bounceInRight">
                        <div class="title">О компании</div>
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
        <div class="editorElement layer-type-block ui-droppable block-6">
            <div class="layout layout_center not-columned layout_14_id_15">



                <div class="horizontal_block-15 widget-9 widget-type-block_horizontal editorElement layer-type-widget   wow fadeInLeft">
                    <div class="header"></div>
                    <div class="body">
                        <div class="detail">
                            <div class="title">Сотрудничество</div>
                            <div class="text">
                                <p>Многолетний опыт работы и сотрудничество с сотнями клиентов нашего региона позволяет нашей компании идти в ногу со временем и эффективно решать любые задачи клиентов по самым выгодным ценам.</p>
                            </div>
                            <div class="more"><a href="#" target="_blank">подробнее</a></div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div class="layout layout_center not-columned layout_center_2_id_21_5">

            <div class="gallery-16 widget-10 widget-type-gallery editorElement layer-type-widget">
                <div class="gallery-header">
                    <span class="text">Галерея</span>
                    <a class="all" href="fotogalereya">Смотреть все</a>
                </div>
                <div class="gallery-body">
                    <div class="my-gallery" itemscope itemtype="http://schema.org/ImageGallery">


                        <figure class="gallery-item   wow fadeInLeft" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                            <a href="<?php echo $img4; ?>" itemprop="contentUrl"  data-size="1565x1030">
                                <img src="<?php echo $img4; ?>" alt="">
                            </a>
                        </figure>


                        <figure class="gallery-item   wow bounceInDown" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                            <a href="<?php echo $img5; ?>" itemprop="contentUrl"  data-size="1565x1030">
                                <img src="<?php echo $img5; ?>" alt="">
                            </a>
                        </figure>


                        <figure class="gallery-item   wow fadeInRight" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                            <a href="<?php echo $img6; ?>" itemprop="contentUrl"  data-size="1565x1030">
                                <img src="<?php echo $img6; ?>" alt="">
                            </a>
                        </figure>


                        <figure class="gallery-item  wow fadeInLeft" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                            <a href="<?php echo $img5; ?>" itemprop="contentUrl"  data-size="1565x1030">
                                <img src="<?php echo $img5; ?>" alt="">
                            </a>
                        </figure>


                        <figure class="gallery-item  wow bounceInUp" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                            <a href="<?php echo $img6; ?>" itemprop="contentUrl"  data-size="1565x1030">
                                <img src="<?php echo $img6; ?>" alt="">
                            </a>
                        </figure>


                        <figure class="gallery-item  wow fadeInRight" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
                            <a href="<?php echo $img4; ?>" itemprop="contentUrl"  data-size="1565x1030">
                                <img src="<?php echo $img4; ?>" alt="">
                            </a>
                        </figure>
                    </div>
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
            <!--div class="up-38 widget-30 up_button widget-type-button_up editorElement layer-type-widget" data-speed="900">
                <div class="icon"></div-->
            </div>
        </div>
        <div class="map"><script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=3IzFFOGOXCQE9ZQHO8TAHhMQXm3ZyLWM&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true"></script>
        </div>
        <div class="editorElement layer-type-block ui-droppable block-15">
            <div class="layout layout_center not-columned layout_29_id_43">
                <div class="editorElement layer-type-block ui-droppable block-18">
                    <div class="site-copyright widget-31 widget-type-site_copyright editorElement layer-type-widget">
                        Copyright &copy; 2017

                    </div>

                </div>
            </div>
        </div>
    </div>

</body>

</html>
