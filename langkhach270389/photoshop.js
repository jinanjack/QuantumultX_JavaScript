/**
 * @supported 29022075FD28,44282AB815B8
 */
let obj = JSON.parse($response.body)
obj.mobileProfile.profileStatus = 'PROFILE_AVAILABLE'
obj.mobileProfile.legacyProfile = '{}'
obj.mobileProfile.relationshipProfile = '{}'
$done({body: JSON.stringify(obj)})
//@ImSingee