<template>
    <div>
        <qrcode-stream @decode="onDecode"></qrcode-stream>
        <!-- <qrcode-drop-zone></qrcode-drop-zone> -->
        <!-- <qrcode-capture></qrcode-capture> -->
    </div>
</template>
<script>
export default {
    methods: {
        onDecode (decodedString) {
        alert(decodedString)
        }
    }
}
</script>