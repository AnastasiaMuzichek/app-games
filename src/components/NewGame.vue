<script setup lang="ts">
import { useRouter } from 'vue-router';
import {
    Flex,
    Input,
    Form,
    FormItem,
    DatePicker,
    Select,
    SelectOption,
} from 'ant-design-vue';
import type { SelectProps } from 'ant-design-vue';
import { computed, ref } from 'vue';
import { genres } from '../constants';

const router = useRouter();
function goToMain() {
    router.push('/games');
}

const iconByName = genres.reduce((acc: Record<string, unknown>, genre) => {
    acc[genre.title] = genre.icon;

    return acc;
}, {});
const options: SelectProps['options'] = genres.map((genre) => ({
    label: genre.name,
    value: genre.title,
}));

const genre = ref(genres[0]?.title!);
const icon = computed(() => iconByName[genre.value]);
</script>
<template>
    <Form>
        <FormItem>
            <div class="game-icon">
                <component :is="icon"></component>
            </div>
        </FormItem>
        <FormItem>
            <Input placeholder="Введите название игры"></Input>
        </FormItem>
        <FormItem>
            <DatePicker picker="year" placeholder="Введите год"></DatePicker>
        </FormItem>
        <FormItem>
            <Select :options="options" v-model:value="genre"></Select>
        </FormItem>
    </Form>
    <Button @click="goToMain">Вернуться к выбору игр</Button>
</template>
<style lang="css">
.game-icon {
    padding: 15px;
    border-radius: 20px;
    background: -webkit-linear-gradient(
        90deg,
        #48085e,
        #3d4a8b,
        #237d8d,
        #20ae81,
        #ecea08
    );
    background: linear-gradient(
        90deg,
        #48085e,
        #3d4a8b,
        #237d8d,
        #20ae81,
        #ecea08
    );
    font-size: 110px;
    /* color: #6e0b9f; */
    color: white;
}

.game-icon .ant-icon {
}
</style>
