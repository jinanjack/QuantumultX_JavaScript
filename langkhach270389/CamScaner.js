/**
 * @supported 29022075FD28,44282AB815B8
 */
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"1643731200"}}};
$done({body: JSON.stringify(obj)});