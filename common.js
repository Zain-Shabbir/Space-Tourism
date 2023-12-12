document.addEventListener("DOMContentLoaded", function () {
  console.log(toggleBtn);

  const htmlFiles = [
    "Destination-Moon.html",
    "Destination-Mars.html",
    "Destination-Europa.html",
    "Destination-Titan.html",
    "Crew-Commander.html",
    "Crew-Specialist.html",
    "Crew-Pilot.html",
    "Crew-Engineer.html",
    "Tech-Vehicle.html",
    "Tech-Spaceport.html",
    "Tech-Capsule.html",
  ];
  htmlFiles.forEach((file) => {
    fetch(file)
      .then((response) => {
        return response.text();
      })
      .then((html) => {
        // Append the HTML content to the content-container
        document.getElementById("home-page").innerHTML += html;
      })
      .catch((error) => console.error("Error fetching HTML:", error));
  });
  setTimeout(() => {
    // 'active' class from all links
    var links = document.querySelectorAll(".custom-list li");
    // navbar
    // $("*").click(() => {
    // Toggle the visibility of #navItems
    const mobileMenuToggle = document.getElementById("toggleBtn");
    const navContainer = document.getElementById("navItems");
    if (window.innerWidth < 640 && navContainer) {
      console.log(mobileMenuToggle);
      mobileMenuToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        if (
          navContainer.style.display === "none" ||
          navContainer.style.display === ""
        ) {
          navContainer.style.display = "block";
          navContainer.style.position = "absolute";
          navContainer.style.top = "0";
          navContainer.style.right = "0";
        } else {
          navContainer.style.display = "none";
        }
      });
      const lists = document.querySelectorAll("#nav-list li");
      lists.forEach(function (item) {
        item.addEventListener("click", function (e) {
          e.stopPropagation();
          navContainer.style.display = "none";
        });
      });
      document.body.addEventListener("click", function () {
        navContainer.style.display = "none";
      });
    } else {
      console.error("Element with ID 'nav-container' not found.");
    }
    // });
    // navbar ended
    links.forEach(function (link) {
      link.addEventListener("click", function () {
        // Remove 'active' class from all links
        links.forEach(function (otherLink, index) {
          if (otherLink !== link) {
            otherLink.classList.remove("active");
          }
          if (otherLink == link) {
            if (link.id == "destinationBtn") {
              $("body")
                .addClass("bg-destination")
                .removeClass("bg-crew bg-tech");
            } else if (link.id == "crewBtn") {
              $("body")
                .addClass("bg-crew")
                .removeClass("bg-destination bg-tech");
            } else if (link.id == "technologyBtn") {
              $("body")
                .addClass("bg-tech")
                .removeClass("bg-destination bg-crew");
            } else {
              $("body").removeClass("bg-destination bg-crew bg-tech");
            }
          }
        });

        link.classList.add("active");
      });
    });

    document.querySelector("#explore").addEventListener("click", () => {
      document.querySelector("#destinationBtn").click();
    });

    document.querySelector("#destinationBtn").addEventListener("click", () => {
      document.querySelector("#homeMain").innerHTML =
        document.querySelector("#Moon-page").innerHTML;
      document.querySelector("#homeMain").addEventListener("click", (event) => {
        const targetId = event.target.id;

        switch (targetId) {
          case "moon":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Moon-page").innerHTML;

            break;

          case "mars":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Mars-page").innerHTML;

            break;

          case "europa":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Europa-page").innerHTML;
            break;

          case "titan":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Titan-page").innerHTML;
            break;
          default:
            break;
        }
      });
    });
    document.querySelector("#crewBtn").addEventListener("click", () => {
      console.log();

      document.querySelector("#homeMain").innerHTML =
        document.querySelector("#Commander-page").innerHTML;

      document.querySelector("#homeMain").addEventListener("click", (event) => {
        const targetId = event.target.id;

        switch (targetId) {
          case "commander":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Commander-page").innerHTML;

            break;

          case "specialist":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Specialist-page").innerHTML;

            break;

          case "pilot":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Pilot-page").innerHTML;
            break;
          case "engineer":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Engineer-page").innerHTML;
            break;
          default:
            break;
        }
      });

      const roles = ["#crew1", "#crew2", "#crew3", "#crew4"];
      let currentIndex = 0;
      const crew1 = document.querySelector("#crew1");
      const originalCrew1Content = crew1.innerHTML;

      function updateRole() {
        crew1.innerHTML = document.querySelector(roles[currentIndex]).innerHTML;
        currentIndex = (currentIndex + 1) % roles.length;

        if (currentIndex === 0) {
          // If crew1 is shown, reset after a short delay
          setTimeout(resetCrew1, 3000);
        }
      }

      // Set an interval to update the role every 2000 milliseconds (2 seconds)
      const intervalId = setInterval(updateRole, 2000);

      // Function to reset #crew1 to its original content
      function resetCrew1() {
        crew1.innerHTML = originalCrew1Content;
      }
    });
    document.querySelector("#technologyBtn").addEventListener("click", () => {
      document.querySelector("#homeMain").innerHTML =
        document.querySelector("#Vehicle-page").innerHTML;

      document.querySelector("#homeMain").addEventListener("click", (event) => {
        const targetId = event.target.id;

        switch (targetId) {
          case "vehicle":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Vehicle-page").innerHTML;

            break;

          case "spaceport":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Spaceport-page").innerHTML;

            break;

          case "capsule":
            document.querySelector("#homeMain").innerHTML =
              document.querySelector("#Capsule-page").innerHTML;
            break;
          default:
            break;
        }
      });
    });
    document.querySelector("#homeBtn").addEventListener("click", () => {
      console.log();

      document.querySelector("#homeMain").innerHTML = `
      <section
      class="w-full h-index flex lg:flex-row flex-col items-center justify-center lg:justify-around mt-28 lg:mt-0"
    >
      <div
        class="lg:w-[35%] w-[85%] text-center lg:text-start flex flex-col justify-center items-start"
      >
        <p
          class="uppercase text-[#D0D6F9] text-[28px] tracking-[4.7px] m-auto sm:m-0"
          style="font-family: Barlow Condensed"
        >
          So, you want to travel to
        </p>
        <h1
          class="uppercase text-white text-[80px] sm:text-[150px] m-auto sm:ml-[-10px]"
        >
          space
        </h1>
        <p
          class="text-[#D0D6F9] text-[18px] font-[400] leading-[32px] text-justify"
          style="font-family: Barlow"
        >
          Let's face it; if you want to go space, you as well genuinely go
          to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we'll give you a truly out of this world
          experience
        </p>
      </div>
      <div
        id="explore"
        class="bg-white text-black uppercase h-[12rem] w-[12rem] flex justify-center items-center text-[32px] transition-transform hover:scale-105 rounded-full cursor-pointer my-10 lg:my-0"
      >
        explore
      </div>
    </section>
          `;
      document.querySelector("#explore").addEventListener("click", () => {
        document.querySelector("#destinationBtn").click();
      });
    });
  }, 1000);
});
