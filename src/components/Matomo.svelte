<script>
  import { onMount } from 'svelte';

  let title = 'Coburg%20-%20Corona-Ampel%20f%C3%BCr%20Franken%20und%20mehr';
  let siteId = '5';
  let url = 'https://tracking.andre-bellmann.de/matomo.php';

  const params = [`?action_name=${title}`, `&rec=1`, `&idsite=${siteId}`];

  params.map((item) => {
    url += item;
  });

  url = url.replace(/\n|\r/g, '');

  onMount(async () => {
    console.log(url);
    const tracking = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    }).then((_res) => _res);
    console.log(tracking);
  });

  /*


    https://tracking.andre-bellmann.de/matomo.php
    ?action_name=Coburg%20-%20Corona-Ampel%20f%C3%BCr%20Franken%20und%20mehr
    &idsite=5
    &rec=1
    &r=046979
    &h=18
    &m=2
    &s=49
    &url=http%3A%2F%2Flocalhost%2Fkreisfreie-stadt-coburg
    &urlref=http%3A%2F%2Flocalhost%3A3000%2Fkreisfreie-stadt-coburg
    &_id=
    &_idts=1605114170
    &_idvc=1
    &_idn=1
    &_refts=0
    &_viewts=1605114170
    &send_image=1
    &pdf=1
    &qt=0
    &realp=0
    &wma=0
    &dir=0
    &fla=0
    &java=0
    &gears=0
    &ag=0
    &cookie=1
    &res=1680x1050
    &gt_ms=11
    &pv_id=rzoLlX
    */
</script>

<div></div>
