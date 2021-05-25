<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            color="cwa_low_risk"
            dark
          >
            <v-card-title class="text-h5 mb-4">
              Niedriges Risiko
            </v-card-title>

            <v-card-subtitle>
              <ul class="risk">
                <li>Keine Risiko-Begegnungen</li>
                <li>Aktualisiert: Heute, 06:30</li>
              </ul>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            light
            @click="toggleResultOverlay()"
          >
            <div class="d-flex flex-no-wrap justify-space-between mr-12">
              <div>
                <v-card-title class="text-h5 mb-4">
                  Schnelltest
                </v-card-title>
                <v-card-subtitle>
                  <div class="befund">
                    <span class="">Befund</span> 
                    <span class="text-h5">SARS-CoV-2</span> 
                    <span class="text-h6 mb-4 clr-negative">Negativ</span> 

                    <span class="">Das Virus SARS-CoV-2 wurde bei Ihnen nicht nachgewiesen.</span> <br>

                    <span class="">Durchgeführt am {{ testDate }}</span> 
                  </div>
                </v-card-subtitle>
              </div>

              <img class="ma-3 card-image elevation-0"  alt="" src="../assets/dark/ic_test_result_illustration_negative.png">
            </div>
            
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            light
          >
            <div class="d-flex flex-no-wrap justify-space-between mb-1 mr-12">
              <div>
                <v-card-title class="text-h5 mb-4">
                  Test registrieren
                </v-card-title>

                <v-card-subtitle>
                  Nutzen Sie die App, um Ihre Testergebnisse abrufen und schneller warnen zu können.
                </v-card-subtitle>

              </div>

              <img class="ma-3 card-image" alt="" src="../assets/light/ic_main_illustration_warnende_personen.png">
            </div>

            <v-btn
              elevation="0"
              color="btn_primary"
              class="my-botton mb-4"
              dark
            >NÄCHSTE SCHRITTE</v-btn>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            light
          >
            <div class="d-flex flex-no-wrap justify-space-between mb-1">
              <div>
                <v-card-title class="text-h5 mb-4">
                  Was ist das hier?
                </v-card-title>

                <v-card-subtitle>
                  Keine Zeit gehabt zum Testzentrum zu gehen? Kein Problem! Benutzen Sie einfach diesen schlechten Web-Klon der offiziellen deutschen Corona Warn App, um jederzeit ein aktuelles, negatives Testergebnis vorlegen zu können. Den Unterschied merkt eh keiner.
                </v-card-subtitle>

              </div>
            </div>

            <v-btn
              elevation="0"
              color="btn_primary"
              class="my-botton mb-4"
              dark
              @click="goToGithub()"
            >SOURCE CODE</v-btn>
          </v-card>
        </v-col>

      </v-row>
    </v-container>

    <div 
      class="result-overlay"
      v-if="resultOverlayOpen"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-btn icon @click="toggleResultOverlay()">
              <v-icon color="contrasttext">mdi-close</v-icon>
            </v-btn>
            <h3 class="text-h6">Ihr Testergebnis</h3>
          </v-col>

          <v-col cols="12">

            <v-card
              light
            >
              <v-card-title class="text-h5 mb-4">
                Schnelltest
              </v-card-title>
              <v-card-subtitle>
                <div class="befund">
                  <span class="">Befund</span> 
                  <span class="text-h5">SARS-CoV-2</span> 
                  <span class="text-h6 mb-4 clr-negative">Negativ</span> 

                  <!-- <span class="pb-2"><b>Stephan Schmitz</b>, geb. 11.04.1985</span> -->

                  <span class="">Das Virus SARS-CoV-2 wurde bei Ihnen nicht nachgewiesen.</span> <br>

                  <div class="timer text-center">
                    <div class="counter">
                      <span class="pt-2">Ergebnis liegt vor seit</span>
                      <span class="mt-1 text-h4 ellapsed-time" style="width: 135px; display: inline-block;">{{ getHours }}:{{ getMinutes }}:{{ getSeconds }}</span>
                      <div class="d-flex flex-no-wrap justify-space-between pb-2" style="color: rgba(255, 255, 255, 0.6); width: 135px;margin-left: calc(50% - 67.5px);">
                        <div>Std</div>
                        <div>Min</div>
                        <div>Sek</div>
                      </div>
                    </div>
                    <div class="ausgestellt">
                      <span class="pt-2 pb-2">Ausgestellt: {{ testDate }}, 01:32 Uhr</span>
                    </div>
                  </div>
                </div>
              </v-card-subtitle>
            </v-card>
       
          </v-col>

          <v-col cols="12">

            <div class="text-h5 pb-2">
              Nachweis-Funktion
            </div>

            <p>Sie können den hier angezeigten Befund auch als Nachweis für das Vorliegen eines negativen Schnelltest-Ergebnisses verwenden.</p>

            <v-btn
              elevation="0"
              color="btn_primary"
              class="my-botton full-width mb-4"
              dark
            >TEST ENTFERNEN</v-btn>
          </v-col>

        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data () {
      return {
        resultOverlayOpen: false,
        currentSeconds: 0
      }
    },

    computed: {
      testDate () {
        return new Date().toLocaleDateString('de-DE', {year: 'numeric', month: '2-digit', day: '2-digit'});
      },
      getSeconds () {
        return ('' + this.currentSeconds).padStart(2, '0')
      },
      getMinutes () {
        const date = this.$date()
        const dateStr = date.format('YYYY-MM-DD')
        const timeStr = date.format('HH:mm:ss')
        const dateStart = this.$date((dateStr + ' 01:32:00'))
        const dateNow = this.$date((dateStr + ' ' + timeStr))
        const minutes = dateStart.diff(dateNow, 'minutes') * -1
        const h = Math.floor(minutes / 60)
        const rest = minutes - (h * 60)
        return ('' + rest).padStart(2, '0')
      },
      getHours () {
        const date = this.$date()
        const dateStr = date.format('YYYY-MM-DD')
        const timeStr = date.format('HH:mm:ss')
        const dateStart = this.$date((dateStr + ' 01:32:00'))
        const dateNow = this.$date((dateStr + ' ' + timeStr))
        return ('' + (dateStart.diff(dateNow, 'hours') * -1)).padStart(2, '0')
      }
    },

    methods: {
      toggleResultOverlay () {
        this.resultOverlayOpen = !this.resultOverlayOpen
      },
      goToGithub () {
        location.href = 'https://github.com/eyecatchup/cwa-testnachweis'
      }
    },

    mounted () {
      setInterval(() => {
        if (this.currentSeconds === 59) {
          this.currentSeconds = 0
        } else {
          this.currentSeconds++
        }
      }, 1000)
    }
  }
</script>

<style scoped lang="scss">
.result-overlay {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  left: 0;
  top: 1px;
  z-index: 999999;
  background: #fff;

  h3 {
    display: inline-block;
    line-height: 36px;
    font-size: 21px;
    vertical-align: bottom;
    margin-left: 16px;
  }

  .timer {
    background: #3F3F43;
    color: #fff;
    border-radius: 4px !important;
    overflow: hidden;

    .counter {
      background: #2E854B;
    }
  }
}

ul.risk {
  li:not(:last-of-type) {
    margin-bottom: 5px;
  }
}

.befund {
  span {
    display: block;
  }
}
.my-botton {
  width: calc(100% - 32px);
  margin-left: 16px;

  &.full-width {
    width: 100%;
    margin-left: 0;
  }
}

.card-image {
  display: block;
  position: absolute;
  width: 75px;
  height: auto;
  right: 0;
}

.clr-negative {
  color: #2E854B
}
// .clr-negative {
//   color: #6ACC8B;
// }
</style>
