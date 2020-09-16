export default function transferBasket(lineItems) {
    // required for API calls
    // this apiKey is subject to being revoked and changed at any time. 
    // do not reuse this apiKey
    // if you need an apiKey reach out to TTS-Digital-OPE-MPLS@Target.com
    let apiKey = "892df78add06fbe4bdac11646e00d9273f0aa6ea"
    let partnerName = "MINNIEAPPLE" // partner name is assigned to each external partner
    var accessToken

    // this function:
    // - Gets an auth token
    // - Sends a request to add ingredient items to a cart
    // - Re-directs to Target.com checkout page
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
