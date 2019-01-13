<style>
    /* .about-us{

    } */
</style>
<template>
    <div class="about-us">
        <Card>
            <p slot="title">
                {{ msg }}
            </p>
            <p>
                author: vincent
            </p>
        </Card>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'about-us--关于我们',
            };
        },
    };
</script>
