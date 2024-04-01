<template>
  <!-- <nut-searchbar v-model="state.keyword" @search="search"></nut-searchbar> -->
  <view class="main_container">
    <view class="wide_container">
      <!-- <nut-swiper :init-page="page" :height="120" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
        <nut-swiper-item v-for="(item, index) in state.recommendList" :key="index">
          <img v-bind:src="item.coverPhoto?.split(',')[0]" alt="" height="120" />
        </nut-swiper-item>
      </nut-swiper> -->
    </view>

    <view class="wide_container">
        <nut-cell-group title="热门俱乐部">
        <!-- <nut-grid :column-num="3">
          <nut-grid-item v-for="(item, index) in state.clubList" :key="index" :text="item.clubName"><nut-avatar><img :src="item.icon"/> </nut-avatar></nut-grid-item>
        </nut-grid> -->
        </nut-cell-group>

    </view>

    <view class="wide_container">
        <virtual-waterfall
          class="List"
          :height="500"
          :item-data="state.defaultList"
          :item-count="10"
          :item-size="100"
          :item="Row"
          width="100%"
        />
    </view>
  </view>
</template>

<script setup>
import { ref,reactive,onMounted,markRaw } from 'vue';
import Taro from '@tarojs/taro'
import { GET } from '../../http/http'
import Row from './row.vue'

const state = reactive({
    keyword: '',
    page: -1,
    size: 20,
    lastSize: 0,
    defaultList: [],
  });

onMounted(() => {
    const params = {}
    params.page = state.page + 1;
    params.size = state.size;
    params.sort = "id,desc";

    GET({
      params: params,
      url: '/api/portal/portal-article/list',
      success: function (res) {
        state.defaultList = state.defaultList.concat(res.data);
        state.page = state.page + 1;
        state.lastSize = res.data.length;
      },
      fail: function () {
      }
    });
  });




</script>

<style>
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list-item {
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
  height: 150px;
  background-color: #f4a8b6;
  border-radius: 10px;
}
</style>