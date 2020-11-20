<script>
  import { stores } from '@sapper/app';
  const { page } = stores();

  let pageviews = 0;

  page.subscribe(({ path, params, query }) => {
    pageviews++;
    if (pageviews <= 1) {
      return false;
    }
    if (typeof _paq !== 'undefined') {
      _paq.push(['setCustomUrl', window.location.pathname + window.location.search]);
      if (typeof document !== 'undefined') {
        _paq.push(['setDocumentTitle', document.title]);
      }
      _paq.push(['trackPageView']);
    }
  });
</script>
