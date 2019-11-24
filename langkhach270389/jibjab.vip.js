/**
 * @supported 29022075FD28,44282AB815B8
 */
let obj = JSON.parse($response.body);
obj.data.attributes["is-paid"] = true;
$done({body: JSON.stringify(obj)});
//bynubyta