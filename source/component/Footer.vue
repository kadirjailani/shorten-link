<template>
    <footer class="footer-vue">
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>
export default{
    data(){
        return {
            copyright: "Copyright 2017 Vue Test"
        }
    }
}
</script>


<style scope lang="scss">
.footer-vue {
    background-color: #222;
    padding: 20px;
    text-align: center;
    p {
        color: white;
    }
}
</style>