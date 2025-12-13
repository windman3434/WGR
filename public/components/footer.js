class WgrFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
    <footer class="lg:mx-auto lg:max-w-7xl p-5 lg:px-6 lg:py-6 flex flex-col gap-6">
    <div class="flex flex-col-reverse lg:flex-row justify-between  ">
      <div class="gap-2 flex flex-col justify-center"><h4 class="text-secondary text-lg lg:text-2xl uppercase tracking-wider">Fundacja Ultra</h4><span class="text-secondary uppercase  text-sm lg:text-base font-light">Parkowa 19/14<br>38-400 Krosno<br>tel. + 48 533 683 592<br>office@warsawgravel.pl</span></div>
      <div class="flex"> <img src="/public/img/logo-dark.svg" alt="" class="  lg:w-72 w-40" /> </div>
     </div>  
      <div class="flex items-center justify-between">
       
          <span class="text-accent2 text-sm">©2026 Warsaw Gravel</span>
          <div class="flex gap-4">
            <a class="hover:text-accent1 text-accent2 transition-colors text-sm" href="#privacy">Privacy</a>
            <a class="hover:text-accent1  text-accent2 transition-colors text-sm" href="#terms">Terms</a>
      </div>
    </footer>
     
    `;
  }
}

customElements.define("wgr-footer", WgrFooter);
