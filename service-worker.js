!function(){"use strict";self.addEventListener("activate",(function(t){self.registration.unregister().then((function(){return self.clients.matchAll()})).then((function(t){t.forEach((t=>t.navigate(t.url)))}))}))}();