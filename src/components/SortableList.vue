<template>
  <h2>Sortable List</h2>

  <label for="description">Item description</label>
  <input type="text" id="description" name="Description" v-model="desc" />

  <!-- TODO: 2. Add click event listener and call to addNew function -->
  <button>Add New Item</button>

  <div class="container">
    <ul>
      <li
        ref="root"
        class="item-base"
        v-for="(item, index) in state.list"
        v-bind:key="index"
      >
        <list-item
          :item="item.text"
          :color="item.color"
          :index="index"
          @dropItem="dropEvent"
        />
      </li>
    </ul>
  </div>

  <!-- TODO: Add attributes needed to -->
  <div>
    <img
      width="140"
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/AAD/////fX3/5+f/zMz/ZWX/Pj7/lpb/39//XFz/xsb/Ly//ODj/CQn/ra3/q6v/2Nj/8/P/YWH/jo7/+fn/gYH/6ur/9vb/hYX/0ND/pqb/T0//4+P/m5v/t7f/oaH/kZH/VVX/Jyf/Rkb/FBT/cHD/Hh7/trb/QUH/iYn/c3P/OTn/x8f/vr7/ExP/d3cUPOnCAAAFoklEQVR4nO3daXuqSBAFYBAV1wQUcQP3JUZN/v+/G2NuFmmqGlm6iXPO5xqm3itBaNqnDDOPeJ4zH1RyTXhyvVx6M7IfwgtmTaOIrCeNYRmEjXm7EN9HNoexdqF3nhbm+0j72dUrdO1docBLKg2dQn/ULRpoGD1Hn9A9FO+7pGlpE86VAA1jm+VvMYuwqghoGBM9QvdFmdDIcLXJIFR1jn6kp0X4plBoBBqEZ5VAY6BB2FMq7GgQFnc3GpfdSbmwWvjt2k26tnLhROmF5nJ7qly4UHBH+jtb5cK+WqBRe3hh6u98CCH8/wpX62XznizXkjuIkgnXh73ju3elce6za5KlEr6N0q0BBjbzOZZJuJqnXXTwzvRDdYmEb6nvIC85k59iiYQZHscvIVfvyiNcZVzArZdemO0jNM2w9MKntAf8F7/0wkzr09eOyi5Me7zvrB5eSHxfPJDw8T9DCO8NhGQgTB0I7w2EZCBMnccXKrtrsxpsrAoh9Pn/ThqL+AyXkoYCapNfvNCZ9Lf8+maPWlDp3bVMGnNg4p3WTnLg2mheTSz07WJ34xWV+ihuf1iM0Clmt6iKvMySCKtqX9Dnm664iCIInY7uLrOlJRMOX3W3mDGd6EJRVHjS3WHmhBLh373KfKXLCz3d/eWQKits6W4vhxxYoa27vRwyYIUD3e3lEF440t1eDuGFE93t5RBe6OhuL4eErNBUvB+viAS88O//IR5NXhjobjBzorfewrPFs+4OM+Y1upohCN2//ZW4FN5Bi0/A/kDx/uY80xR3gsSsYvjzv/oQvDvEbHWJXWsbh9SuljJndWjFrSjGryZ6jfE+tK85HOXHno7sQ7IHy+XI7lPrhTHHlFeu3j/btJ+qTvx2OnqN2vtMIP1tzMJyh97QtSYbWWXFv1b68t+EjYLPyidZYf30r1HSIV2Ft2r8/2Lzc/EK+NLOz2qmz1e+/Oze9CRLt/X4ZeAchevfp4ZHLfV/5OY6zn4nLW+uF9wxFQg7txcvf0m3crurljn527dN++yfSeHC6M9Xz9S1oRtdApsRb2AMox+pbHG/sCpauBZeFFCbfKfRb6ohddydH6l03zUKD8IlbEFUij9bol5AToVK7rG8aKH4G2vq993RU88098TJdxAq6RO6cGHMexCLqBQ3f1eJvp+FyhZzF1lmoUO844IQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYTwYYQx3RDzE2OEJ2KCx7xUQrGbM1E5EiqfiCksFaGSmteiQlgRRp1R86fESTrUPNAXoZIbYla0sD2OllNDb47RTnxqFN0mOmGJnfxW+ESrfmQe34KsrEQGJ9HzsXuRDtjpcsXPXZvdFI+J6+Mlm9ur0okafWUYu0nSYyoR7s6/ah1u0N3x9z/GmBuX2Nl7CStVCI3u5GuKmPu0ZivbYfBdyc/8a4dfc/aGM8k0TQVCw6iFLcv1q/MtNwHummbYClx/PNlKZ7n27OsxJ++ySiXCy2k1bU7riSbQXiqXdemsy6/Ko7xSkVBjIIQQQv3JQehudSPYrIU747uF5DNAOdIMZP3LhQvdCDbRG/o0QupJtRxZSPuXCx3+blNvVvschOarbgaTZXR4cCrhrMSnqTiEN43Qo4dt605beiVNJDTHuiFkosO+0wpNbjC2zrSTNJ9I6DFLsjpjyVtPKDStMhI30lvSO4Rmg19Y0ZF2K1nrCYWmU7ZHjGlCYGKhac2ZGe7qM4qujGcXmp4z0M36Tu0kvDDJQXh5VHTsMlxxdpWx/F4tnfASz2+FFZ3pzyxP+sB0k/8ASk/dhfkzmdkAAAAASUVORK5CYII="
      alt=""
    />
  </div>
</template>

<script>
import { ref, reactive } from 'vue';
import ListItem from './ListItem.vue';

export default {
  components: { ListItem },

  setup() {
    let desc = ref('');

    const state = reactive({
      list: [
        { text: '1. First Element', color: getRandomColor() },
        { text: '2. Second Element', color: getRandomColor() },
        { text: '3. Third Element', color: getRandomColor() },
        { text: '4. Fourth Element', color: getRandomColor() },
        { text: '5. Fifth Element', color: getRandomColor() },
      ],
    });


    function swapItems(item1, item2) {
      const items = state.list;
      const tmp = items[item1];
      items[item1] = items[item2];
      items[item2] = tmp;
    }

    function getRandomColor() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    function dropEvent(ev) {
      swapItems(ev.org, ev.dst);
    }

    // TODO: 1. Create a function to hander "Add New Item" button

    // TODO: Allow item deletion


    return {
      state,
      desc,
      dropEvent,
    };
  },
};
</script>

<style scoped>
.item-base {
  border: 1px solid lightblue;
  list-style: none;
}

h2 {
  font-size: 1.1rem;
}

button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 4px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  margin: 0 8px;
}

.container {
  margin: 0 10%;
}
</style>
