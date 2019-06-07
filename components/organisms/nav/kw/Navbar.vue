<template>
    <nav class="teams">
        <div class="kw">
            <div class="kw__logo">
                <nuxt-link to="/kw/dashboard">
                    <img :src="logo" alt="KWロゴ">
                </nuxt-link>
            </div>
        </div>
        <ul class="teams__list">
            <li class="teams__item">
                <nuxt-link to="/kw/">
                    <button class="teams__button teams__button--active">
                        User
                    </button>
                </nuxt-link>

            </li>
            <li class="teams__item">
                <button class="teams__button">
                    School
                </button>
            </li>
            <li class="teams__item">
                <button class="teams__button">
                    Company
                </button>
            </li>
            <li class="teams__item">
                <button class="teams__button">
                    Event
                </button>
            </li>
            <li class="teams__item">
                <button class="teams__button">
                    Book
                </button>
            </li>
            <li class="teams__item">
                <nuxt-link to="/kw/category">
                    <button class="teams__button">
                        Category
                    </button>
                </nuxt-link>

            </li>
            <li class="teams__item">
                <button class="teams__button">
                    Tag
                </button>
            </li>
            <li class="teams__item">
                <button class="teams__button">
                    Role
                </button>
            </li>
            <li class="teams__item">
                <button class="teams__button">
                    Image
                </button>
            </li>
            <li class="teams__item">
                <button class="teams__button">
                    Notification
                </button>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                logo: require('@/assets/image/kw_logo.png')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400,700,900');

    $white: #fff;

    $padding: 18px;
    $item-spacing: 8px;

    %field {
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 400;
        color: #555459;
        padding: 0 0.5rem;
        font-family: "Consolas", monaco, courier, monospace;
    }

    :root {
        --column-bg: #428fee;
        --menu-bg-hover: #680001;
        --active-item: #D3A625;
        --active-item-text: #680001;
        --hover-item: #BE0002;
        --text-color: #FFFFFF;
        --active-presence: #00FFBA;
        --mention-badge: #DE4C0D;
    }

    * {
        box-sizing: border-box;
    }

    html,
    body {
        position: relative;
        width: 100%;
        height: 100%;
        font-size: 17px;
        font-family: "Lato", Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        color: #555459;
        overflow: hidden;
    }

    h1,
    h2,
    h3,
    h4 {
        color: #2C2D30;
    }

    strong {
        font-weight: 700;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        font-size: inherit;
        font-family: inherit;
        text-align: left;
        cursor: pointer;

        &:focus,
        &:hover,
        &:active {
            outline: none;
        }
    }
    .teams {
        width: 75px;
        position: relative;
        height: 100vh;
        background-color: #428fee;
        overflow-y: scroll;
        .kw {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            height: 60px;
            background: white;
            &__logo {
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                width: 75%;
                height: 100%;
                /*margin: 0 auto;*/
            }
        }
        &__list {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            background-color: rgba(#000, 0.4);
        }

        &__item {
            counter-increment: team-counter;
            font-size: 0.8rem;
            color: $white;
            text-align: center;
        }

        &__button {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 1.4rem 0 0.5rem;
            width: 40px;
            height: 40px;
            background: rgba($white, 0.1);
            text-decoration: none;
            border-radius: 5px;
            line-height: 1;
            color: rgba($white, 0.6);
            font-size: 12px;
            font-weight: 700;

            &--active {
                color: $white;
                background: rgba($white, 0.4);
                &:before {
                    content: "";
                    position: absolute;
                    left: -20px;
                    top: 0;
                    width: 7px;
                    height: 100%;
                    background: $white;
                    opacity: 0.7;
                    border-radius: 3px;
                }
            }
            &:hover {
                box-shadow: 0 0 0 5px rgba($white, 0.2);
            }
        }
    }
</style>
