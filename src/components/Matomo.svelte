<script context=module>
    import { writable } from 'svelte/store'
  
    const methods = ["getHook", "getQuery", "getContent", "setVisitorId", "buildContentImpressionRequest", "buildContentInteractionRequest", "buildContentInteractionRequestNode", "buildContentInteractionTrackingRedirectUrl", "getContentImpressionsRequestsFromNodes", "getCurrentlyVisibleContentImpressionsRequestsIfNotTrackedYet", "trackCallbackOnLoad", "trackCallbackOnReady", "buildContentImpressionsRequests", "wasContentImpressionAlreadyTracked", "appendContentInteractionToRequestIfPossible", "setupInteractionsTracking", "trackContentImpressionClickInteraction", "internalIsNodeVisible", "isNodeAuthorizedToTriggerInteraction", "replaceHrefIfInternalLink", "getDomains", "getConfigIdPageView", "getConfigDownloadExtensions", "enableTrackOnlyVisibleContent", "clearTrackedContentImpressions", "getTrackedContentImpressions", "clearEnableTrackOnlyVisibleContent", "disableLinkTracking", "getConfigVisitorCookieTimeout", "removeAllAsyncTrackersButFirst", "getConsentRequestsQueue", "getRequestQueue", "unsetPageIsUnloading", "hasConsent", "getRemainingVisitorCookieTimeout", "getVisitorId", "getVisitorInfo", "getAttributionInfo", "getAttributionCampaignName", "getAttributionCampaignKeyword", "getAttributionReferrerTimestamp", "getAttributionReferrerUrl", "setTrackerUrl", "getTrackerUrl", "getPiwikUrl", "addTracker", "getSiteId", "setSiteId", "resetUserId", "setUserId", "getUserId", "setCustomData", "getCustomData", "setCustomRequestProcessing", "appendToTrackingUrl", "getRequest", "addPlugin", "setCustomDimension", "getCustomDimension", "deleteCustomDimension", "setCustomVariable", "getCustomVariable", "deleteCustomVariable", "deleteCustomVariables", "storeCustomVariablesInCookie", "setLinkTrackingTimer", "getLinkTrackingTimer", "setDownloadExtensions", "addDownloadExtensions", "removeDownloadExtensions", "setDomains", "enableCrossDomainLinking", "disableCrossDomainLinking", "isCrossDomainLinkingEnabled", "setCrossDomainLinkingTimeout", "getCrossDomainLinkingUrlParameter", "setIgnoreClasses", "setRequestMethod", "setRequestContentType", "setReferrerUrl", "setCustomUrl", "getCurrentUrl", "setDocumentTitle", "setAPIUrl", "setDownloadClasses", "setLinkClasses", "setCampaignNameKey", "setCampaignKeywordKey", "discardHashTag", "setCookieNamePrefix", "setCookieDomain", "getCookieDomain", "hasCookies", "setSessionCookie", "getCookie", "setCookiePath", "getCookiePath", "setVisitorCookieTimeout", "setSessionCookieTimeout", "getSessionCookieTimeout", "setReferralCookieTimeout", "setConversionAttributionFirstReferrer", "setSecureCookie", "disableCookies", "deleteCookies", "setDoNotTrack", "alwaysUseSendBeacon", "addListener", "enableLinkTracking", "enableJSErrorTracking", "disablePerformanceTracking", "setGenerationTimeMs", "enableHeartBeatTimer", "disableHeartBeatTimer", "killFrame", "redirectFile", "setCountPreRendered", "trackGoal", "trackLink", "getNumTrackedPageViews", "trackPageView", "trackAllContentImpressions", "trackVisibleContentImpressions", "trackContentImpression", "trackContentImpressionsWithinNode", "trackContentInteraction", "trackContentInteractionNode", "logAllContentBlocksOnPage", "trackEvent", "trackSiteSearch", "setEcommerceView", "getEcommerceItems", "addEcommerceItem", "removeEcommerceItem", "clearEcommerceCart", "trackEcommerceOrder", "trackEcommerceCartUpdate", "trackRequest", "ping", "disableQueueRequest", "queueRequest", "getRememberedConsent", "hasRememberedConsent", "requireConsent", "setConsentGiven", "rememberConsentGiven", "forgetConsentGiven", "isUserOptedOut", "optUserOut", "forgetUserOptOut"]
    const delayedCalls = writable([])
  
    export const matomo = methods
      .map(method => ([method, (...args) => delayedCalls.update(calls => [...calls, [method, args]])]))
      .reduce((acc, [key, value]) => ({...acc, [key]: value}), {})
  </script>
  
  <script>
    import { onMount } from 'svelte'
  
    export let url
    export let siteId
    // export let onMetaChange = false
    export let debug = true
    // export let verbose = false
  
    export let cookies = false
    export let consentRequired = false
    // export let consentExpires = 0
    export let doNotTrack = false
    export let heartBeat = 2000
    // export let blockLoading = false
    // export let addNoProxyWorkaround = true
  
    let _matomo
  
    $: scriptUrl = `${url}/jsfortr.js`
    $: trackUrl = `${url}/phpfortr.php`
    $: tracker = _matomo && _matomo.getTracker(trackUrl, siteId)
  
    $: if (tracker && !cookies) tracker.disableCookies()
    $: if (tracker && consentRequired) tracker.requireConsent()
    $: if (tracker && doNotTrack) tracker.setDoNotTrack()
    $: if (tracker && heartBeat) tracker.enableHeartBeatTimer(heartBeat)
  
    $: while (tracker && $delayedCalls.length) {
      const [fnName, args] = $delayedCalls.shift()
      if (tracker[fnName] instanceof Function) {
        if (debug)
        console.log("Calling", fnName, args)
        tracker[fnName](...args)
      } else {
        throw new Error("Trying to call nonexistent function",fnName)
      }
    }
  </script>
  
  <svelte:head>
    <script
      defer
      async
      src={scriptUrl}
      on:load={() => _matomo = window.Matomo}
    ></script>
  </svelte:head>