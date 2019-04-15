<style lang="less">
</style>

<template>
    <div style="margin-top: 100px;">
        <Form ref="formInline" :model="form" :rules="rules" inline>
            <FormItem prop="user">
                <Input type="text" v-model="form.username" placeholder="Username">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="form.password" placeholder="Password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem>
                <Button @click="submit" type="primary">提交</Button>
            </FormItem>
        </Form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                password: '',
                username: ''
            },
            rules: {
                username: [
                    {
                        required: true,
                        message: 'Please fill in the user name',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: 'Please fill in the password.',
                        trigger: 'blur'
                    },
                    {
                        type: 'string',
                        min: 6,
                        message:
                            'The password length cannot be less than 6 bits',
                        trigger: 'blur'
                    }
                ]
            }
        };
    },
    methods: {
        submit() {
            this.$refs['formInline'].validate(valid => {
                if (valid) {
                    this.$store
                        .dispatch('LOGIN', this.form)
                        .then(msg => {
                            this.$Message.success('登录成功！');
                            this.$router.push('/');
                        })
                        .catch(msg => {
                            this.$Message.error(msg);
                        });
                } else {
                    this.$Message.error('请输入正确的用户名和密码!');
                }
            });
        }
    }
};
</script>
