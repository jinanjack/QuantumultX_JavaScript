/**
 * @supported 29022075FD28,44282AB815B8
 */
var obj = JSON.parse($response.body);

obj= {
  "data": {
    "flag": true,
    "start_time": 1572760027,
    "end_time": 4097368706
  },
  "systime": "",
  "errmsg": "Success",
  "ret": "0"
};

$done({body: JSON.stringify(obj)});

//LK