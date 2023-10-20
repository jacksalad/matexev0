<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card title="登录" color="grey-lighten-4">
          <v-responsive class="mx-auto" max-width="344">
            <v-text-field
              variant="underlined"
              label="Username"
              type="input"
            ></v-text-field>
          </v-responsive>
          <v-responsive class="mx-auto" max-width="344">
            <v-text-field
              variant="underlined"
              label="Password"
              type="input"
            ></v-text-field>
          </v-responsive>
          <br />
          <center>
          <v-btn variant="tonal"> 登录 </v-btn>
          </center>
          <br />
          <br />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style scoped></style>
