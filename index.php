<?php
include 'config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Коммерческое предложение для «<?php echo $company_name; ?>»</title>
  <link href="https://fonts.googleapis.com/css?family=Rubik" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="logo pull-left">
            Logo
          </div>
          <div class="top-contact pull-right">
            +7 999 841-57-10
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="opening text-center">
          <h1>Сайт для «<?php echo $company_name; ?>»</h1>

          <div class="opening_info row">

            <div class="col-xs-12 col-sm-offset-1 col-sm-5  col-md-5">
              <div class="opening_items">
                <h5><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>Несколько дизайнов на выбор</h5>
              </div>
            </div>

            <div class="col-xs-12 col-sm-5 col-md-5">
              <div class="opening_items">
                <h5><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>Система управления сайтом</h5>
              </div>
            </div>

            <div class="col-xs-12 col-sm-offset-1  col-sm-5 col-md-5">
              <div class="opening_items">
                <h5><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>Мощный хостинг и домен бесплатно</h5>
              </div>
            </div>

            <div class="col-xs-12  col-sm-5 col-md-5" >
              <div class="opening_items">
                <h5><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>Техническая поддержка</h5></li>
              </div>
            </div>

            <div class="col-xs-12 col-sm-offset-1  col-sm-5 col-md-5">
              <div class="opening_items">
                <h5><span class="glyphicon glyphicon-ok" aria-hidden="true"></span>Наполнение сайта материалами</h5></li>
              </div>
            </div>

            <div class="col-xs-12  col-sm-5 col-md-5">
              <div class="opening_items">
                <h5><span class="glyphicon glyphicon-ok"></span>Любое количество страниц и информации</h5></li>
              </div>
            </div>

          </div> <!-- end row -->

        </div>

        <div class="variations text-center">

          <div class="variations_opening row">
            <div class="col-md-10 col-md-offset-1" >
              <h2>Мы сделали для Вас варианты <span>дизайна главной страницы</span> и наполнили <span>примерными</span> текстами и картинками.</h2>
              <h2>Внутренние страницы, цвет сайта, тексты и картинки сделаем по вашим пожеланиям.</h2>
            </div>
          </div>

          <h1><span>Стандартный дизайн</span> - 6000р</h1>
            <div class="variation_items">
              <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="variation">
                    <h4>Вариант дизайна «<?php echo $company_name ?>» 1</h4>
                    <a href="var1/index.php" class="batton">Посмотреть Дизайн</a>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="variation">
                    <h4>Вариант дизайна «<?php echo $company_name ?>» 2</h4>
                    <a href="var2/index.php" class="batton">Посмотреть Дизайн</a>
                  </div>
                </a></div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="variation">
                    <h4>Вариант дизайна «<?php echo $company_name ?>» 3</h4>
                    <a href="var3/index.php" class="batton">Посмотреть Дизайн</a>
                  </div>
                </div>

              </div>
              <div class="row">
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="variation">
                    <h4>Вариант дизайна «<?php echo $company_name ?>» 4</h4>
                    <a href="var4/index.php" class="batton">Посмотреть Дизайн</a>
                  </div>
                </div>



                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="variation">
                    <h4>Вариант дизайна «<?php echo $company_name ?>» 5</h4>
                    <a href="var5/index.php" class="batton">Посмотреть Дизайн</a>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-6">
                  <div class="variation">
                    <h4>Вариант дизайна «<?php echo $company_name ?>» 6</h4>
                    <a href="var6/index.php" class="batton">Посмотреть Дизайн</a>
                  </div>
                </div>
                <!--div class="col-md-3 col-sm-6 col-xs-6">
                  <div class="variation">
                    <h4>Вариант дизайна <?php echo $company_name ?> 7</h4>
                    <a href="#" class="batton">Посмотреть Дизайн</a>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-6">
                  <div class="variation">
                    <h4>Вариант дизайна <?php echo $company_name ?> 8</h4>
                    <a href="#" class="batton">Посмотреть Дизайн</a>
                  </div>
                </div-->
              </div>
            </div>
            <div class="variation_individual">
            <h1><span>Индивидуальный дизайн</span> - от 10,000р</h1>
            <a href="#"><img class="individual" src="img/spesial_design.jpg" alt="Индивидуальный дизайн"></a>
            </div>
        </div>



        <div class="docs text-center">
          <h1>Договор и способы оплаты</h1>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-4 ">
              <img src="img/contract.jpg" alt="" class="image_style_contact">
              <h4>Образец договора для «<?php echo $company_name ?>»</h4>
              <a href="Obrazec_dogovora.pdf" class="batton">Скачать</a>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-4 ">
              <img src="img/bill.jpg" alt="" class="image_style_contact">
              <h4>Счет для «<?php echo $company_name ?>»</h4>
              <a href="#" class="batton">Скачать</a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4 ">
              <img src="img/e_paiment.png" alt="" class="image_style_contact">
              <h4>Способы оплаты</h4>
              <a href="#" class="batton">Посмотреть</a>
            </div>
          </div>
        </div>

        <div class="why text-center">
          <h1>Для чего нужен сайт?</h1>
          <div class="why_items">
            <div class="row">

              <div class="row">
            <div class="col-md-offset-1 col-md-5 col-sm-12 ">
              <div class="col-md-6 col-sm-8">
              <h3 >Привлечение новых клиентов</h3>
              <p>Каждый день в Интернет заходит минимум 80 000 000 россиян и все они - ваши потенциальные клиенты!</p>
              </div>
              <img src="img/new_client.jpg" alt="Клиенты" class="image_style_why col-md-6 col-sm-4">
            </div>

            <div class="col-md-5 col-sm-12">
              <div class="col-md-6 col-sm-8">
              <h3>Общение с текущими клиентами</h3>
              <p>С помощью сайта можно оперативно отвечать на вопросы, знакомить клиентов с ассортиментом</p>
              </div>
              <img src="img/conversation.jpg" alt="Клиенты" class="image_style_why col-md-6 col-sm-4">
            </div>
          </div>
          <div class="row">
            <div class="col-md-offset-1 col-md-5 col-sm-12">
              <div class="col-md-6 col-sm-8">
              <h3>Быстрое обновление предложений</h3>
              <p>Все клиенты будут в курсе на счет ваших текущих акций, скидок и новинок!</p>
              </div>
              <img src="img/fast_reqest.jpg" alt="Клиенты" class="image_style_why col-md-6 col-sm-4">
            </div>

            <div class="col-md-5 col-sm-12">
              <div class="col-md-6 col-sm-8">
              <h3>Повышение имиджа и статуса</h3>
              <p>Компания с сайтом воспринимается клиентами как серьезная и надежная.</p>
              </div>
              <img src="img/youre_image.jpg" alt="Клиенты" class="image_style_why col-md-6 col-sm-4">
            </div>
          </div>
            </div>
          </div>
        </div>

        <div class="what_u_get text-center">
          <h1>Всего за 6000 рублей Вы получаете:</h1>
          <div class="what_u_get_items row">
            <div class="col-xs-6 col-sm-6  col-md-4 ">
              <img src="img/What_u_get design.jpg" alt="Клиенты" class="image_style_what_u_get">
              <h4>Несколько вариантов дизайна сайта</h4></div>
            <div class="col-xs-6 col-sm-6  col-md-4">
              <img src="img/What_u_get_function.png" alt="Клиенты" class="image_style_what_u_get">
              <h4>Богатый функционал современного корпоративного сайта</h4></div>
            <div class="col-xs-6 col-sm-6  col-md-4">
              <img src="img/What_u_get domen.jpg" alt="Клиенты" class="image_style_what_u_get">
              <h4>Домен .RU или .РФ в вашу собственность</h4></div>
            <div class="col-xs-6 col-sm-6  col-md-4">
              <img src="img/What_u_get server.jpg" alt="Клиенты" class="image_style_what_u_get">
              <h4>Мощный и неограниченный хостинг</h4></div>
            <div class="col-xs-6 col-sm-6  col-md-4">
              <img src="img/What_u_get serch.jpg" alt="Клиенты" class="image_style_what_u_get">
              <h4>Регистрация в поисковых системах и создание стратегии продвижения</h4></div>
            <div class="col-xs-6 col-sm-6  col-md-4">
              <img src="img/What_u_get_tec_help.jpg" alt="Клиенты" class="image_style_what_u_get">
              <h4>Техническая поддержка и мониторинг сайта</h4></div>
            <div class="col-xs-6 col-sm-6  col-md-4">
              <img src="img/What_u_get no virus.png" alt="Клиенты" class="image_style_what_u_get">
              <h4>Резервное копирование сайта и защита от вирусов</h4></div>
            <div class="col-xs-6 col-sm-6  col-md-4">
              <img src="img/What_u_get help.jpg" alt="Клиенты" class="image_style_what_u_get">
              <h4>Помощь в подборе материалов для сайта и бесплатное наполнение сайта</h4></div>
            <div class="col-xs-12 col-sm-12 col-md-4">
              <img src="img/What_u_get money.jpg" alt="Клиенты" class="image_style_what_u_get">
              <h4 class="money">Вознаграждение за каждого привлеченного друга на разработку сайта</h4></div>
          </div>

        </div>

        <div class="why_us text-center">
          <h1>Почему лучше заказать сайт у нас:</h1>
          <div class="why_us_items">
                  <div class="row">
            <div class=" col-xs-12 col-md-4 ">
              <div class="row">
                <div class="why_us_item">
              <img src="img/like_icon.png" alt="Клиенты" class="col-xs-3 col-sm-offset-1 col-sm-2 col-md-offset-0 col-md-4 image_style_why_us">
              <div class="text col-xs-9 col-sm-8 col-md-8 ">
              <h3>Отсутствие ежемесячных платежей</h3>
              <p>Заказав сайт, вы получаете его готовым к работе и не требующим дополнительных затрат. Мы все сделаем сами.</p>
              </div>
              </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-4 ">
              <div class="row">
              <img src="img/bill_icon.png" alt="Клиенты" class=" col-xs-3 col-sm-offset-1 col-sm-2 col-md-offset-0 col-md-4 image_style_why_us ">
              <div class="text col-xs-9 col-sm-8 col-md-8">
              <h3>Постоплата и работа по договору</h3>
              <p>Вы ничем не рискуете, оплата происходит лишь после выполнения 90% работы. Мы работаем по договору.</p>
              </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4 ">
              <div class="row">
              <img src="img/money_icon.png" alt="Клиенты" class="col-xs-3 col-sm-offset-1 col-sm-2 col-md-offset-0 col-md-4 image_style_why_us ">
              <div class="text col-xs-9 col-sm-8 col-md-8">
              <h3>Отличная цена и высокое качество</h3>
              <p>Сайт стоит на порядок дешевле, чем аналоги у любых конкурентов. Проверено!</p>
              </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-xs-12 col-md-4  ">
              <div class="row">
              <img src="img/time_icon.png" alt="Клиенты" class=" col-xs-3 col-sm-offset-1 col-sm-2  col-md-offset-0 col-md-4 image_style_why_us ">
              <div class="text col-xs-9 col-sm-8 col-md-8">
              <h3>Скорость разработки</h3>
              <p>На создание сайта уходит буквально несколько дней.</p>
              </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4  ">
              <div class="row">
              <img src="img/call_icon.png" alt="Клиенты" class=" col-xs-3 col-sm-offset-1 col-sm-2 col-md-offset-0 col-md-4 image_style_why_us">
              <div class="text col-xs-9 col-sm-8 col-md-8">
              <h3>Дистанционная работа</h3>
              <p>Экономит ваше время при общении со специалистами и делает разработку сайта дешевле для вас.</p>
              </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-4">
              <div class="row">
              <img src="img/target_icon.png" alt="Клиенты" class=" col-xs-3 col-sm-offset-1 col-sm-2 col-md-offset-0 col-md-4 image_style_why_us ">
              <div class="text col-xs-9 col-sm-8 col-md-8">
              <h3>Дополнительные услуги</h3>
              <p>Вы можете воспользоваться и другими нашими услугами — цены очень привлекательные. Спланируем продвижение сайта под любой бюджет!</p>
              </div>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div class="docs footer_docs text-center">
          <h1>Договор и способы оплаты</h1>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-4  ">
              <img src="img/contract.jpg" alt="" class="image_style_contact">
              <h4>Образец договора для «<?php echo $company_name ?>»</h4>
              <a href="Obrazec_dogovora.pdf" class="batton">Скачать</a>
            </div>
            <div class="col-xs-6 col-sm-6 col-md-4  ">
              <img src="img/bill.jpg" alt="" class="image_style_contact">
              <h4>Счет для «<?php echo $company_name ?>»</h4>
              <a href="#" class="batton">Скачать</a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-4  ">
              <img src="img/e_paiment.png" alt="" class="image_style_contact">
              <h4>Способы оплаты</h4>
              <a href="#" class="batton">Посмотреть</a>
            </div>
          </div>

        </div>

      </div>
    </div>
    </div>
    <p class="line"></p>
    <footer>
      <div class="footer_info container text-center">
        <div class="row">
            <div class="logo logo_footer col-xs-offset-1 col-xs-11 col-sm-4 col-sm-offset-0 ">
              Logo
            </div>
            <div class="top-contact top-contact_footer  col-xs-12 col-sm-8">
              +7 999 841-57-10
            </div>
            </div>
        </div>
      </div>
    </footer>

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
