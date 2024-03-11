<template>
  <q-page class="row items-center justify-evenly">
    <main-component active :pesticides="pesticides"></main-component>
  </q-page>
</template>

<script setup lang="ts">
import { Pesticide } from 'components/models';
import MainComponent from 'components/MainComponent.vue';
import { ref } from 'vue';

const pesticides = ref<Pesticide[]>([
  {
    name: 'トレボン乳',
    dilution_ratio: 2000,
    day: 14,
    target: 'アブラムシ類',
    limit: 3,
  },
  {
    name: 'マラソン乳剤',
    dilution_ratio: 1000,
    day: 7,
    target: 'ウドノメイガ',
    limit: 3,
  },
  {
    name: 'コテツフロアブル',
    dilution_ratio: 2000,
    day: 7,
    target: 'ウドノメイガ',
    limit: 2,
  },
  {
    name: 'BT剤（エスマルクDF等）',
    dilution_ratio: 1000,
    day: 1,
    target: 'オオタバコガ・ヨトウムシ',
    limit: 0,
  },
  {
    name: 'エコピタ液剤',
    dilution_ratio: 100,
    day: 1,
    target: 'アブラムシ・ハダニ類',
    limit: 0,
  },
  {
    name: 'アカリタッチ乳剤',
    dilution_ratio: 2000,
    day: 1,
    target: 'ハダニ・うどんこ病',
    limit: 0,
  },
  {
    name: 'モスピラン粒剤',
    dilution_ratio: 4000,
    day: 1,
    target: 'キアゲハ・アブラムシ',
    limit: 3,
  },
  {
    name: 'ロブラール水和剤',
    dilution_ratio: 1000,
    day: 7,
    target: '葉枯病',
    limit: 3,
  },
  {
    name: 'ジーファイン水和剤',
    dilution_ratio: 1000,
    day: 1,
    target: 'うどんこ病・白さび病・軟腐病',
    limit: 0,
  },
  {
    name: 'Zボルドー水和剤',
    dilution_ratio: 500,
    day: 1,
    target: 'べと秒、褐斑細菌病他',
    limit: 0,
  },
  {
    name: 'スラゴ（粒剤）',
    dilution_ratio: 0,
    day: 0,
    target: 'なめくじ・カタツムリ',
    limit: 0,
  },
]);
</script>
