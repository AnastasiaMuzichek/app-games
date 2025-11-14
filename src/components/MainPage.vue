<script setup lang="ts">
import { Button, LayoutContent, LayoutHeader, Layout } from 'ant-design-vue';
import { LogoutOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToMain() {
    router.push('/');
}
</script>

<template>
    <Layout>
        <LayoutHeader>
            <Button @click="goToMain">
                <template #icon>
                    <LogoutOutlined></LogoutOutlined>
                </template>
                Выход
            </Button>
        </LayoutHeader>
        <LayoutContent></LayoutContent>
    </Layout>
</template>

<style lang="css">
.ant-layout .ant-layout-header {
    background: linear-gradient(
        90deg,
        #48085e,
        #3d4a8b,
        #237d8d,
        #20ae81,
        #ecea08
    );
    text-align: end;
}
</style>
