<template>
  <div class="pin-input-container">
    <div class="pin-input-fields">
      <input
        v-for="(digit, index) in digits"
        :key="index"
        ref="inputs"
        v-model="digits[index]"
        type="text"
        maxlength="1"
        class="pin-input"
        :class="{ 'is-filled': digits[index] }"
        @input="onInput(index)"
        @keydown="onKeyDown($event, index)"
        @paste="onPaste"
        @focus="$event.target.select()"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'PinInput',
  props: {
    length: {
      type: Number,
      default: 5
    },
    autoFocus: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      digits: Array(this.length).fill('')
    }
  },
  mounted () {
    if (this.autoFocus && this.$refs.inputs && this.$refs.inputs.length > 0) {
      this.$refs.inputs[0].focus()
    }
  },
  methods: {
    onInput (index) {
      // Move to next input if current one is filled
      if (this.digits[index] && index < this.length - 1) {
        this.$refs.inputs[index + 1].focus()
      }
      
      // Check if all digits are filled
      this.checkComplete()
    },
    onKeyDown (event, index) {
      // Handle backspace
      if (event.key === 'Backspace') {
        if (this.digits[index] === '') {
          // Move to previous input if current is empty
          if (index > 0) {
            this.digits[index - 1] = ''
            this.$refs.inputs[index - 1].focus()
          }
        }
      }
      
      // Handle arrow keys
      if (event.key === 'ArrowLeft' && index > 0) {
        this.$refs.inputs[index - 1].focus()
      }
      if (event.key === 'ArrowRight' && index < this.length - 1) {
        this.$refs.inputs[index + 1].focus()
      }
    },
    onPaste (event) {
      event.preventDefault()
      const pastedData = (event.clipboardData || window.clipboardData).getData('text')
      const pastedDigits = pastedData.replace(/\D/g, '').split('').slice(0, this.length)
      
      pastedDigits.forEach((digit, index) => {
        if (index < this.length) {
          this.digits[index] = digit
        }
      })
      
      // Focus on the next empty input or the last one
      const nextEmptyIndex = this.digits.findIndex(d => d === '')
      if (nextEmptyIndex !== -1) {
        this.$refs.inputs[nextEmptyIndex].focus()
      } else if (this.$refs.inputs.length > 0) {
        this.$refs.inputs[this.length - 1].focus()
      }
      
      this.checkComplete()
    },
    checkComplete () {
      const pin = this.digits.join('')
      if (pin.length === this.length) {
        this.$emit('complete', pin)
      }
    }
  }
}
</script>

<style scoped>
.pin-input-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}

.pin-input-fields {
  display: flex;
  gap: 0.5rem;
}

.pin-input {
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  text-align: center;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  background-color: white;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.pin-input:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.pin-input.is-filled {
  background-color: #f8f9fa;
}
</style>
