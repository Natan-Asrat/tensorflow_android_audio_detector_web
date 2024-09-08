<template>
  <div class="container mt-5">
    <div class="row">
      <!-- Hero Section (Left Column) -->
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h1 class="display-4">Audio Event Detector</h1>
        <p class="lead">This app continuously monitors and records audio, leveraging TensorFlow Lite with the YAMNet model to classify sounds into 521 categories. <br> Based on your chosen triggers (for example, baby crying or gunshots), it sends location-based SMS alerts or initiates a call. Ideal for monitoring multiple devices, the app can centralize alerts to a single location, activating a location receiver app on the recipient’s device. <br> It's perfect for real-time situational awareness and location tracking of certain events.</p>
        <a class="d-none" href="https://play.google.com/store/apps/details?id=com.emicasolutions.natvillefreshmantutor_inamharic" target="_blank">
          <img src="/play.png" alt="Download on Play Store" class="img-fluid mt-3" style="max-width: 50%;"/>
        </a>
        <a href="" target="_blank">
          <img src="/download_apk.png" alt="Download APK" class="img-fluid mt-3" style="max-width: 50%;"/>
        </a>
      </div>

      <!-- Screenshots Section (Right Column) -->
      
      
    </div>
  </div>
</template>

<style scoped>
/* Optional: Add custom styles here */
.hero-section {
  text-align: left;
}

.screenshot {
  max-width: 100%;
  height: auto;

}

.screenshot-t {
    margin-top: 50px;
}
.screenshot-b {
    margin-top: -50px;
}
.phone-mockup {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 400px; /* Adjust based on the phone mockup size */
}

.phone-image {
  width: 100%;
  height: auto;
}

.screenshots {
  position: relative;
}

.screenshot-w{
  height: auto;
  width: 80%;
  margin-left: 20px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
}

.screenshot {
  height: auto;
  width: 25%;
  margin-left: 20px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
}

@media (max-width: 767px) {
  .screenshot {
  height: auto;
  width: 200px;
  object-fit: fit;
  margin-bottom: 10px; /* Adjust spacing between screenshots */
  border-radius: 10px; /* Optional: Rounded corners for screenshots */
  }
  .screenshot-t {
    margin-top: 20px;
}
.screenshot-b {
    margin-top: 20px;
}
}
</style>
