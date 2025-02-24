<template>
<div class="contact-form">
  <form>
    <div class="snackbar p-2 rounded-lg transition-opacity duration-1000" :class="snackbarClass">{{ snackbar.text }}&nbsp;</div>    
    <div class="form-row">
      <label for="email-4590" class="caption text-gray-600">{{ $t('emailLabel') }}</label>
      <input id="email-4590" type="text" v-model.trim="$v.email.$model" required class="text-input" :class="{ inputerror: $v.email.$error }"/>
      <div v-if="$v.email.$error && !$v.email.required" class="error">{{ $t('emailIsRequired') }}</div>      
      <div v-if="!$v.email.email" class="error">{{ $t('emailIsNotValid') }}</div>      
    </div>

    <div class="form-row">
      <input id="subject-4590" type="text" v-model="subject" />
    </div>

    <div class="form-row">
      <label for="text-4590" class="caption text-gray-600">{{ $t('text') }}</label>
      <div class="flex flex-col items-end">
        <textarea id="text-4590" v-model.trim="$v.text.$model" required class="text-input" :class="{ inputerror: $v.text.$error }"/>
        <length-counter :value="text" :maxlength="maxTextLength" class="text-xs opacity-70"></length-counter>
        </div>
      <div v-if="$v.text.$error && !$v.text.required" class="error">{{ $t('textIsRequired') }}</div>      
      <div v-if="!$v.text.maxLength" class="error">{{ $t('textCannotBeLongerThanX0', [maxTextLength]) }}</div>            
    </div>

    <div class="form-row">
      <input id="accept-4590" type="checkbox" v-model="$v.accept.$model" required :class="{ inputerror: $v.accept.$error }">
      <label for="accept-4590" class="checkbox-caption">
        <i18n tag="div" path="acceptConditions">
          <nuxt-link :to="{name: `privacy___${$i18n.locale}`}">
              <i18n path="privacyPolicy"></i18n>
          </nuxt-link>
        </i18n>
      </label>
      <div v-if="$v.accept.$error && !$v.accept.checked" class="error">{{ $t('pleaseAccept') }}</div>
    </div>

    <div class="cta-button my-8" @click="sendMessage">{{ $t('sendMessage') }}</div>
  </form>
</div>



</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'  

  export default {
    mixins: [validationMixin],
    data: function() {
        return {
            email: '',
            subject: '',
            text: '',
            accept: false,
            snackbar: { },
            maxTextLength: 1000,
            maxEmailLength: 200
        }
    },
    validations: {
      email: {
        required,
        maxLength: function(v) { return v.length <= this.maxEmailLength } ,
        email
      },
      text: {
        required,
        maxLength: function(v) { return v.length <= this.maxTextLength } 
      },
      accept: {
        checked: (v) => v
      }
    },

    methods: {
      async sendMessage () {
        this.$v.$touch()
        if (this.$v.$invalid) {
            return
        }

        const formData = new FormData();
        formData.append('clientId', this.$config.emailClientId)
        formData.append('senderEmail', this.email)
        formData.append('subject', this.subject)
        formData.append('text', this.text)

        try {
          
          const response = await this.$axios.post('/contactformemail', formData)

          this.reset()
         
          this.showHideSnackbar({
            color: "success",
            text: this.$t('thankYouForTheMessage')
          })

        } catch (error) {
          console.log('error', error)          
          this.showSnackbar({
            color: "error",
            text: this.$t('errorDuringSendingTheMessage')
          })          
        }

      },
      showSnackbar(snackbar) {
        this.snackbar = {
          ...snackbar,
          show: true
        }
      },
      hideSnackbar() {
        this.snackbar = {}
      },
      showHideSnackbar(snackbar) {
        this.showSnackbar(snackbar)
        setTimeout(() => {
          this.hideSnackbar()
        }, 3000);
      },
      reset() {
        this.email = ''
        this.subject = ''
        this.text = ''
        this.accept = false
        this.$v.$reset()
      }
    },
    computed: {
      snackbarClass() {
        return {
          'bg-green-300': this.snackbar.color==='success',
          'bg-red-300': this.snackbar.color==='error',
          'opacity-0': !this.snackbar.show,
          'opacity-100': this.snackbar.show
        }
      }
    }
  }
</script>

<style scoped>
#subject-4590 {
    display: none;
}
.caption {
  width: 20em;
  max-width: 20em;
  display: inline-block;
}
.checkbox-caption {
  display: inline-block;
}
.text-input {
  @apply w-full rounded-lg;
}
.form-row {
  @apply mt-4;
}
.error {
  @apply text-red-600 text-sm;
}
.inputerror {
  @apply border-red-300;
}
</style>

<i18n lang=yaml>
en:
    emailLabel: "Your email"
    subjectLabel: "Subject"
    acceptConditions: "You accept our {0}, don't you?"
    privacyPolicy: "Privacy Policy"
    pleaseAccept: "Please accept our Privacy Policy"
    sendMessage: "Send message"
    text: "Your message"    
    textIsRequired: "Message text is required"
    emailIsRequired: "Your email is required"
    emailIsNotValid: "The email is not valid"
    textCannotBeLongerThanX0: "Text cannot be longer then {0} characters"
    thankYouForTheMessage: "Thank you very much for your message!"
    errorDuringSendingTheMessage: "There was an error during sending the message"
de:
    emailLabel: "Ihre E-Mail"
    subjectLabel: "Betreff"
    acceptConditions: "Sie akzeptieren unsere {0}, nicht Wahr?"
    privacyPolicy: "Datenschutzrichtlinien"
    pleaseAccept: "Bitte unsere Datenschutzrichtlinien akzeptieren"
    sendMessage: "Nachricht senden"
    text: "Ihre Nachricht"    
    textIsRequired: "Nachrichten-Text wird vorausgesetzt"
    emailIsRequired: "Ihre E-Mail wird vorausgesetzt"
    emailIsNotValid: "Die E-Mail ist ungültig"
    textCannotBeLongerThanX0: "Nachrichten-Text darf {0} Zeichen nicht überschreiten"
    thankYouForTheMessage: "Herzlichen Dank für Ihre Nachricht!"
    errorDuringSendingTheMessage: "There was an error during sending the message"
</i18n>