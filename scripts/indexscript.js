
function getTrending(url)
{
    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            var response = xhr.responseText;
            var parsedResponse = JSON.parse(response)["coins"];

            var base = document.getElementById("base");

            for (var i = 0; i < 7; i++)
            {
                

                item = document.createElement("a");
                let text = document.createTextNode(parsedResponse[i]["item"]["name"])
                let nextChild = document.createTextNode(parsedResponse[i]["item"]["id"])

                item.appendChild(text);
                

                // item.appendChild(document.createTextNode(",  ID: "));
                // item.appendChild(nextChild);

                // let text = document.createTextNode(parsedResponse[i]["item"]["id"]);

                

                item.href = "coin.html?q=" + parsedResponse[i]["item"]["id"];
                base.appendChild(item);
                base.appendChild(document.createElement("br"));
                base.appendChild(document.createElement("br"));
                
            }
            

            
        }

    };

    xhr.open("GET", url, true);
    xhr.send();

}

getTrending("https://api.coingecko.com/api/v3/search/trending");