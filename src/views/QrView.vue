<template>
    <div>
    <v-toolbar flat>
      <v-toolbar-title class="flex text-center text-h4">
        <span>QR Reader</span>
      </v-toolbar-title>
    </v-toolbar>
    <v-divider class="mb-5"></v-divider>
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