class WgrNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<header>
  <nav aria-label="Global" class="mx-auto flex w-full   justify-between pb-6 lg:px-8">
    <div class="flex lg:flex-1">
      <a href="index.html" class="-m-1.5 p-1.5">
        <span class="sr-only">Warsaw Gravel Race</span>
        <img src="../img/logo-dark.svg" alt="" class=" h-auto  w-size-40" />
      </a>
    </div>
    <div class="flex items-start justify-end lg:hidden">
      <button type="button" command="show-modal" commandfor="mobile-menu" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-accent1">
        <span class="sr-only">Open main menu</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon" aria-hidden="true" class="size-6">
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
    <el-popover-group class="hidden lg:flex lg:gap-x-12 items-end">
      <a href="index.html" class="text-sm/6 font-semibold text-secondary hover:text-accent1">Home</a>
      <a href="index.html#rides" class="text-sm/6 font-semibold text-secondary hover:text-accent1">Rides</a>
      <a href="index.html#about" class="text-sm/6 font-semibold text-secondary hover:text-accent1">About</a>
      <a href="register.html" class="text-sm/6 font-semibold text-secondary hover:text-accent1">Join</a>
      <a href="team.html" class="text-sm/6 font-semibold text-secondary hover:text-accent1">Team</a>
      <a href="partners.html" class="text-sm/6 font-semibold text-secondary hover:text-accent1">Our Partners</a>
      <a href="#" class="text-sm/6 font-semibold text-secondary hover:text-accent1">Media</a>
      <a href="../pl/index.html" class="text-sm/6 font-semibold text-secondary hover:text-accent1">🇵🇱 PL</a>
      
    </el-popover-group>
    
   
  </nav>
  <el-dialog>
    <dialog id="mobile-menu" class="backdrop:bg-transparent lg:hidden">
      <div tabindex="0" class="fixed inset-0 focus:outline-none">
        <el-dialog-panel class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-secondary p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div class="flex items-center justify-between">

            <a href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Your Company</span>
              <img src="../img/logo-horizontal.svg" alt="" class="h-4 w-auto" />
            </a>
            
            <button type="button" command="close" commandfor="mobile-menu" class="-m-2.5 rounded-md p-2.5 mr-1 text-primary">
              <span class="sr-only">Close menu</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-slot="icon" aria-hidden="true" class="size-6">
                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
            
                <a href="index.html" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">Home</a>
                <a href="index.html#rides" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">Rides</a>
                <a href="index.html#about" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">About</a>
                <a href="register.html" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">Join</a>
                <a href="team.html" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">Team</a>
                <a href="partners.html" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">Our Partners</a>
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-primary hover:bg-gray-50">Media</a>
               
              </div>
              <div class="py-6">
                <a href="../pl/index.html" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">🇵🇱 PL</a>
              </div>
            </div>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
</header>
    `;
    const dialog = this.querySelector("#mobile-menu");
    if (dialog) {
      const links = dialog.querySelectorAll("a[href]");
      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          const href = link.getAttribute("href") || "";
          const url = new URL(href, window.location.href);
          const targetId = url.hash.slice(1);
          const samePage =
            url.pathname.replace(/\/+$/, "") === window.location.pathname.replace(/\/+$/, "");

          if (targetId && samePage) {
            event.preventDefault();
            const targetEl = document.getElementById(targetId);
            dialog.close();
            if (targetEl) {
              requestAnimationFrame(() => {
                targetEl.scrollIntoView({ behavior: "smooth" });
                history.replaceState(null, "", `#${targetId}`);
              });
            }
            return;
          }

          dialog.close();
        });
      });
    }
  }
}

customElements.define("wgr-nav", WgrNav);
