<template>
    <div class="category__container">
        <div class="category__wrapper">
            <h2>
                <strong>CategoryMaster</strong>
            </h2>
            <div class="cancel__button">
                <template v-if="response">
                    <nuxt-link :to="{ name: 'kw-category'}">
                        <button class="button">
                            戻る
                        </button>
                    </nuxt-link>
                </template>
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
                    <td>id</td>
                    <td>
                        {{ response.id }}
                    </td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>
                        <input class="input is-small" type="text" placeholder="Text input" v-model="response.name">
                    </td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>
                        <input class="input is-small" type="text" placeholder="Text input" v-model="response.color">
                    </td>
                </tr>
                <tr>
                    <td>filename</td>
                    <td>
                        <input class="input is-small" type="text" placeholder="Text input" v-model="response.filename">
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <button class="button is-primary" @click="putCategory">更新</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "category-id-edit",
        layout: 'kw',
        data() {
            return {
                response: ''
            }
        },
        async asyncData({ $axios, route }) {
            return $axios.$get('category-masters')
                .then(res => {
                    return { response: res.find(cate => cate.id === route.params.id) }
                }).catch(e => {
                    console.log(e)
                })
        },
        methods: {
            async putCategory() {
                const payload = {
                    name: this.response.name,
                    color: this.response.color,
                    filename: this.response.filename,
                }
                await this.$axios.put(`category-masters/${this.$route.params.id}`, payload)
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
