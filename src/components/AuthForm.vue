<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import { Form, FormItem, Input, Button, InputPassword } from 'ant-design-vue';
import { useRouter } from 'vue-router';

const router = useRouter();

interface FormState {
    username: string;
    password: string;
}

const formState = ref<FormState>({
    username: '',
    password: '',
});

const disabled = ref(false);

async function finish(values: Record<string, unknown>) {
    console.log(values);
    // const result = await axios.post('/api/auth', values);
    disabled.value = true;
    axios
        .post('/api/auth', values)
        .then(function (response) {
            console.log(response);
            router.push('/games');
        })
        .catch(function (error) {
            console.log(error);
            disabled.value = false;
        });
    // console.log(result);
}
</script>

<template>
    <Form
        :model="formState"
        name=""
        :label-col="{ span: 8 }"
        :wrapper-col="{ span: 16 }"
        autocomplete="off"
        @finish="finish"
    >
        <FormItem
            label="Имя"
            name="username"
            :rules="[{ required: true, message: 'Введите имя' }]"
        >
            <Input v-model:value="formState.username"></Input>
        </FormItem>
        <FormItem
            label="Пароль"
            name="password"
            :rules="[{ required: true, message: 'Введите пароль' }]"
        >
            <InputPassword v-model:value="formState.password"></InputPassword>
        </FormItem>
        <FormItem :wrapper-col="{ offset: 8, span: 16 }">
            <Button type="primary" html-type="submit" :disabled="disabled"
                >OK</Button
            >
        </FormItem>
    </Form>
</template>

<style scoped></style>
