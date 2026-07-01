document.addEventListener("DOMContentLoaded", function () {
  // Page has finished loading. Now, do things.
  loadLayoutByPetraPixel();

  // Add any custom JavaScript code here...
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `
  
      <!-- =============================================== -->
      <!-- HEADER -->
      <!-- =============================================== -->
    <header>
      <div class="header-content">
      <ul>
          <a href="index.html" target="_self">> Home</a> 
          <a href="resources.html" target="_self">> Resources</a>
      </ul>
      </div>
    </header>
        
      <!-- =============================================== -->
      <!-- LEFT SIDEBAR -->
      <!-- =============================================== -->

      <aside class="left-sidebar">

       <img class="full-width-image" src="assets/pfp1.jpg" border=2px>
      <br>
      <p>
      <b>Talyssa Topacio</b> & her cat Boson are based in Southern California. Depending on 
      the day, Talyssa might be a...
      </p>

        <!-- TRUE NAVIGATION -->
        <div class="nav-buttons">
        <nav>
          <ul>
            <li><a href="science.html"><img src="page_headings/scientist.png" alt="Scientist" style="width:70%"></a></li>
            <li><a href="creative.html"><img src="page_headings/creative.png" alt="Creative" style="width:70%"></a></li>
            <li><a href="hobby.html"><img src="page_headings/hobbyist.png" alt="Hobbyist" style="width:70%"></a></li>
          </ul>
        </nav>
        </div>
        
        <img class="full-width-image" src="assets/welcomecats.gif"><br><br>

        <div class="sidebar-section">
         <img src="page_headings/links.png" alt="Links" style="width:70%">
          <ul>
            <a href="https://github.com/talyssaonline">> personal github</a><br>
            <a href="https://www.goodreads.com/user/show/10533005-talyssa">> goodreads</a><br>
            <a href="https://instagram.com/talyssa.jpg">> instagram</a><br>
            <a href="https://substack.com/talyssa">> substack</a><br>
            <a href="https://reallybigcelebrity.tumblr.com">> tumblr</a><br>
            <a href="https://www.are.na/talyssa/channels">> are.na</a><br>
          </ul>

        </div>

        <div class="sidebar-section">
        <img src="assets/email.gif" style="width:50%"><br>
            <p>For professional inquiries please email
            <a href="mailto:sendtotalyssa@gmail.com">sendtotalyssa@gmail.com</a></p>
        </div>

        <img src="assets/book.gif" style="width:50%"><br>
        <a href="https://www.yourworldoftext.com/~talyssa.txt/">★GUESTBOOK★</a><br><br>

        
        
        <div class="sidebar-section">
          <img class="full-width-image" src="assets/DolphinGlobe.gif">
          <marquee>
            <img src="assets/buttons/1.gif" style="width:50%"> 
            <img src="assets/buttons/2.gif" style="width:50%">
          </marquee>
          
        </div>


        
      </aside>
	
      `;
}

function footerHTML() {
  // ${nesting} outputs "./" or "../" depending on current page depth.
  // You can use it to refer to images etc.
  // Example: <img src="${nesting}img/logo.png"> might output <img src="../img/logo.png">

  return `


      <!-- =============================================== -->
      <!-- FOOTER -->
      <!-- =============================================== -->

      <footer>
            <div>Last updated: ${new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</div>
      </footer>`;
}

/* Do not edit anything below this line unless you know what you're doing. */

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

	/* Homepage */
    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      /* Other pages */
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        /* Subnavigation: */
		
        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
          	el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}
