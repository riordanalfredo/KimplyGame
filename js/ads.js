 //initial
function initAds() {
      if (admob) {
        var adPublisherIds = {
          ios : {
            banner : "ca-app-pub-7538563445332968/2786958330",
            interstitial : "ca-app-pub-7538563445332968/4534389938"
          },
          android : {
            banner : "ca-app-pub-7538563445332968/2786958330",
            interstitial : "ca-app-pub-7538563445332968/4534389938"
          }
        };
    	  
        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;
            
        admob.setOptions({
          publisherId:      admobid.banner,
          interstitialAdId: admobid.interstitial,
          tappxIdiOS:       "/XXXXXXXXX/Pub-XXXX-iOS-IIII",
          tappxIdAndroid:   "/XXXXXXXXX/Pub-XXXX-Android-AAAA",
          tappxShare:       0.5,
		  isTesting:        true,
        });

        registerAdEvents();
        
      } else {
        alert('AdMobAds plugin not ready');
      }
    }
    
    function onAdLoaded(e) {
      if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
        	showNextInterstitial = setTimeout(function() {
          	  admob.requestInterstitialAd();
        	}, 5 * 60 * 1000); // 2 minutes
      }
    }

/*
	var adsCountNumber = {
		count = 0;
	}
	
	var STORAGE_KEY_COUNTER = "ads";

	function adsCounter(){

		var counter = JSON.parse(localStorage.getItem(STORAGE_KEY_COUNTER));
        number = parseInt(counter.count);  
		
		number += 1;
		counter.count = number;
		
        localStorage.setItem(STORAGE_KEY_COUNTER, JSON.stringify(counter));
		alert("Counter is working: now it has been counted by: " + number + " times")
		
	}

	function getAdsCounter(){
		
		var counterJSON = localStorage.getItem(STORAGE_KEY_COUNTER);
		if (counterJSON)
		{
			adsCounter();
		}
		else
		{
			localStorage.setItem(STORAGE_KEY_COUNTER, JSON.stringify(adsCountNumber));
		}    
		
		var countObject = JSON.parse(counterJSON);
		var countReturn = parseInt(countObject.count);
		
		return countReturn;
		
	}
   
*/
    
    // optional, in case respond to events
    function registerAdEvents() {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});
    }

        
    function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds(); 

      // display a banner at startup
      admob.createBannerView();
        
      // request an interstitial
      // admob.requestInterstitialAd();
		
	  mute_audio(false);
	 
		
    }

    
    document.addEventListener("deviceready", onDeviceReady, false);	