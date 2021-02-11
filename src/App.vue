<template>
    <div>
        <Canvas />
        <div class="figure-container">
            <div class="figure-red">
                <Figure
                    class="red"
                    v-for="n in 8"
                    :key="n.index"
                    :id="n++"
                    @zIndexUp="zIndexUpdate"
                    :zIndex="zIndex"
                />
            </div>

            <div class="football-container">
                <Figure
                    class="football"
                    id="17"
                    @zIndexUp="zIndexUpdate"
                    :zIndex="zIndex"
                />
            </div>

            <div class="figure-blue">
                <Figure
                    class="blue"
                    v-for="n in 8"
                    :key="n.index"
                    :id="n++ + 8"
                    @zIndexUp="zIndexUpdate"
                    :zIndex="zIndex"
                />
            </div>
        </div>
        <div class="icon-attr-wrap">
            <div class="icon-attr">
                'Pen' icon made by
                <a
                    href="https://www.flaticon.com/authors/icongeek26"
                    title="Icongeek26"
                    target="blank"
                    >Icongeek26</a
                >
                from
                <a
                    href="https://www.flaticon.com/"
                    title="Flaticon"
                    target="blank"
                    >www.flaticon.com</a
                >
            </div>
            <div class="icon-attr">
                Other icons by
                <a
                    href="https://www.fontawesome.com/"
                    title="Fontawesome"
                    target="blank"
                    >www.fontawesome.com</a
                >
            </div>
        </div>
        <div class="signature">
            <p>
                Coded by
                <a target="blank" href="https://github.com/g-czajk">G.Cz.</a>,
                2021
            </p>
        </div>
    </div>
</template>

<script>
import Canvas from "./components/Canvas.vue";
import Figure from "./components/Figure.vue";

export default {
    name: "App",
    components: {
        Canvas,
        Figure,
    },
    data() {
        return {
            zIndex: 0,
        };
    },
    methods: {
        zIndexUpdate() {
            this.zIndex++;
        },
    },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.red {
    background-color: #eb2633;
}

.blue {
    background-color: #096a9e;
}

.figure-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 50px;
}

.figure-red {
    flex-basis: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.figure-blue {
    flex-basis: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.icon-attr-wrap,
.signature {
    position: absolute;
    bottom: 0;
    margin: 5px 10px;
    font-family: "Roboto", "sans-serif";
    font-size: 10px;
}

.icon-attr-wrap {
    right: 0;
    text-align: right;
}

.signature {
    left: 0;
    text-align: left;
}

.icon-attr a,
.signature a {
    color: black;
    font-weight: bold;
    text-decoration: none;
}
</style>
