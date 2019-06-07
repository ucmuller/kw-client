<template>
    <div class="category__container">
        <div class="category__wrapper">
            <h2>
                <strong>CategoryMaster</strong>
            </h2>
            <div class="create__button">
                <template v-if="response">
                    <nuxt-link :to="{ name: 'kw-category-id-edit', params: { id: response.id } }">
                        <button class="button">
                            編集
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
                    <td>{{ response.id }}</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>{{ response.name }}</td>
                </tr>
                <tr>
                    <td>color</td>
                    <td>{{ response.color }}</td>
                </tr>
                <tr>
                    <td>filename</td>
                    <td><a href="">{{ response.filename }}</a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "category-id",
        layout: 'kw',
        data() {
            return {
                response: ''
            }
        },
        async asyncData({ $axios, params }) {
            return $axios.$get('category-masters')
                .then(res => {
                    return { response: res.find(cate => cate.id === params.id) }
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
</style>
