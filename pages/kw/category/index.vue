<template>
    <div class="category__container">
        <div class="category__wrapper">
            <h2>
                <strong>CategoryMaster</strong>
            </h2>
            <div class="create__button">
                <nuxt-link :to="{ name: 'kw-category-new' }">
                    <button class="button">作成</button>
                </nuxt-link>
            </div>
        </div>
        <table class="table">
            <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>color</th>
                <th>filename</th>
                <th>action</th>
            </tr>
            </thead>
            <tfoot>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>color</th>
                <th>filename</th>
                <th>action</th>
            </tr>
            </tfoot>
            <tbody>
            <tr v-for="res in response" :key="res.id">
                <td>{{ res.id }}</td>
                <td>{{ res.name }}</td>
                <td>{{ res.color }}</td>
                <td><a href="">{{ res.filename }}</a></td>
                <td class="td-expand">
                    <nuxt-link :to="{ name: 'kw-category-id', params: { id: res.id } }">
                        <button class="button">詳細</button>
                    </nuxt-link>
                    <nuxt-link :to="{ name: 'kw-category-id-edit', params: { id: res.id } }">
                        <button class="button is-primary">編集</button>
                    </nuxt-link>
                    <button class="button is-danger" @click="deleteCategory({ id: res.id })">削除</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "categpory_index",
        layout: 'kw',
        data() {
            return {
                response: []
            }
        },
        methods: {
            async deleteCategory(params) {
                const confirm_delete = confirm(`「カテゴリーID ${params.id}」を、本当に削除しますか？`)
                if(confirm_delete) {
                    await this.$axios.delete(`category-masters/${params.id}`)
                    this.$router.push(0)
                }
                else {
                    return false
                }
            }
        },
        async asyncData({ $axios }) {
            return $axios.$get('category-masters')
                .then(res => {
                    return { response: res }
                }).catch(e => {
                    console.log(e)
                })
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
</style>
