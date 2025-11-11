<script setup lang="ts">
import { Button } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function goToMain() {
    router.push('/');
}
</script>
<template>
    <div>
        <h3>Страница не найдена</h3>
        <Button @click="goToMain">Вернуться на главную</Button>
    </div>
</template>
