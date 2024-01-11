<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
  }>(),
  {
    type: 'primary',
    size: 'medium',
    disabled: false,
  },
);
</script>

<template>
  <button :class="[
    'ui-button',
    `ui-button--${type}`,
    `ui-button--${size}`,
    {
      'ui-button--disabled': disabled,
    },
  ]" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  transition: all 0.3s ease;

  // SIZE
  &--small {
    padding: 4px 8px;
    font-size: 12px;
  }

  &--medium {
    padding: 8px 16px;
    font-size: 16px;
  }

  &--large {
    padding: 12px 24px;
    font-size: 20px;
  }

  // TYPE
  &--primary {
    background-color: #1890ff;
    color: #fff;

    &:hover {
      background-color: #40a9ff;
    }
  }

  &--secondary {
    background-color: #fff;
    color: #1890ff;
    border: 1px solid #1890ff;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  &--danger {
    background-color: #ff4d4f;
    color: #fff;

    &:hover {
      background-color: #ff7875;
    }
  }

  &--disabled {
    background-color: #f5f5f5;
    color: #ccc;
    cursor: not-allowed;
  }
}
</style>