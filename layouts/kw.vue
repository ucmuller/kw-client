<template>
    <div class="kw__admin">
        <div class="navbar">
            <navbar></navbar>
        </div>
        <div class="main">
            <header class="main__header">
                <h1 class="main__h1">KW Admin</h1>
                <button class="ion-android-close"></button>
            </header>
            <div class="main__content">
                <div class="main__container">
                    <section class="main__section">
                        <nuxt/>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '@/components/organisms/nav/kw/Navbar'
    import Header from '@/components/organisms/header/kw/Header'
    export default {
        layout: 'kw',
        components: {
            Navbar,
            Header
        }
    }
</script>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.kw__admin {
    width: 100%;
    height: 100%;
    display: flex;

    @supports (display: grid) {
        display: grid;
        grid-template-columns: 75px 100% 1fr;
        grid-template-rows: 1fr;
    }
    .navbar {
        overflow-y: scroll;
    }
    .main {
        position: relative;
        height: 100%;
        flex: 1;
        &__header {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 18px;
            box-shadow: 0 0 2px rgba(0,0,0,.15);
            background: white;
        }
        &__content {
            position: relative;
            top: 60px;
            height: calc(100vh - 60px);
            overflow-y: scroll;
            overflow-x: scroll;
        }
        &__container {
            padding: 2rem;
            width: calc(100vw - 75px);
        }
        &__section {
            padding: 2rem 0 0;
            border-bottom: 1px solid #DDD;
            &:last-of-type {
                border-bottom: 0;
            }
        }
    }
}
</style>
