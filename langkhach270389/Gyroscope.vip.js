/**
 * @supported 29022075FD28,44282AB815B8
 */

let obj = JSON.parse($response.body);
obj.user["active_until_time"] = "2099-01-01T00:00:00Z";
$done({body: JSON.stringify(obj)});
//bynubyta