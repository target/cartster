export default function transferBasket(lineItems) {
    let apiKey = "278110ec29dc09245d4ba97a9f1f6c8734838664"
    let partnerName = "MINNIEAPPLE"
    var accessToken

    // get token
    fetch("https://gsp.target.com/gsp/authorizations/v1/client_tokens", {
        method: "POST",
        body: JSON.stringify({client_name: partnerName}),
        headers: {
            "cache-control": "no-cache",
            "content-type": "application/json"
        },
        credentials: 'include'
    })
        .then(response => response.json())
        .then(data => {
            accessToken = data.access_token;
            return accessToken;
        })
        .then(accessToken => {
            return fetch("https://api.target.com/commerce_partners/v1/cart_items", {
                method: "POST",
                body: JSON.stringify({
                    cart_items: lineItems
                }),
                headers: {
                    "x-tgt-partner-name": partnerName,
                    "x-api-key": apiKey,
                    "Authorization": "Bearer " + accessToken,
                    "Content-Type": "application/json"
                }
            });
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.href = "https://www.target.com/co-cart?token=" + accessToken;
        });
}
