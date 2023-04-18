<template>
  <!-- <v-card min-width="300">
    <v-container class="mt-4">
      <v-row justify="center">
        <v-col>
          <h1 class="font-weight-light text-center">Add a Room</h1>
          <div class="card bg-light">
            <div class="card-body text-center">
              <form class="formgroup">
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control"
                    name="roomName"
                    placeholder="Room name"
                    aria-describedby="buttonAdd"
                    ref="roomName"
                  />
                  <div class="input-group-append">
                    <button type="submit" class="btn btn-sm btn-info" id="buttonAdd">+</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-card> -->
  <div class="container mt-4">
    <div class="row justify-content-center">
      <div class="col-12 col-md-9 col-lg-7">
        <h1 class="font-weight-light text-center">Add a Room</h1>

        <div class="card bg-light">
          <div class="card-body text-center">
            <form class="formgroup">
              <div class="input-group input-group-lg">
                <input
                  type="text"
                  class="form-control"
                  name="roomName"
                  placeholder="Room name"
                  aria-describedby="buttonAdd"
                  ref="roomName"
                />
                <div class="input-group-append">
                  <button type="submit" class="btn btn-sm btn-info" id="buttonAdd">+</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "RoomView",
  methods: {}
}
</script>
