var obj = JSON.parse($response.body);
obj.body = null;
$done({body: JSON.stringify(obj)}); 
/**
 * @supported 29022075
 */