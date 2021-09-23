<?php 

#php backend

#get("https://api.coingecko.com/api/v3/search/trending");

function get($url)
{
    #request
    $json = file_get_contents($url);
    $decodedjson = json_decode($json, false);

    echo $decodedjson->item[0]->id;

}

?>

<!DOCTYPE HTML>
<html>
    <head>
        <title>Kaikkea Kryptovaluutoista!</title>

        <!-- Rel's -->

        <link rel="stylesheet" href="style/mainstyle.css" />

        <script src="scripts/indexscript.js"></script>
        <script src="scripts/everything.js"></script>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta charset="UTF-8">
    </head>

    <body>

        <div class="bigDiv">
            <h1>Kaikkea Kryptovaluutoista!</h1>
        </div>

        <hr>

        <div class="bigDiv cryptoNews">

            <h3>Suosituimmat kryptovaluutat ja "coinit" tällä hetkellä</b></h3>
            <p id="values"></p>


            <ul id="base">
            </ul>
    
        </div>


    </body>

    
</html>