<script setup lang="ts">
  type ButtonSizes = 'sm' | 'md' | 'lg';
  
interface Props {
  onClick?: any,
  size?: ButtonSizes,
  text: string,
  disabled?: boolean
}

const props = defineProps<Props>();
const emit = defineEmits(["click"])

const buttonSize = `size-${props.size !== undefined ? props.size : 'md'}`;

const handleClick = () => {
  emit('click');
}

</script>

<template>
  <button :class="`button ${buttonSize} ${props.disabled ? 'disabled': ''}`" @click="handleClick">{{ props.text }}</button>
</template>

<style scoped lang="scss">

  .button {
    background: $color-button-primary;
    border: none;
    min-width: 64px;
    width: 150px;
    min-height: 48px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: medium;
    cursor: pointer;
    color: white;
    white-space: nowrap;
    box-shadow: 8px 8px 30px 0px $color-button-shadow;
    transition: ease-out .2s;

    &:hover {
      background: $color-button-hover;
    }

    &.disabled {
      background: $color-button-disabled;
      color: #525060;
      box-shadow: none;
      cursor: default;
    }

    &.size-sm {
      min-height: 40px; 
    }

    &.size-lg {
      min-height: 56px;;
    }
  }

</style>