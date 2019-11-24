/**
 * @supported 29022075FD28,44282AB815B8
 */
var wb = "Free</key><true /><key>Info</key>";

body = $response.body.replace(/Info<\/key>/g, wb );

$done({body});