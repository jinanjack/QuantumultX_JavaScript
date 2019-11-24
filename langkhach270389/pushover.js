/**
 * @supported 29022075FD28,44282AB815B8
 */
var obj = JSON.parse($response.body);

obj["user"]["is_ios_licensed"]= true;

$done({body: JSON.stringify(obj)});

// Descriptions