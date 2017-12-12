<<<<<<< HEAD
‘use strict’;
=======
‘use strict’;
>>>>>>> 7a090b51ae85c110181c30c378b64e674d86c568
importScripts(‘sw-toolbox.js’); toolbox.precache([“index.html”,”style/*”]); toolbox.router.get(‘/images/*’, toolbox.cacheFirst); toolbox.router.get(‘/*’, toolbox.networkFirst, { networkTimeoutSeconds: 5});