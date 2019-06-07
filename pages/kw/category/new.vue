<template>
    <div class="category__container">
        <div class="category__wrapper">
            <h2>
                <strong>CategoryMaster</strong>
            </h2>
            <div class="create__button">
                <button class="button">
                    作成
                </button>
            </div>
        </div>
        <div>
            <table class="table is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                <tr>
                    <th>カラム</th>
                    <th>バリュー</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>name</td>
                    <td>
                        <input class="input is-small" type="text" placeholder="Category Name" v-model="name">
                    </td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>
                        <input class="input is-small" type="text" placeholder="Category Color" v-model="color">
                    </td>
                </tr>
                <tr>
                    <td>filename</td>
                    <td>
                        <input class="input is-small" type="text" placeholder="Filename" v-model="filename">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button class="button is-primary" @click="postCategory">作成</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "categpory_new",
        layout: 'kw',
        data() {
            return {
                name: '',
                color: '',
                filename: ''
            }
        },
        methods: {
            async postCategory() {
                const payload = {
                    name: this.name,
                    color: this.color,
                    filename: this.filename,
                }
                await this.$axios.post("category-masters", payload)
                this.$router.push("/kw/category")
            }
        }
    }
</script>

<style scoped lang="scss">
    .category__container {
        .category__wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
    table {
        table-layout: fixed;
        min-width: 100%;
    }
    tbody th {
        width: 200px;
        min-width: 200px;
    }
    td {
        width: 130px;
        min-width: 130px;
    }
    .td-expand {
        width: 250px;
        min-width: 250px;
    }
    .table__container {
        max-width: 100%;
        overflow: auto;
        /*width: 100%;*/
        /*overflow-x: scroll;*/
    }
    input {
        border: none;
        outline-color: white;
    }
</style>
