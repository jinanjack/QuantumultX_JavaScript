/**
 * @supported 29022075FD28,44282AB815B8
 */
var body = $response.body;
let obj = JSON.parse(body);
obj.user.subscription["isSubscriptionActive"] = true;
obj.user.subscription["entitlement"] = ["OVER_PRO"];
$done({body:JSON.stringify(obj)});

