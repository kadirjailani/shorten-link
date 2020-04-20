<template>
  <div>
    <p class="text-center subtitle">{{ smallTitle }}</p>
    <div v-if="hasLink === false">
      <form class="form-default">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">URL</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="www.youtube.com/watch?v=UwxatzcYf9Q"
            aria-label="Username"
            aria-describedby="basic-addon1"
            v-model="inputEntered"
          />
        </div>
        <h6 v-if="showError == true" class="error-message text-center">{{ errorMessage }}</h6>
      </form>

      <!-- <p>{{bodyData.longUrl}}</p> -->

      <div class="d-flex justify-content-center">
        <button
          type="button"
          class="btn btn-primary button-default"
          v-on:click="buttonClick()"
          v-if="isLoading === false"
        >Shorten it!</button>
        <button v-else class="btn btn-primary button-default button-disabled" disabled>
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
    </div>

    <div class="text-center" v-else>
      <h2>
        <a
          v-bind:href="retrievedData.result.shortUrl"
          target="_blank"
        >{{ retrievedData.result.shortUrl }}</a>
      </h2>
      <p>
        from:
        <kbd>{{ inputEntered }}</kbd>
      </p>

      <button
        type="button"
        class="btn btn-primary button-default"
        v-on:click="refreshQuery()"
      >Refresh</button>
    </div>

    <!-- <h4>{{ retrievedData }}</h4> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasLink: false,
      smallTitle: "Place you long url in input below and click to proceed.",
      inputEntered: "",
      currentInput: "",
      retrievedData: "",
      isLoading: false,
      showError: false,
      errorMessage: "😡 Input Empty!",
      errorRespond: ""
    };
  },
  methods: {
    isURL(str) {
      let regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
      return regexp.test(str);
    },
    urlValidationResult(str) {
      // console.log(this.validURL(str));
      if (this.isURL(str) === false) {
        this.showError = true;
        this.errorMessage = "🥴 Please use valid url to shorten!";
        setTimeout(() => {
          this.showError = false;
        }, 8000);
      } else {
        this.isLoading = true;
        this.removeHTTPS(this.inputEntered);
        this.fetchProcess(this.currentInput);
        // console.log("jalan");
      }
    },
    fetchProcess(str) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        longUrl: "http://" + str,
        urlType: "Random",
        urlTitle: "Arraycode Drive",
        authKey: "YXojBFM5VYMdPDkAQuUQ7rCZeXAZm3dkLa"
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(
        "http://api.lnkiy.com/url/shortener/createrandomurl",
        requestOptions
      )
        .then(response => response.json())
        .then(result => {
          this.retrievedData = result;
          this.isLoading = false;
        })
        .then(() => {
          this.hasLink = true;
          this.smallTitle = "You can now share this shorten link to the world!";
        })
        .catch(error => {
          console.log("error", error);
          this.errorRespond = error;
        });
    },
    removeHTTPS(element) {
      if (element.includes("https://")) {
        this.currentInput = element.slice(8);
      } else if (element.includes("http://")) {
        this.currentInput = element.slice(7);
      } else {
        this.currentInput = element.slice(7);
      }
    },
    buttonClick() {
      if ((this.inputEntered === "") | (this.inputEntered === null)) {
        console.log("Empty");
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 8000);
      } else {
        this.urlValidationResult(this.inputEntered);
      }
    },
    refreshQuery: function() {
      this.hasLink = false;
      this.inputEntered = "";
    },
    loading() {
      this.isLoading = true;
    }
  }
};
</script>




