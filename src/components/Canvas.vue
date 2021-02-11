<template>
    <div>
        <canvas
            id="myCanvas"
            ref="myCanvas"
            width="1024"
            height="740"
            @mousedown="beginDrawing"
            @mousemove="keepDrawing"
            @mouseup="stopDrawing"
            @mouseleave="stopDrawing"
        />
        <Panel
            @changeColor="updateColor"
            @changeMarkerWidth="updateMarkerWidth"
            @eraseCanvas="clearCanvas"
        />
    </div>
</template>

<script>
import Panel from "./Panel.vue";
export default {
    name: "Canvas",
    components: {
        Panel,
    },
    data() {
        return {
            x: 0,
            y: 0,
            isDrawing: false,
            canvas: null,
            color: "black",
            marker: 8,
        };
    },
    methods: {
        drawLine(x1, y1, x2, y2) {
            let ctx = this.canvas;
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.marker;
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.lineJoin = "round";
            ctx.lineCap = "round";
            ctx.stroke();
            ctx.closePath();
        },

        beginDrawing(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
            this.isDrawing = true;
        },

        keepDrawing(e) {
            if (this.isDrawing) {
                this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
                this.x = e.offsetX;
                this.y = e.offsetY;
            }
        },

        stopDrawing(e) {
            if (this.isDrawing) {
                this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
                this.x = 0;
                this.y = 0;
                this.isDrawing = false;
            }
        },

        updateColor(pickedColor) {
            this.color = pickedColor;
        },

        updateMarkerWidth(markerWidth) {
            this.marker = markerWidth;
        },

        clearCanvas() {
            const canvas = document.getElementById("myCanvas");
            const ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        },
    },
    mounted() {
        const c = document.getElementById("myCanvas");
        this.canvas = c.getContext("2d");
    },
};
</script>

<style scoped>
#myCanvas {
    background-image: url(../assets/field.jpg);
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: url(../assets/pen.png) 0 28, auto;
}
</style>
