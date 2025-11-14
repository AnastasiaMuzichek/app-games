<script setup lang="ts">
import { ref } from 'vue';
import axios from 'axios';
import {
    Form,
    FormItem,
    Input,
    Button,
    InputPassword,
    Flex,
} from 'ant-design-vue';
import { useRouter } from 'vue-router';

interface FormState {
    username: string;
    password: string;
}

const router = useRouter();

const formState = ref<FormState>({
    username: '',
    password: '',
});

const disabled = ref(false);

function finish(values: Record<string, unknown>) {
    disabled.value = true;
    axios
        .post('/api/auth', values)
        .then(function (response) {
            console.log(response);
            router.push('/games');
        })
        .catch(function (error) {
            console.error(error);
            disabled.value = false;
        });
}
</script>

<template>
    <Flex align="center" justify="center" class="auth-form">
        <Form
            :model="formState"
            name=""
            :label-col="{ span: 8 }"
            :wrapper-col="{ span: 16 }"
            autocomplete="off"
            @finish="finish"
        >
            <FormItem>
                <img class="imageLogo" src="../assets/images/logo.png" />
            </FormItem>
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
                <InputPassword
                    v-model:value="formState.password"
                ></InputPassword>
            </FormItem>
            <FormItem :wrapper-col="{ offset: 8, span: 16 }">
                <Button type="primary" html-type="submit" :disabled="disabled"
                    >OK</Button
                >
            </FormItem>
        </Form>
    </Flex>
</template>

<style scoped>
.imageLogo {
    width: 200px;
    height: 200px;
    padding-left: 50px;
}

.auth-form {
    min-height: inherit;
}
</style>
