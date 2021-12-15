<style>
  .wrapper {
    position: relative;
    z-index: 101;
  }
  .particle {
    width: 100%;
    display: block;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    transform: translate3d(500px, 500px, 300px);
    opacity: 0;
    box-shadow: -100px -100px 0 2px white, -50px -300px 0 2px white, 120px -160px 0 2px white,
      300px -10px 0 2px white, -300px -40px 0 2px white;
    animation: anim 10s ease-out infinite;
  }

  .particle:nth-child(2) {
    left: 10%;
    animation-delay: 0.5s;
  }
  .particle:nth-child(3) {
    left: 25%;
    animation-delay: 1s;
  }
  .particle:nth-child(4) {
    left: 40%;
    animation-delay: 1.5s;
  }
  .particle:nth-child(5) {
    left: 65%;
    animation-delay: 2s;
  }

  .particle:nth-child(6) {
    left: 23%;
    animation-delay: 2.5s;
  }

  .particle:nth-child(7) {
    left: 88%;
    animation-delay: 3s;
  }

  .particle:nth-child(8) {
    left: 37;
    animation-delay: 3.5s;
  }

  .particle:nth-child(9) {
    left: 1%;
    animation-delay: 4s;
  }

  .particle:nth-child(10) {
    left: 99%;
    animation-delay: 4.5s;
  }

  .particle:nth-child(11) {
    left: 10%;
    animation-delay: 5s;
  }
  .particle:nth-child(12) {
    left: 10%;
    animation-delay: 5.5s;
  }
  .particle:nth-child(13) {
    left: 25%;
    animation-delay: 6s;
  }
  .particle:nth-child(14) {
    left: 40%;
    animation-delay: 6.5s;
  }
  .particle:nth-child(15) {
    left: 65%;
    animation-delay: 7s;
  }
  .particle:nth-child(16) {
    left: 23%;
    animation-delay: 7.5s;
  }
  .particle:nth-child(17) {
    left: 88%;
    animation-delay: 8s;
  }
  .particle:nth-child(18) {
    left: 37;
    animation-delay: 8.5s;
  }
  .particle:nth-child(19) {
    left: 1%;
    animation-delay: 9s;
  }
  .particle:nth-child(20) {
    left: 99%;
    animation-delay: 9.5s;
  }
  .particle:nth-child(21) {
    left: 99%;
    animation-delay: 10s;
  }
  .particle:nth-child(22) {
    left: 33%;
    animation-delay: 10.5s;
  }
  .particle:nth-child(23) {
    left: 50%;
    animation-delay: 11s;
  }
  .particle:nth-child(24) {
    left: 99%;
    animation-delay: 11.5s;
  }
  .particle:nth-child(25) {
    left: 1%;
    animation-delay: 12s;
  }

  @keyframes anim {
    from {
      transform: translate3d(0, 1vh, 300px);
      opacity: 1;
    }
    to {
      transform: translate3d(0, 120vh, 0);
      opacity: 0;
    }
  }
</style>

<div class="wrapper">
  {#each { length: 20 } as _, i}
    <div class="particle"></div>
  {/each}
</div>
