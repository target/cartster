export default function transferBasket(lineItems) {
    // required for API calls
    // this apiKey is subject to being revoked and changed at any time.
    // do not reuse this apiKey
    // if you need an apiKey reach out to TTS-Digital-OPE-MPLS@Target.com
    let apiKey = "892df78add06fbe4bdac11646e00d9273f0aa6ea"
    let partnerName = "cartster" // partner name is assigned to each external partner
    // This token url is not accessible to the public internet.
    // For more details on how to fetch your own basket transfer tokens, reach out to TTS-Digital-OPE-MPLS@Target.com
    let authTokenUrl = "https://cartstertapapi.dev.target.com/gsp/external_token/v1"
    let partnersCommerceHost = "https://api.target.com/"
    var accessToken

    // this function:
    // - Gets an auth token
    // - Sends a request to add ingredient items to a cart
    // - Re-directs to Target.com checkout page
    fetch(authTokenUrl, {
        method: "GET",
        headers: {
            "cache-control": "no-cache",
            "content-type": "application/json"
        },
    })
        .then(response => response.json())
        .then(data => {
            accessToken = data.access_token;
            return accessToken;
        })
        .then(accessToken => {
            return fetch(partnersCommerceHost+"/commerce_partners/v1/cart_items", {
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
            window.location.href = "https://www.target.com/co-cart?access+token="+accessToken;
        });
}
