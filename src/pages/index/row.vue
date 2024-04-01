<template>
    <view :id="id" :class="index % 2 ? 'ListItemOdd' : 'ListItemEven'"> Row {{ index }} : {{ data[index] }} </view>
</template>
<script>
  export default {
    props: ['id', 'index', 'data'],
  }
</script>