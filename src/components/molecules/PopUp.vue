<script setup lang="ts"></script>

<template>
  <dialog class="m-pop-up" open>
    <div class="m-pop-up__wrapper u-flex u-flex-col u-layout-barrier"><slot /></div>
  </dialog>
</template>

<style scoped lang="scss">
@import '@/assets/styles/settings-tools.scss';
.m-pop-up {
  &[open] {
    border-width: 0;
    align-items: center;
    backdrop-filter: blur(0.2rem);
    background-color: color-alpha('jet', 0.5);
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }
  &__wrapper {
    backdrop-filter: blur(0.2rem);
    border-radius: 0.25rem;
    background-color: color-alpha('arsenic', 0.5);
    box-shadow: 0 0.6rem 1.5rem 0 rgba(0, 0, 0, 0.25);
    padding: indent('xl');
  }
}
</style>
