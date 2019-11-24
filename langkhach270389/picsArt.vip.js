/**
 * @supported 29022075FD28,44282AB815B8
 */
var obj = JSON.parse($response.body);

obj.subscription= {
  "granted": true
};
obj.is_verified_type= "subscribed";
obj.is_verified= true;
obj.is_verified_type_new=true;
$done({body: JSON.stringify(obj)});

// Mô tả
