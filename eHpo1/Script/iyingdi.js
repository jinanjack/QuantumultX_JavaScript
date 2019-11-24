/**
 * @supported 29022075FD28,44282AB815B8
 */
var obj = JSON.parse($response.body);

obj.user.vipEndTime = 1761826805;

obj.user.viplimit = 3;

$done({body: JSON.stringify(obj)});
