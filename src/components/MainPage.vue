<script setup lang="ts">
import { Button, Card, Flex } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();
function goToMain() {
    router.push('/');
}
function newGame() {
    router.push('/games/new');
}
</script>
<template>
    <div>
        <Flex wrap="wrap" gap="10">
            <Card @click="newGame">New Game</Card>
            <Card v-for="value in 25">{{ value }} game</Card>
        </Flex>
        <Button @click="goToMain">Выход</Button>
    </div>
</template>
