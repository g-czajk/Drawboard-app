<template>
    <div class="panel">
        <div class="panel-category marker-options">
            <p>Grubość markera:</p>
            <input type="range" class="marker" min="1" max="16" step="1"
            value:="8" v-model="markerWidth" @change="emitMarkerWidth" />
            <p class="marker-width">{{ markerWidth }} px</p>
        </div>
        <div class="panel-category color-options">
            <p>Kolor markera:</p>
            <div class="colors-wrap">
                <div class="color-wrap">
                    <div class="color-indicator color-black"></div>
                    <input
                        type="radio"
                        name="color"
                        class="color option-black"
                        checked
                        value="black"
                        v-model="pickedColor"
                        @change="emitColor"
                    />
                </div>
                <div class="color-wrap">
                    <div class="color-indicator color-green"></div>
                    <input
                        type="radio"
                        name="color"
                        class="color option-green"
                        value="green"
                        v-model="pickedColor"
                        @change="emitColor"
                    />
                </div>
                <div class="color-wrap">
                    <div class="color-indicator color-red"></div>
                    <input
                        type="radio"
                        name="color"
                        class="color option-red"
                        value="#eb2633"
                        v-model="pickedColor"
                        @change="emitColor"
                    />
                </div>
                <div class="color-wrap">
                    <div class="color-indicator color-blue"></div>
                    <input
                        type="radio"
                        name="color"
                        class="color option-blue"
                        value="#096a9e"
                        v-model="pickedColor"
                        @change="emitColor"
                    />
                </div>
            </div>
        </div>
        <div class="panel-category clear">
            <div class="erase-canvas">
                <i
                    class="fas fa-eraser"
                    title="Wyczyść marker"
                    @click="eraseCanvas"
                ></i>
            </div>
            <div class="restart">
                <i
                    class="fas fa-sync-alt"
                    title="Zrestartuj tablicę"
                    @click="restartApp"
                ></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Panel",
    data() {
        return { markerWidth: 8, pickedColor: "black" };
    },
    methods: {
        emitColor() {
            this.$emit("changeColor", this.pickedColor);
        },
        emitMarkerWidth() {
            this.$emit("changeMarkerWidth", this.markerWidth);
        },
        eraseCanvas() {
            this.$emit("eraseCanvas");
        },
        restartApp() {
            location.reload();
        },
    },
};
</script>

<style>
.panel {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.clear {
    display: flex;
    align-items: center;
    justify-content: center;
}

.panel-category {
    margin: 5px 0;
}

.panel-category * {
    margin: 5px;
}

.marker-options,
.color-options,
.colors-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.marker,
.color,
.clear {
    cursor: pointer;
}

.colors-wrap {
    flex-direction: row;
}

.color {
    cursor: pointer;
}

.color-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transform: translateY(-24px);
}

.color-indicator {
    width: 25px;
    height: 25px;
    margin: 0;
    border-radius: 50%;
    transform: translateY(24px);
    z-index: -1;
}

.color-black {
    background-color: black;
}
.color-green {
    background-color: green;
}
.color-red {
    background-color: #eb2633;
}
.color-blue {
    background-color: #096a9e;
}

.clear {
    font-size: 24px;
    transform: translateY(-24px);
}

.erase-canvas i {
    transition: 0.3s;
}

.restart i {
    transition: 0.7s;
}

.erase-canvas i:hover {
    animation: rubber 1s linear both;
}

.restart i:hover {
    transform: rotate(180deg);
}

@keyframes rubber {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-20%);
    }
    50% {
        transform: translateX(20%);
    }
    75% {
        transform: translateX(-20%);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
