(() => {
  let youtubeLeftControls, youtubePlayer;
  let currentVideo = "";
  let currentVideoytdownload = [];
  let i = 0;
  let maxlength = 0;
  let more = "Nie";
  
  
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

  function ytdownloadEventHandler() {
    if (more == "Nie") {
      showmore()
    } else {
      document.getElementById('ytdownloaderDiv').style.border = "4px solid rgba(255, 0, 0, 1)";
      setTimeout(() => {document.getElementById('ytdownloaderDiv').style.border = "4px solid rgba(209, 0, 0, 0.75)"}, 400)
      document.getElementById('ytdownloadDivdownbtn').style.border = "4px solid rgba(255, 0, 0, 1)";
      setTimeout(() => {document.getElementById('ytdownloadDivdownbtn').style.border = "4px solid rgba(209, 0, 0, 0.75)"}, 400)
    }
  };

  function alwaysontop() {
    const placeformydiv = document.getElementById('secondary-inner');
    const ytdownloadDivExists = document.getElementById('ytdownloaderDiv');

    if (placeformydiv) {
      if (ytdownloadDivExists) {
        if (placeformydiv.firstChild != ytdownloadDivExists) {
          placeformydiv.insertBefore(ytdownloadDivExists, placeformydiv.firstChild);
        } else {
          setTimeout(alwaysontop, 100)
        }
      } else {
        setTimeout(alwaysontop, 100)
      }
    } else {
      setTimeout(alwaysontop, 100)
    }
  };

  function showmore() {
    let calydiv = document.getElementById('ytdownloaderDiv'); 
    let arrow = document.getElementById('ytdownloadDivarrow');
    let formatall = document.getElementById('ytdownloadDivFormat');
    let formatsuwak = document.getElementById('ytdownloadDivFSuwak');
    let rezoselect = document.getElementById('ytdownloadDivRSelect');
    let downloadbtn = document.getElementById("ytdownloadDivdownbtn");

    if (more == "Nie") {
      more = "Tak";
      calydiv.style.height = "180px";
      arrow.style.transform = "rotate(180deg)";
      arrow.style.top = "24px"
      formatall.style.opacity = "1";
      rezoselect.style.opacity = "1";
      downloadbtn.style.opacity = "1";
    } else if (more == "Tak") {
      more = "Nie";
      calydiv.style.height = "64px";
      arrow.style.transform = "rotate(0deg)";
      arrow.style.top = "-90px"
      formatall.style.opacity = "0";
      rezoselect.style.opacity = "0";
      downloadbtn.style.opacity = "0";
    } else {
      console.error("Ale jak ci się to udało.")
    };

    let ytdownloadrezovbest = document.createElement('option');
    ytdownloadrezovbest.value = "best"
    ytdownloadrezovbest.innerText = "Najwyższa (z filmu)"
    let ytdownloadrezov8k = document.createElement('option');
    ytdownloadrezov8k.value = "8k"
    ytdownloadrezov8k.innerText = "4320p (8k)"
    let ytdownloadrezov4k = document.createElement('option');
    ytdownloadrezov4k.value = "4k"
    ytdownloadrezov4k.innerText = "2160p (4k)"
    let ytdownloadrezov2k = document.createElement('option');
    ytdownloadrezov2k.value = "2k"
    ytdownloadrezov2k.innerText = "1440p (2k)"
    let ytdownloadrezovfhd = document.createElement('option');
    ytdownloadrezovfhd.value = "fhd"
    ytdownloadrezovfhd.innerText = "1080p (FHD)"
    let ytdownloadrezovhd = document.createElement('option');
    ytdownloadrezovhd.value = "hd"
    ytdownloadrezovhd.innerText = "720p (HD)"
    let ytdownloadrezov480 = document.createElement('option');
    ytdownloadrezov480.value = "480"
    ytdownloadrezov480.innerText = "480p"
    let ytdownloadrezov360 = document.createElement('option');
    ytdownloadrezov360.value = "360"
    ytdownloadrezov360.innerText = "360p"
    let ytdownloadrezov240 = document.createElement('option');
    ytdownloadrezov240.value = "240"
    ytdownloadrezov240.innerText = "240p"
    let ytdownloadrezov144 = document.createElement('option');
    ytdownloadrezov144.value = "144"
    ytdownloadrezov144.innerText = "144p"

    let ytdownloadrezoabest = document.createElement('option');
    ytdownloadrezoabest.value = "best"
    ytdownloadrezoabest.innerText = "Najwyższa (z filmu)"
    let ytdownloadrezoa320 = document.createElement('option');
    ytdownloadrezoa320.value = "320"
    ytdownloadrezoa320.innerText = "320kbps"
    let ytdownloadrezoa256 = document.createElement('option');
    ytdownloadrezoa256.value = "256"
    ytdownloadrezoa256.innerText = "256kbps"
    let ytdownloadrezoa192 = document.createElement('option');
    ytdownloadrezoa192.value = "192"
    ytdownloadrezoa192.innerText = "192kbps"
    let ytdownloadrezoa128 = document.createElement('option');
    ytdownloadrezoa128.value = "128"
    ytdownloadrezoa128.innerText = "128kbps"
    let ytdownloadrezoa64 = document.createElement('option');
    ytdownloadrezoa64.value = "64"
    ytdownloadrezoa64.innerText = "64kbps"

    if (localStorage.getItem("format") == "mp4") {
      formatsuwak.style.left = "0px";

      document.getElementById("ytdownloadrezovbest").style.display = "block";
      document.getElementById("ytdownloadrezov8k").style.display = "block";
      document.getElementById("ytdownloadrezov4k").style.display = "block";
      document.getElementById("ytdownloadrezov2k").style.display = "block";
      document.getElementById("ytdownloadrezovfhd").style.display = "block";
      document.getElementById("ytdownloadrezovhd").style.display = "block";
      document.getElementById("ytdownloadrezov480").style.display = "block";
      document.getElementById("ytdownloadrezov360").style.display = "block";
      document.getElementById("ytdownloadrezov240").style.display = "block";
      document.getElementById("ytdownloadrezov144").style.display = "block";
      
      document.getElementById("ytdownloadrezoabest").style.display = "none";
      document.getElementById("ytdownloadrezoa320").style.display = "none";
      document.getElementById("ytdownloadrezoa256").style.display = "none";
      document.getElementById("ytdownloadrezoa192").style.display = "none";
      document.getElementById("ytdownloadrezoa128").style.display = "none";
      document.getElementById("ytdownloadrezoa64").style.display = "none";

    } else if (localStorage.getItem("format") == "mp3") {
      formatsuwak.style.left = "64px";

      document.getElementById("ytdownloadrezovbest").style.display = "none";
      document.getElementById("ytdownloadrezov8k").style.display = "none";
      document.getElementById("ytdownloadrezov4k").style.display = "none";
      document.getElementById("ytdownloadrezov2k").style.display = "none";
      document.getElementById("ytdownloadrezovfhd").style.display = "none";
      document.getElementById("ytdownloadrezovhd").style.display = "none";
      document.getElementById("ytdownloadrezov480").style.display = "none";
      document.getElementById("ytdownloadrezov360").style.display = "none";
      document.getElementById("ytdownloadrezov240").style.display = "none";
      document.getElementById("ytdownloadrezov144").style.display = "none";
      
      document.getElementById("ytdownloadrezoabest").style.display = "block";
      document.getElementById("ytdownloadrezoa320").style.display = "block";
      document.getElementById("ytdownloadrezoa256").style.display = "block";
      document.getElementById("ytdownloadrezoa192").style.display = "block";
      document.getElementById("ytdownloadrezoa128").style.display = "block";
      document.getElementById("ytdownloadrezoa64").style.display = "block";

    } else {
      localStorage.setItem("format", "mp4")
      formatsuwak.style.left = "0px";

      document.getElementById("ytdownloadrezovbest").style.display = "block";
      document.getElementById("ytdownloadrezov8k").style.display = "block";
      document.getElementById("ytdownloadrezov4k").style.display = "block";
      document.getElementById("ytdownloadrezov2k").style.display = "block";
      document.getElementById("ytdownloadrezovfhd").style.display = "block";
      document.getElementById("ytdownloadrezovhd").style.display = "block";
      document.getElementById("ytdownloadrezov480").style.display = "block";
      document.getElementById("ytdownloadrezov360").style.display = "block";
      document.getElementById("ytdownloadrezov240").style.display = "block";
      document.getElementById("ytdownloadrezov144").style.display = "block";
      
      document.getElementById("ytdownloadrezoabest").style.display = "none";
      document.getElementById("ytdownloadrezoa320").style.display = "none";
      document.getElementById("ytdownloadrezoa256").style.display = "none";
      document.getElementById("ytdownloadrezoa192").style.display = "none";
      document.getElementById("ytdownloadrezoa128").style.display = "none";
      document.getElementById("ytdownloadrezoa64").style.display = "none";
    }
  };

  function changeformat() {
    let formatsuwak = document.getElementById('ytdownloadDivFSuwak');

    if (localStorage.getItem("format") == "mp4") {
      localStorage.setItem("format", "mp3")
      formatsuwak.style.left = "64px";

      document.getElementById("ytdownloadrezovbest").style.display = "none";
      document.getElementById("ytdownloadrezov8k").style.display = "none";
      document.getElementById("ytdownloadrezov4k").style.display = "none";
      document.getElementById("ytdownloadrezov2k").style.display = "none";
      document.getElementById("ytdownloadrezovfhd").style.display = "none";
      document.getElementById("ytdownloadrezovhd").style.display = "none";
      document.getElementById("ytdownloadrezov480").style.display = "none";
      document.getElementById("ytdownloadrezov360").style.display = "none";
      document.getElementById("ytdownloadrezov240").style.display = "none";
      document.getElementById("ytdownloadrezov144").style.display = "none";
      
      document.getElementById("ytdownloadrezoabest").style.display = "block";
      document.getElementById("ytdownloadrezoa320").style.display = "block";
      document.getElementById("ytdownloadrezoa256").style.display = "block";
      document.getElementById("ytdownloadrezoa192").style.display = "block";
      document.getElementById("ytdownloadrezoa128").style.display = "block";
      document.getElementById("ytdownloadrezoa64").style.display = "block";

    } else if (localStorage.getItem("format") == "mp3") {
      localStorage.setItem("format", "mp4")
      formatsuwak.style.left = "0px";

      document.getElementById("ytdownloadrezovbest").style.display = "block";
      document.getElementById("ytdownloadrezov8k").style.display = "block";
      document.getElementById("ytdownloadrezov4k").style.display = "block";
      document.getElementById("ytdownloadrezov2k").style.display = "block";
      document.getElementById("ytdownloadrezovfhd").style.display = "block";
      document.getElementById("ytdownloadrezovhd").style.display = "block";
      document.getElementById("ytdownloadrezov480").style.display = "block";
      document.getElementById("ytdownloadrezov360").style.display = "block";
      document.getElementById("ytdownloadrezov240").style.display = "block";
      document.getElementById("ytdownloadrezov144").style.display = "block";
      
      document.getElementById("ytdownloadrezoabest").style.display = "none";
      document.getElementById("ytdownloadrezoa320").style.display = "none";
      document.getElementById("ytdownloadrezoa256").style.display = "none";
      document.getElementById("ytdownloadrezoa192").style.display = "none";
      document.getElementById("ytdownloadrezoa128").style.display = "none";
      document.getElementById("ytdownloadrezoa64").style.display = "none";

    } else {
      localStorage.setItem("format", "mp4")

      document.getElementById("ytdownloadrezovbest").style.display = "block";
      document.getElementById("ytdownloadrezov8k").style.display = "block";
      document.getElementById("ytdownloadrezov4k").style.display = "block";
      document.getElementById("ytdownloadrezov2k").style.display = "block";
      document.getElementById("ytdownloadrezovfhd").style.display = "block";
      document.getElementById("ytdownloadrezovhd").style.display = "block";
      document.getElementById("ytdownloadrezov480").style.display = "block";
      document.getElementById("ytdownloadrezov360").style.display = "block";
      document.getElementById("ytdownloadrezov240").style.display = "block";
      document.getElementById("ytdownloadrezov144").style.display = "block";
      
      document.getElementById("ytdownloadrezoabest").style.display = "none";
      document.getElementById("ytdownloadrezoa320").style.display = "none";
      document.getElementById("ytdownloadrezoa256").style.display = "none";
      document.getElementById("ytdownloadrezoa192").style.display = "none";
      document.getElementById("ytdownloadrezoa128").style.display = "none";
      document.getElementById("ytdownloadrezoa64").style.display = "none";
    }
  }

  function ytdownloadbtn() {
    let currentURL = window.location.href;
    let format = localStorage.getItem("format")
    let resolution = document.getElementById("ytdownloadDivRSelect").value
    let url = "el-ytd:" + "$" + format + "$" + resolution + "$" + currentURL;
    window.location.href = url;
  }  

  function newVideoLoaded() {
    const placeformydiv = document.getElementById('secondary-inner');
    const ytdownloadDivExists = document.getElementById('ytdownloaderDiv');

    if (placeformydiv) {
      if (!ytdownloadDivExists) {
        if (window.location.href && window.location.href.includes("youtube.com/watch")) {
          let ytdownloaddiv = document.createElement('div');
          ytdownloaddiv.id = "ytdownloaderDiv";
          ytdownloaddiv.style.width = "394px";
          ytdownloaddiv.style.height = "64px";
          ytdownloaddiv.style.border = "4px solid rgba(209, 0, 0, 0.75)";
          ytdownloaddiv.style.borderRadius = "8px";
          ytdownloaddiv.style.margin = "4px 0px";
          ytdownloaddiv.style.backgroundColor = "rgba(0,0,0,0.2)";
          ytdownloaddiv.style.transition = "200ms border, 400ms height";
          ytdownloaddiv.style.userSelect = "none";
          let ytdownloaddivicon = document.createElement('img');
          ytdownloaddivicon.src = chrome.runtime.getURL("assets/icon128.png");
          ytdownloaddivicon.style.width = "64px";
          ytdownloaddivicon.style.height = "64px";
          ytdownloaddivicon.alt = "Logo";
          ytdownloaddiv.appendChild(ytdownloaddivicon);
          let ytdownloaddivytdname = document.createElement('p');
          ytdownloaddivytdname.style.fontFamily = chrome.runtime.getURL("assets/ytfont.ttf");
          ytdownloaddivytdname.innerText = "YouTube Downloader";
          ytdownloaddivytdname.style.fontSize = "28px";
          ytdownloaddivytdname.style.fontWeight = "bold";
          ytdownloaddivytdname.style.color = "white";
          ytdownloaddivytdname.style.position = "relative";
          ytdownloaddivytdname.style.left = "64px";
          ytdownloaddivytdname.style.top = "-52px";
          ytdownloaddiv.appendChild(ytdownloaddivytdname);
          let ytdownloaddivytdopenbtn = document.createElement('img');
          ytdownloaddivytdopenbtn.src = chrome.runtime.getURL("assets/arrow.png");
          ytdownloaddivytdopenbtn.id = "ytdownloadDivarrow";
          ytdownloaddivytdopenbtn.style.width = "32px";
          ytdownloaddivytdopenbtn.style.height = "32px";
          ytdownloaddivytdopenbtn.style.borderRadius = "50%";
          ytdownloaddivytdopenbtn.style.position = "relative";
          ytdownloaddivytdopenbtn.style.left = "342px";
          ytdownloaddivytdopenbtn.style.top = "-90px";
          ytdownloaddivytdopenbtn.style.padding = "4px";
          ytdownloaddivytdopenbtn.style.transition = "400ms transform, 400ms top";
          ytdownloaddivytdopenbtn.onclick = showmore;
          ytdownloaddiv.appendChild(ytdownloaddivytdopenbtn);
          let ytdownloaddivformat = document.createElement('div');
          ytdownloaddivformat.id = "ytdownloadDivFormat";
          ytdownloaddivformat.style.opacity = "0";
          ytdownloaddivformat.style.transition = "400ms opacity"
          ytdownloaddivformat.style.width = "128px";
          ytdownloaddivformat.style.height = "32px";
          ytdownloaddivformat.style.backgroundColor = "gray";
          ytdownloaddivformat.style.borderRadius = "16px";
          ytdownloaddivformat.style.border = "4px solid grey"
          ytdownloaddivformat.style.fontSize = "12px";
          ytdownloaddivformat.style.textAlign = "center";
          ytdownloaddivformat.style.position = "relative"
          ytdownloaddivformat.style.top = "-72px";
          ytdownloaddivformat.style.left = "8px";
          ytdownloaddivformat.onclick = changeformat;
          let ytdownloaddivformatsuwak = document.createElement('div');
          ytdownloaddivformatsuwak.id = "ytdownloadDivFSuwak";
          ytdownloaddivformatsuwak.style.transition = "200ms left";
          ytdownloaddivformatsuwak.style.position = "relative";
          ytdownloaddivformatsuwak.style.width = "64px";
          ytdownloaddivformatsuwak.style.height = "32px";
          ytdownloaddivformatsuwak.style.borderRadius = "16px";
          ytdownloaddivformatsuwak.style.backgroundColor = "white";
          ytdownloaddivformat.appendChild(ytdownloaddivformatsuwak);
          let ytdownloaddivformatmp4 = document.createElement('div');
          ytdownloaddivformatmp4.style.textAlign = "center";
          ytdownloaddivformatmp4.innerText = ".mp4";
          ytdownloaddivformatmp4.style.fontSize = "18px";
          ytdownloaddivformatmp4.style.width = "64px";
          ytdownloaddivformatmp4.style.height = "32px";
          ytdownloaddivformatmp4.style.borderRadius = "16px";
          ytdownloaddivformatmp4.style.color = "black";
          ytdownloaddivformatmp4.style.lineHeight = "32px";
          ytdownloaddivformatmp4.style.verticalAlign = "middle";
          ytdownloaddivformatmp4.style.position = "relative";
          ytdownloaddivformatmp4.style.top = "-32px";
          ytdownloaddivformat.appendChild(ytdownloaddivformatmp4);
          let ytdownloaddivformatmp3 = document.createElement('div');
          ytdownloaddivformatmp3.style.textAlign = "center";
          ytdownloaddivformatmp3.innerText = ".mp3";
          ytdownloaddivformatmp3.style.fontSize = "18px";
          ytdownloaddivformatmp3.style.width = "64px";
          ytdownloaddivformatmp3.style.height = "32px";
          ytdownloaddivformatmp3.style.borderRadius = "16px";
          ytdownloaddivformatmp3.style.color = "black";
          ytdownloaddivformatmp3.style.lineHeight = "32px";
          ytdownloaddivformatmp3.style.verticalAlign = "middle";
          ytdownloaddivformatmp3.style.position = "relative";
          ytdownloaddivformatmp3.style.left = "64px";
          ytdownloaddivformatmp3.style.top = "-64px";
          ytdownloaddivformat.appendChild(ytdownloaddivformatmp3);
          ytdownloaddiv.appendChild(ytdownloaddivformat);
          let ytdownloaddivrezo = document.createElement('select');
          ytdownloaddivrezo.id = "ytdownloadDivRSelect";
          ytdownloaddivrezo.style.opacity = "0";
          ytdownloaddivrezo.style.transition = "400ms opacity"
          ytdownloaddivrezo.style.position = "relative";
          ytdownloaddivrezo.style.width = "180px";
          ytdownloaddivrezo.style.height = "32px";
          ytdownloaddivrezo.style.top = "-107px";
          ytdownloaddivrezo.style.left = "148px";
          ytdownloaddivrezo.style.backgroundColor = "gray";
          ytdownloaddivrezo.style.color = "white";

          let ytdownloadrezovbest = document.createElement('option');
          ytdownloadrezovbest.id = "ytdownloadrezovbest";
          ytdownloadrezovbest.value = "best"
          ytdownloadrezovbest.innerText = "Najwyższa (z filmu)"
          let ytdownloadrezov8k = document.createElement('option');
          ytdownloadrezov8k.id = "ytdownloadrezov8k";
          ytdownloadrezov8k.value = "8k"
          ytdownloadrezov8k.innerText = "4320p (8k)"
          let ytdownloadrezov4k = document.createElement('option');
          ytdownloadrezov4k.id = "ytdownloadrezov4k";
          ytdownloadrezov4k.value = "4k"
          ytdownloadrezov4k.innerText = "2160p (4k)"
          let ytdownloadrezov2k = document.createElement('option');
          ytdownloadrezov2k.id = "ytdownloadrezov2k";
          ytdownloadrezov2k.value = "2k"
          ytdownloadrezov2k.innerText = "1440p (2k)"
          let ytdownloadrezovfhd = document.createElement('option');
          ytdownloadrezovfhd.id= "ytdownloadrezovfhd";
          ytdownloadrezovfhd.value = "fhd"
          ytdownloadrezovfhd.innerText = "1080p (FHD)"
          let ytdownloadrezovhd = document.createElement('option');
          ytdownloadrezovhd.id= "ytdownloadrezovhd";
          ytdownloadrezovhd.value = "hd"
          ytdownloadrezovhd.innerText = "720p (HD)"
          let ytdownloadrezov480 = document.createElement('option');
          ytdownloadrezov480.id = "ytdownloadrezov480";
          ytdownloadrezov480.value = "480"
          ytdownloadrezov480.innerText = "480p"
          let ytdownloadrezov360 = document.createElement('option');
          ytdownloadrezov360.id = "ytdownloadrezov360";
          ytdownloadrezov360.value = "360"
          ytdownloadrezov360.innerText = "360p"
          let ytdownloadrezov240 = document.createElement('option');
          ytdownloadrezov240.id = "ytdownloadrezov240";
          ytdownloadrezov240.value = "240"
          ytdownloadrezov240.innerText = "240p"
          let ytdownloadrezov144 = document.createElement('option');
          ytdownloadrezov144.id = "ytdownloadrezov144";
          ytdownloadrezov144.value = "144"
          ytdownloadrezov144.innerText = "144p"
          let ytdownloadrezoabest = document.createElement('option');
          ytdownloadrezoabest.id = "ytdownloadrezoabest";
          ytdownloadrezoabest.value = "best"
          ytdownloadrezoabest.innerText = "Najwyższa (z filmu)"
          let ytdownloadrezoa320 = document.createElement('option');
          ytdownloadrezoa320.id = "ytdownloadrezoa320";
          ytdownloadrezoa320.value = "320"
          ytdownloadrezoa320.innerText = "320kbps"
          let ytdownloadrezoa256 = document.createElement('option');
          ytdownloadrezoa256.id = "ytdownloadrezoa256";
          ytdownloadrezoa256.value = "256"
          ytdownloadrezoa256.innerText = "256kbps"
          let ytdownloadrezoa192 = document.createElement('option');
          ytdownloadrezoa192.id = "ytdownloadrezoa192";
          ytdownloadrezoa192.value = "192"
          ytdownloadrezoa192.innerText = "192kbps"
          let ytdownloadrezoa128 = document.createElement('option');
          ytdownloadrezoa128.id = "ytdownloadrezoa128";
          ytdownloadrezoa128.value = "128"
          ytdownloadrezoa128.innerText = "128kbps"
          let ytdownloadrezoa64 = document.createElement('option');
          ytdownloadrezoa64.id = "ytdownloadrezoa64";
          ytdownloadrezoa64.value = "64";
          ytdownloadrezoa64.innerText = "64kbps"
          ytdownloaddivrezo.appendChild(ytdownloadrezovbest);
          ytdownloaddivrezo.appendChild(ytdownloadrezov8k);
          ytdownloaddivrezo.appendChild(ytdownloadrezov4k);
          ytdownloaddivrezo.appendChild(ytdownloadrezov2k);
          ytdownloaddivrezo.appendChild(ytdownloadrezovfhd);
          ytdownloaddivrezo.appendChild(ytdownloadrezovhd);
          ytdownloaddivrezo.appendChild(ytdownloadrezov480);
          ytdownloaddivrezo.appendChild(ytdownloadrezov360);
          ytdownloaddivrezo.appendChild(ytdownloadrezov240);
          ytdownloaddivrezo.appendChild(ytdownloadrezov144);
          ytdownloaddivrezo.appendChild(ytdownloadrezoabest);
          ytdownloaddivrezo.appendChild(ytdownloadrezoa320);
          ytdownloaddivrezo.appendChild(ytdownloadrezoa256);
          ytdownloaddivrezo.appendChild(ytdownloadrezoa192);
          ytdownloaddivrezo.appendChild(ytdownloadrezoa128);
          ytdownloaddivrezo.appendChild(ytdownloadrezoa64);

          ytdownloaddiv.appendChild(ytdownloaddivrezo);

          let ytdownloaddivdownbtn = document.createElement('div');
          ytdownloaddivdownbtn.style.fontFamily = chrome.runtime.getURL("assets/ytfont.ttf");
          ytdownloaddivdownbtn.id = "ytdownloadDivdownbtn"
          ytdownloaddivdownbtn.innerText = "Pobierz";
          ytdownloaddivdownbtn.style.opacity = "0";
          ytdownloaddivdownbtn.style.color = "white";
          ytdownloaddivdownbtn.style.fontSize = "32px";
          ytdownloaddivdownbtn.style.width = "320px";
          ytdownloaddivdownbtn.style.height = "48px";
          ytdownloaddivdownbtn.style.lineHeight = "48px";
          ytdownloaddivdownbtn.style.border = "4px solid rgba(209, 0, 0, 0.75)";
          ytdownloaddivdownbtn.style.verticalAlign = "middle";
          ytdownloaddivdownbtn.style.textAlign = "center";
          ytdownloaddivdownbtn.style.top = "-96px";
          ytdownloaddivdownbtn.style.left = "8px";
          ytdownloaddivdownbtn.style.position = "relative";
          ytdownloaddivdownbtn.style.borderRadius = "12px";
          ytdownloaddivdownbtn.style.transition = "200ms border, 400ms opacity";
          ytdownloaddivdownbtn.onclick = ytdownloadbtn;
          ytdownloaddiv.appendChild(ytdownloaddivdownbtn);

          if (placeformydiv.firstChild) {
            // Jeśli tak, wstaw nowy div przed pierwszym dzieckiem
            placeformydiv.insertBefore(ytdownloaddiv, placeformydiv.firstChild);
            alwaysontop()
          } else {
            // Jeśli nie, dodaj nowy div jako pierwsze dziecko
            placeformydiv.appendChild(ytdownloaddiv);
            alwaysontop()
          }

        } else if (window.location.href && window.location.href.includes("youtube.com/shorts")) {
          console.log("Sorki, ale shorty są za krótkie haha bo wiesz short=krótkie i ogólnie to to nie ma sensu. Pozdrawiam ;D")
        }
      }
    } else {
      setTimeout(newVideoLoaded, 100);
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
