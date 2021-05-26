<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            color="cwa_low_risk"
            dark
          >
            <v-card-title class="text-h5 mb-5 pt-5">
              Niedriges Risiko

              <v-icon dark style="position:absolute; right: 16px;">mdi-arrow-right</v-icon>
            </v-card-title>

            <v-card-subtitle>
              <ul class="risk mb-2">
                <li>Keine Risiko-Begegnungen</li>
                <li>Aktualisiert: Heute, 06:30</li>
              </ul>
            </v-card-subtitle>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card
            light
            @click.prevent="toggleResultOverlay()"
          >
            <div class="d-flex flex-no-wrap justify-space-between mr-12">
              <div>
                <v-card-title class="text-h5 mb-4">
                  Schnelltest
                </v-card-title>
                <v-card-subtitle>
                  <div class="befund">
                    <span class="">Befund</span> 
                    <span class="text-h6 text-black">SARS-CoV-2</span> 
                    <span class="text-h6 mb-4 clr-negative">Negativ</span> 

                    <span class="">Das Virus SARS-CoV-2 wurde bei Ihnen nicht nachgewiesen.</span> <br>

                    <span class="">Durchgeführt am {{ testDate }}</span> 
                  </div>
                </v-card-subtitle>
              </div>

              <img class="ma-3 card-image elevation-0"  alt="" src="../assets/light/ic_test_result_illustration_negative.png">
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

              <img class="ma-3 card-image" alt="" src="../assets/light/ic_main_illustration_untested.png">
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
                  Keine Zeit gehabt, zum Testzentrum zu gehen? Kein Problem! Benutzen Sie einfach diesen schlechten Web-Klon der offiziellen deutschen Corona Warn App, um jederzeit ein aktuelles, negatives Testergebnis vorlegen zu können. Den Unterschied merkt eh keiner.
                </v-card-subtitle>

              </div>
            </div>

            <v-btn
              elevation="0"
              color="btn_primary"
              class="my-botton mb-4"
              dark
              @click.prevent="settingsDialogOpen = true"
            >ERGEBNIS PERSONALISIEREN</v-btn>

          </v-card>
        </v-col>

        <v-col cols="12" class="mb-16">
          <v-card
            light
          >
            <div class="d-flex flex-no-wrap justify-space-between mb-1">
              <div>
                <v-card-title class="text-h5 mb-4">
                  Disclaimer
                </v-card-title>

                <v-card-subtitle>
                  <p>Ich will ausdrücklich niemanden dazu ermutigen, diese Seite zu missbrauchen, um sich unrechtmäßig Zutritt zu Angeboten zu verschaffen, bei denen der Zutritt nach der Coronaschutzverordnung an einen Negativtest geknüpft ist.</p>
                  <p>Es soll lediglich <b>anschaulich</b> demonstriert werden, dass die Implementierung der Schnelltestergebnisse in der CWA im aktuellen Stand noch weniger als sicherer Nachweis dienen kann, wie ein Impfausweis aus Papier.</p>
                  <p>Beides ist nicht im Ansatz (fälschungs)sicher!</p>
                  <p>Wenn ich diese Webseite auf einem Smartphone im Vollbildmodus aufrufe, wird kaum jemand den Unterschied zur echten CWA erkennen (können).</p>
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

      <v-dialog
        v-model="settingsDialogOpen"
        persistent
        max-width="600px"
      >

        <v-card>
          <v-card-title>
            <span class="headline">Persönliche Daten</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Vor- und Nachname*"
                    hint="Zum Beispiel: Max Mustermann"
                    persistent-hint
                    required
                    v-model="nameInput"
                  ></v-text-field>
                </v-col>
  
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-text-field
                    label="Geburtsdatum*"
                    hint="Format: 01.10.1967"
                    persistent-hint
                    required
                    v-model="bornInput"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small>*Pflichtfelder, wird nur lokal gespeichert</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="blue darken-1"
              text
              @click.prevent="settingsDialogOpen = false"
            >
              Abbrechen
            </v-btn>
            <v-btn
              color="blue darken-1"
              text
              @click.prevent="saveSettingsDialog()"
            >
              Speichern
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>

    <div 
      class="result-overlay"
      v-if="resultOverlayOpen"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-btn icon @click.prevent="toggleResultOverlay()">
              <v-icon color="contrasttext">mdi-close</v-icon>
            </v-btn>
            <h3 class="text-h6">Ihr Testergebnis</h3>
          </v-col>

          <v-col cols="12">

            <v-card
              color="#F1F2F4"
            >
              <v-card-title class="text-h5 mb-4">
                Schnelltest
              </v-card-title>
              <v-card-subtitle>
                <div class="befund">
                  <span class="">Befund</span> 
                  <span class="text-h6 text-black">SARS-CoV-2</span> 
                  <span class="text-h6 mb-4 clr-negative">Negativ</span> 

                  <div v-if="hasName">
                    <span class="pb-2"><b>{{ name }}</b>, geb. {{ born }}</span>
                  </div>

                  <span class="">Das Virus SARS-CoV-2 wurde bei Ihnen nicht nachgewiesen.</span> <br>

                  <div class="timer text-center">
                    <div class="counter">
                      <span class="pt-2">Ergebnis liegt vor seit</span>
                      <span class="mt-1 text-h4 ellapsed-time">{{ getHours }}:{{ getMinutes }}:{{ getSeconds }}</span>
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
    name: 'CWA',

    data () {
      return {
        resultOverlayOpen: false,
        settingsDialogOpen: false,
        currentSeconds: 0,
        bornInput: '',
        nameInput: ''
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
      },
      hasName () {
        try {
          const name = localStorage.getItem('nameInput')
          if (name && name.length) {
            return true
          } 

          return false
        } catch (err) {
          return false
        }
      },
      name () {
        return this.nameInput
      },
      born () {
        return this.bornInput
      }
    },

    methods: {
      toggleResultOverlay () {
        this.resultOverlayOpen = !this.resultOverlayOpen
      },
      goToGithub () {
        location.href = 'https://github.com/eyecatchup/cwa-testnachweis'
      },
      saveSettingsDialog () {
        if (this.bornInput.length && this.nameInput.length) {
          localStorage.setItem('bornInput', this.bornInput)
          localStorage.setItem('nameInput', this.nameInput)
        }
        location.reload()
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

      if (this.hasName) {
        this.bornInput = localStorage.getItem('bornInput')
        this.nameInput = localStorage.getItem('nameInput')
      }
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
  z-index: 9;
  background: #fff;

  h3 {
    display: inline-block;
    line-height: 36px;
    font-size: 21px;
    vertical-align: bottom;
    margin-left: 16px;
  }

  .timer {
    background: #fff;
    color: rgba(0, 0, 0, .87);
    border-radius: 4px !important;
    overflow: hidden;

    .counter {
      color: #fff;
      background: #2E854B;
    }
  }
}

ul.risk {
  list-style-type: none;
  margin-block-start: 0;
  padding-inline-start: 16px;

  li {
    color: #fff;
    font-size: 15px;
    background: url('../assets/light/ic_main_about.png') no-repeat left 9px;
    padding-left: 12px;
    display: block;
    background-position: left center;
    background-size: 20px;
    background-repeat: no-repeat;
    padding-left: 40px;

    &:last-of-type {
      background: url('../assets/light/ic_settings_background_priority_enabled.png') no-repeat left 9px;
      background-position: left center;
      background-size: 20px;
      background-repeat: no-repeat;
    }

    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }
}

.v-btn:not(.v-btn--round).v-size--default {
    min-height: 40px;
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

.ellapsed-time {
  width: 140px !important; 
  display: inline-block !important; 
  font-weight: 600 !important;
}

.card-image {
  display: block;
  position: absolute;
  width: 22%;
  max-width: 100px;
  height: auto;
  right: 0;
  top: 3px;
}

.clr-negative {
  color: #2E854B
}

.text-black {
  color: rgba(0, 0, 0, .87);
}
</style>
