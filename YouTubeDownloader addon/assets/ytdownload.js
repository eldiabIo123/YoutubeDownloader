(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  let currentVideoytdownload = [];
  let i = 0;
  let maxlength = 0;
  
  function nopepopup1() {
    const popupPremium1 = document.getElementsByClassName("style-scope ytd-popup-container");
    if (popupPremium1) {
      if (popupPremium1.length > 0) {
        maxlength = popupPremium1.length - 1
        if (i <= maxlength) {
          if (popupPremium1[i].localName === "ytd-offline-promo-renderer") {
            popupPremium1[i].remove();
        } else {
          i = (i + 1);
          setTimeout(nopepopup1, 10)
      }
    } else {
      i = 0;
      setTimeout(nopepopup1, 10);
    }} else {
      setTimeout(nopepopup1, 10);
    }
    } else {
        // Jeśli element nie został jeszcze znaleziony, poczekaj pewien czas i sprawdź ponownie
        setTimeout(nopepopup1, 10); // Sprawdzaj co sekundę (możesz dostosować czas oczekiwania)
    }
  }
  function nopepopup2() {
    const popupPremium2 = document.getElementsByClassName("opened")[0];
    if (popupPremium2) {
      popupPremium2.hidden = true;
      popupPremium2.remove();
      setTimeout(nopepopup2, 10);
    } else {
        // Jeśli element nie został jeszcze znaleziony, poczekaj pewien czas i sprawdź ponownie
        setTimeout(nopepopup2, 10); // Sprawdzaj co sekundę (możesz dostosować czas oczekiwania)
    }
  }

  function sprawdzElement1() {
    const ytdownloadBtnoffical1 = document.getElementsByClassName("yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading ")[2];
  
    if (ytdownloadBtnoffical1) {

        ytdownloadBtnoffical1.addEventListener("click", ytdownloadEventHandler);
        setTimeout(sprawdzElement1, 100);
    } else {
        // Jeśli element nie został jeszcze znaleziony, poczekaj pewien czas i sprawdź ponownie
        setTimeout(sprawdzElement1, 100); // Sprawdzaj co sekundę (możesz dostosować czas oczekiwania)
    }
  }

  function sprawdzElement2() {
    const ytdownloadBtnoffical2 = document.getElementsByClassName("style-scope ytd-menu-popup-renderer iron-selected")[0];

    if (ytdownloadBtnoffical2) {
        if (ytdownloadBtnoffical2.localName === "ytd-menu-service-item-download-renderer") {

        ytdownloadBtnoffical2.addEventListener("click", ytdownloadEventHandler);
        setTimeout(sprawdzElement1, 100);
      } else {
        // Jeśli element nie został jeszcze znaleziony, poczekaj pewien czas i sprawdź ponownie
        setTimeout(sprawdzElement2, 100); // Sprawdzaj co sekundę (możesz dostosować czas oczekiwania)
      }
    } else {
        // Jeśli element nie został jeszcze znaleziony, poczekaj pewien czas i sprawdź ponownie
        setTimeout(sprawdzElement2, 100); // Sprawdzaj co sekundę (możesz dostosować czas oczekiwania)
    }
  }

  const ytdownloadEventHandler = async () => {
    var currentURL = window.location.href;
    var url = "ytdownload:" + currentURL;
    window.location.href = url;
  };

  const newVideoLoaded = async () => {
    const ytdownloadBtnExists = document.getElementsByClassName("ytdownload-btn")[0];

    if (!ytdownloadBtnExists) {
      if (window.location.href && window.location.href.includes("youtube.com/watch")) {
        const ytdownloadBtn = document.createElement("img");

        ytdownloadBtn.src = chrome.runtime.getURL("assets/downloadbtn.png");
        ytdownloadBtn.className = "ytp-button " + "ytdownload-btn";
        ytdownloadBtn.title = "Kliknij, aby pobrać";

        youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
        youtubePlayer = document.getElementsByClassName('video-stream')[0];

        youtubeLeftControls.appendChild(ytdownloadBtn);
        ytdownloadBtn.addEventListener("click", ytdownloadEventHandler);
      } else if (window.location.href && window.location.href.includes("youtube.com/shorts")) {
        console.log("Sorki, ale shorty są za krótkie haha bo wiesz short=krótkie i ogólnie to to nie ma sensu. Pozdrawiam ;D")
      }
    }
  };

  chrome.runtime.onMessage.addListener((obj, sender, response) => {
    const { type, value, videoId } = obj;

    if (type === "NEW") {
      currentVideo = videoId;
      newVideoLoaded();
      sprawdzElement1();
      sprawdzElement2();
      nopepopup1();
      nopepopup2();
    } else if (type === "PLAY") {
      youtubePlayer.currentTime = value;
    } else if ( type === "DELETE") {
      currentVideoytdownload = currentVideoytdownload.filter((b) => b.time != value);
      chrome.storage.sync.set({ [currentVideo]: JSON.stringify(currentVideoytdownload) });
      response(currentVideoytdownload);
    }
  });

  newVideoLoaded();
  sprawdzElement1();
  sprawdzElement2();
  nopepopup1();
  nopepopup2();
})();
