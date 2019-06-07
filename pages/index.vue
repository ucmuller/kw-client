<template>
    <section>
        <h1>Hello world.</h1>
        <div v-if="$store.state.auth.user">
            <nuxt-link to="/user/me/Me">secret</nuxt-link>
        </div>
        <div v-else>
            <nuxt-link to="/user/auth/Login">login</nuxt-link>
        </div>
        <div>
            {{ response }}
        </div>
    </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    components: {
        Logo
    },
    asyncData({ app }) {
        return app.$axios.$get('api/v1/kw/event-details')
            .then(res => {
                return { response: res }
            }).catch(e => {
                console.log(e)
            })
    }
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
