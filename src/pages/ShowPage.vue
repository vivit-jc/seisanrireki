<template>
  <q-page class="row items-center justify-evenly">
    <table border="1">
      <tr>
        <th>氏名</th>
        <th>畑番号</th>
        <th>薬剤名</th>
        <th>登録日</th>
      </tr>
      <tr v-for="p in posts" :key="p.timestamp">
        <td>{{ p.name }}</td>
        <td>{{ p.field_number }}</td>
        <td>{{ p.pesticide }}</td>
        <td>{{ strDate(p.timestamp) }}</td>
      </tr>
    </table>
  </q-page>
</template>

<script setup lang="ts">
import { Post } from 'src/components/models';
import { getPosts } from '../utils/firebase/read';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

let posts = ref([] as Post[]);
const route = useRoute();

onMounted(() => {
  getPosts((data: any) => {
    Object.keys(data).forEach((e) => {
      posts.value.push(data[e]);
    });
    posts.value.sort((a, b) => b.timestamp - a.timestamp);
  });
});

watch(route, (n, p) => {
  location.reload();
});

function strDate(ts: number) {
  const date = new Date(ts);
  return (
    date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
  );
}
</script>
