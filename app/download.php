<?php
 
function downloadJs($file_url, $save_to)
{
    $content = file_get_contents($file_url);
    file_put_contents($save_to, $content);
}
 
// Указываем URL, затем папку от корня сайта и имя файла с расширением.
// Проверьте чтобы на папке были права на запись 777/755
// Метрика
downloadJs('https://mc.yandex.ru/metrika/watch.js', realpath("./js") . '/watch.js');
 
// Google Analytics
downloadJs('http://www.google-analytics.com/analytics.js', realpath("./js") . '/analytics.js');
 
 
?>