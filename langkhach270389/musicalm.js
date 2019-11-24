/**
 * @supported 29022075FD28,44282AB815B8
 */
var obj = JSON.parse($response.body);

obj["data"]["is_premium"]=1;
obj["meta"]["current_subscription_expiration_date"]= "2 November 2099";
obj["meta"]["current_subscription_expiry_date"]= "2099-11-09 04:48:25";
$done({body: JSON.stringify(obj)});

// Descriptions