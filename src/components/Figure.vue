<template>
    <div
        class="figure"
        ref="figure"
        @mousedown="startDrag"
        @mouseup="stopDrag"
    ></div>
</template>

<script>
export default {
    props: ["zIndex"],

    data() {
        return {
            top: 0,
            left: 0,
            offsetX: null,
            offsetY: null,
            isDragging: false,
        };
    },

    mounted() {
        window.addEventListener("mousemove", this.keepDrag);
    },

    methods: {
        startDrag(e) {
            this.isDragging = !this.isDragging;
            this.offsetX = e.offsetX + 5;
            this.offsetY = e.offsetY;
            this.$emit("zIndexUp");
        },

        stopDrag() {
            if (this.isDragging) {
                this.isDragging = !this.isDragging;
            } else {
                return;
            }
        },

        keepDrag(e) {
            if (this.isDragging) {
                this.top = e.clientY - this.offsetY;
                this.left = e.clientX - this.offsetX;
                this.$refs.figure.style.position = `fixed`;
                this.$refs.figure.style.top = `${this.top}px`;
                this.$refs.figure.style.left = `${this.left}px`;
                this.$refs.figure.style.zIndex = `${this.zIndex}`;
            }
        },
    },
};
</script>

<style>
.figure {
    margin: 0 5px;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    box-shadow: 1px 1px 3px black;
    cursor: pointer;
}

.football {
    width: 55px;
    height: 55px;
    background-image: url(../assets/football.jpg);
    background-size: cover;
    background-position: center;
}
</style>
